import { Fragment } from "react";
import { IntlProvider } from "react-intl";
import { locales } from "./locales";
import messages from "./messages";
const Provider = ({ children, locale=locales.ARABIC }) => {
    return (<IntlProvider
        messages={messages[locale]}
        locale={locale}
        textComponent={Fragment}
        >
        {children}
        </IntlProvider>)
}
export default Provider