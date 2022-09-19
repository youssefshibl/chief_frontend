// before go to view
import FrontConfig from "@/config/font/main";
const DEFAULT_TITLE = FrontConfig.AppName;
const aftereachsettitle = async function (to) {
  let pagename = to.meta.title || DEFAULT_TITLE;
  document.title = pagename;
};

export { aftereachsettitle };
