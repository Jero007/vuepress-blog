import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    
    "/": {
      lang: "zh-CN",
      title: "蜗牛工坊",
      description: "路虽远，行则将至；事虽难，做则必成！",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
