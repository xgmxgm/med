import { FC } from 'react'
import { useTranslation } from 'react-i18next';

import './Footer.scss'

export const Footer: FC = () => {
    const { t } = useTranslation();

    return (
        <footer>
            <div className='Footer'>
                <div className="FooterLeft">
                    <h2>{t("Footer.companyName")}</h2>
                    <p>{t("Footer.law")}</p>
                </div>
                <div className="FooterCenter">
                    <p>{t("Footer.companyInfo")}</p>
                </div>
                <div className="FooterRight">
                    <p>{t("Footer.connection.title")}</p>
                    <p>{t("Footer.connection.phone")}</p>
                    <p>{t("Footer.connection.email")}</p>
                </div>
            </div>
        </footer>
    )
}