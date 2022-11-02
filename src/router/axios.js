/**
 * 全站http配置
 *
 * axios参数说明
 * isSerialize是否开启form表单提交
 * isToken是否需要token
 */
import axios from "axios";
import store from "@/store/";
import router from "@/router/router";
import { serialize } from "@/util/util";
import { getToken } from "@/util/auth";
import { Message, MessageBox } from "element-ui";
import website from "@/config/website";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Base64 } from "js-base64";
let timer = null,
  alertVisible = false,
  setTimer = () => {
    if (location.href.indexOf("login") > -1 || alertVisible) return false;
    timer = setTimeout(() => {
      alertVisible = true;
      MessageBox.alert("由于您长时间未操作，账户已自动退出。", "", {
        confirmButtonText: "重新登录",
        callback: () => {
          alertVisible = false;
          store.dispatch("FedLogOut").then(() => {
            router.push({ path: "/login" });
          });
        }
      });
    }, website.tokenTime * 1000);
  },
  clearTimer = () => {
    clearTimeout(timer);
    timer = null;
  };
//默认超时时间
axios.defaults.timeout = 10000;
//返回其他状态码
axios.defaults.validateStatus = function(status) {
  return status >= 200 && status <= 500;
};
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;
// NProgress 配置
NProgress.configure({
  showSpinner: false
});
//http request拦截
axios.interceptors.request.use(
  config => {
    if (timer !== null) clearTimer();
    setTimer();
    //开启 progress bar
    NProgress.start();
    const meta = config.meta || {};
    const isToken = meta.isToken === false;
    config.headers["Authorization"] = `Basic ${Base64.encode(
      `${website.clientId}:${website.clientSecret}`
    )}`;
    if (getToken() && !isToken) {
      //让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
      config.headers["Blade-Auth"] = "bearer " + getToken();
    }
    //headers中配置serialize为true开启序列化
    if (config.method === "post" && meta.isSerialize === true) {
      config.data = serialize(config.data);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
//http response 拦截
axios.interceptors.response.use(
  res => {
    //关闭 progress bar
    NProgress.done();
    //获取状态码
    const status = res.data.code || res.status;
    const statusWhiteList = website.statusWhiteList || [];
    let message = res.data.msg || res.data.error_description;
    const errorDetail = res.data.message;
    //如果在白名单里则自行catch逻辑处理
    if (statusWhiteList.includes(status)) return Promise.reject(res);
    // 如果是401则跳转到登录页面
    if (status === 401) {
      if (alertVisible) return;
      alertVisible = true;
      MessageBox.alert("登录已失效。", "", {
        confirmButtonText: "重新登录",
        callback: () => {
          alertVisible = false;
          store.dispatch("FedLogOut").then(() => {
            router.push({ path: "/login" });
          });
        }
      });
      return Promise.reject(new Error("登录已失效"));
    }
    // 返回码404，提示接口请求失败
    if (status === 404) {
      Message({
        message: "请求接口失败了~",
        type: "error"
      });
      return Promise.reject(new Error(errorDetail));
    }
    // 如果请求为非200否者默认统一处理
    if (status !== 200) {
      Message({
        message: errorDetail || message,
        type: "error"
      });
      return Promise.reject(new Error(errorDetail));
    }
    return res;
  },
  error => {
    NProgress.done();
    return Promise.reject(new Error(error));
  }
);

export default axios;
