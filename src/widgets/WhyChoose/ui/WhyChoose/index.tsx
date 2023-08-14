import { FC } from "react"
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import './WhyChoose.scss'
import { WhyChooseCard } from "@/widgets/WhyChooseCard";
import { WhyChooseCardWhite } from "@/widgets/WhyChooseCardWhite";
import { Arrow } from "@/widgets/Arrow";

export const WhyChoose: FC = () => {
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
        <motion.div className="WhyChoose"
            initial = "hidden"
            whileInView = "visible"
            variants={pVariants}
        >
            <div className="WhyChooseUp">
                <h2>{t("Main.whyChoose.title")}</h2>
            </div>
            <div className="WhyChooseDown">
                <div className="Card">
                    <WhyChooseCard>{t("Main.whyChoose.cardOne.upText")}</WhyChooseCard>
                    <Arrow styleName="180" />
                    <WhyChooseCardWhite>{t("Main.whyChoose.cardOne.downText")}</WhyChooseCardWhite>
                </div>
                <div className="Card">
                    <WhyChooseCardWhite>{t("Main.whyChoose.cardTwo.upText")}</WhyChooseCardWhite>
                    <Arrow styleName="0" />
                    <WhyChooseCard>{t("Main.whyChoose.cardTwo.downText")}</WhyChooseCard>
                </div>
                <div className="Card">
                    <WhyChooseCard>{t("Main.whyChoose.cardThree.upText")}</WhyChooseCard>
                    <Arrow styleName="180" />
                    <WhyChooseCardWhite>{t("Main.whyChoose.cardThree.downText")}</WhyChooseCardWhite>
                </div>
            </div>
        </motion.div>
    )
}