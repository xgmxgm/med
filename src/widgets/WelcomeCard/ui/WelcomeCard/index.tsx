import { FC } from "react"
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import './WelcomeCard.scss'

import img from "../../../../../public/img/anunay-rai-e7yuZ3kECa0-unsplash.jpg"

export const WelcomeCard: FC = () => {
    const { t } = useTranslation();

    const pVariants = {
        hidden: {
            x: 100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
        }
    }

    return (
        <motion.div className="welcomeCard"
            initial = {"hidden"}
            animate = {"visible"}
            variants={pVariants}
        >
            <div className="welcomeCardContent">
                <div className="leftContent">
                    <div className="contentText">
                        <p>{t("Main.welcomeCard")}</p>
                    </div>
                </div>
                {/* <div className="rightContent">
                    <img src={img} alt="" />
                </div> */}
            </div>
        </motion.div>
    )
}