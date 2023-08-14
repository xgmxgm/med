import { FC } from "react"
import { useTranslation } from "react-i18next"

import './ServicesPage.scss'
import { ServicesCard } from "@/widgets/ServicesCard"

export const ServicesPage: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="ServicesPage">
            <div className="title">
                {t("Header.navigation.services")}
            </div>
            <ServicesCard />
        </div>
    )
}