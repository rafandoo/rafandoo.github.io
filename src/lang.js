import { createI18n } from "vue-i18n";
import pt_br from "./langs/pt_br";
import en from "./langs/en";

const messages = {
    pt_br,
    en
};

export default createI18n({
    locale: 'pt_br',
    messages
});