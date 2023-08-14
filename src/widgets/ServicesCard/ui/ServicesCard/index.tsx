import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';
import './ServicesCard.scss'
import { ServiceCard } from '@/widgets/ServiceCard';

export const ServicesCard = () => {
    const { t } = useTranslation();

    const pVariants = {
        hidden: {
            y: 40,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <motion.div className="SevicesCard"
            initial = "hidden"
            whileInView = "visible"
            variants={pVariants}
        >
            <div className="ServicesCardUp">
                <h2>{t("Main.servicesCard.title")}</h2>
            </div>
            <div className="ServicesCardDown">
                <div className="servicesUp">
                    <ServiceCard id={1}><h2>{t("Main.servicesCard.servicesName.LS")}</h2></ServiceCard>
                    <ServiceCard id={2}><h2>{t("Main.servicesCard.servicesName.MI")}</h2></ServiceCard>
                    <ServiceCard id={3}><h2>{t("Main.servicesCard.servicesName.BAD")}</h2></ServiceCard>
                </div>
                <div className="servicesUp">
                    <ServiceCard id={4}><h2>{t("Main.servicesCard.servicesName.LSCen")}</h2></ServiceCard>
                    <ServiceCard id={5}><h2>{t("Main.servicesCard.servicesName.MICen")}</h2></ServiceCard>
                    <ServiceCard id={6}><h2>{t("Main.servicesCard.servicesName.GS")}</h2></ServiceCard>
                </div>
            </div>
        </motion.div>
    )
}