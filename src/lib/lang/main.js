import { createI18n } from "vue-i18n";
import messages from "./data";
const i18n = createI18n({
  locale: "en", // set locale
  fallbackLocale: "ar", // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});
export default i18n;
