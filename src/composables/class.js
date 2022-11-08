export const NavOption = class {
  constructor({ name, link, disabled, icon, children, i18n, click, isGroup }) {
    Object.assign(this, {
      name: name || "",
      link: link || "",
      disabled: disabled || false,
      icon: icon || "",
      children: Array.isArray(children) ? children : [],
      i18n: i18n || false,
      click: typeof click === "function" ? click : () => {},
      hasChildren: Array.isArray(children) && children.length > 0,
      isGroup: isGroup || false,
    });
  }
};
