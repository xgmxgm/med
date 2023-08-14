import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { motion }from "framer-motion"

import './ContactPage.scss'

export const ContactPage: FC = () => {
    const { t } = useTranslation();

    const pVariants = {
        hidden: {
            y: 100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
        }
    }

    return (
        <motion.div className='ContactPage'
            initial = {"hidden"}
            animate = {"visible"}
            variants={pVariants}
        >
            <div className="title">
                {t("Header.navigation.contacts")}
            </div>
            <div className="info">
                <div className="content">
                    <h2>{t("Main.Contact.IP")}</h2>
                    <h2>{t("Main.Contact.name")}</h2>
                    <h3>{t("Main.Contact.title")}</h3>
                    <div className="contact">
                        <h3>{t("Main.Contact.phoneNumber")}</h3>
                        <p>{t("Main.Contact.number")}</p>
                        <h3>{t("Main.Contact.mail")}</h3>
                        <p>{t("Main.Contact.mail_a")}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}