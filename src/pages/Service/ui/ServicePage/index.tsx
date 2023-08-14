import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from "react-i18next"

import './ServicePage.scss'
import { Connection } from '@/widgets/Connection'

export const ServicePage: FC = () => {
    const params = useParams();

    const { t } = useTranslation();

    const id = params.id;

    return (
        <div className='ServicePage'>
            <div className="ServicePageUp">
                <h2>{t("Header.navigation.services")}</h2>
            </div>
            <div className="ServicePageCenter">
                <h2>{t(`Main.Services.${id}.title`)}</h2>
                <Connection />
            </div>
            <div className="ServicePageDown">
                <p>{t(`Main.Services.${id}.info`)}</p>
            </div>
        </div>
    )
}