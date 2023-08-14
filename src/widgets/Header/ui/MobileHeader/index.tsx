import { FC, useState } from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import './MobileHeader.scss'
import { Modal } from "@/shared/ui/Modal";
import { Button } from "@/shared/ui/Button";

export const MobileHeader: FC = () => {
    const [burger, setBurger] = useState<boolean>(false);
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
        <motion.div className="MobileHeader"
            initial = {"hidden"}
            animate = {"visible"}
            variants = {pVariants}
        >
            <div className="HeaderContent">
                <div className="HeaderTitle">
                    <h2>{t("Header.title")}</h2>
                </div>
                <div className="locales">
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
                <div className="burger" onClick={() => setBurger(true)}>
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                </div>
            </div>
            {burger &&
            <div className={burger && "burgerMain"} onClick={() => setBurger(false)}>
                <div className="burgerContent">
                    <div className="burgerNav">
                        <nav>
                            <Link to="/" className="Link"><p>{t("Header.navigation.company")}</p></Link>
                            <Link to="/services" className="Link"><p>{t("Header.navigation.services")}</p></Link>
                            <Link to="/contact" className="Link"><p>{t("Header.navigation.contacts")}</p></Link>
                        </nav>
                    </div>
                    <div className="burgerFooter">
                        <h2>{t("Header.workTime")}</h2>
                        <h2>{t("Header.mail")}</h2>
                    </div>
                </div>
            </div>}
        </motion.div>
    )
}