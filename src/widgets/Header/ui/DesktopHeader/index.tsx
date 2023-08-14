import { FC, useState } from "react"
import { useTranslation } from "react-i18next";
import { motion }from "framer-motion"
import { Link } from "react-router-dom";

import './DesktopHeader.scss'
import { Modal } from "@/shared/ui/Modal";
import { Button } from "@/shared/ui/Button";

export const DesktopHeader: FC = () => {
    const [modalActive, setModalActive] = useState<boolean>(false);

    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    }

    const pVariants = {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
        }
    }

    return (
        <motion.div className="DesktopHeader"
            initial = {"hidden"}
            animate = {"visible"}
            variants={pVariants}
        >
            <div className="upHeader">
                <h2>{t("Header.workTime")}</h2>
                <h2>{t("Header.mail")}</h2>
                <Modal active={modalActive} setActive={setModalActive}>
                    <h2 className="modal__language">{t("Header.language")}</h2>
                    <Button onClick={() => {
                        changeLanguage("en")
                        setModalActive(false)
                        }}>EN</Button>
                    <Button onClick={() => {
                        changeLanguage("ru")
                        setModalActive(false)
                        }}>RU</Button>
                </Modal>
                <Button onClick={() => setModalActive(true)}>{t("Header.language")}</Button>
            </div>
            <div className="downHeader">
                <h1><Link to="/" className="Link">{t("Header.title")}</Link></h1>
                <nav>
                    <Link to="/" className="Link"><p>{t("Header.navigation.company")}</p></Link>
                    <Link to="/services" className="Link"><p>{t("Header.navigation.services")}</p></Link>
                    <Link to="/contact" className="Link"><p>{t("Header.navigation.contacts")}</p></Link>
                </nav>
                <div className="phone">
                    <h2>+7 777 29 59 777</h2>
                </div>
            </div>
        </motion.div>
    )
}