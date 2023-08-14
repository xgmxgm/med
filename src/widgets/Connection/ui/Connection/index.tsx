import { useTranslation } from "react-i18next"

import './Connection.scss'

export const Connection = () => {
    const { t } = useTranslation();

    return (
        <div className='Connection'>
            <h2>{t("Main.Connection.title")}</h2>
            <h3>{t("Main.Connection.phoneNumber")}</h3>
            <h3>{t("Main.Connection.number")}</h3>
            <h3>{t("Main.Connection.mail")}</h3>
            <h3>{t("Main.Connection.mail_a")}</h3>
        </div>
    )
}