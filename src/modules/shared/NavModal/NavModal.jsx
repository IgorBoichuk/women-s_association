import style from "./NavModal.module.scss";
import { Navigation } from "../Navigation/Navigation";
import { SocialNetworkIcon } from "../SocialLinks/SocialNetworkIcon";
import ButtonMain from "../ButtonMain/ButtonMain";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import ReactDOM from "react-dom";
import { useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { fromRigth } from "../../../animations/modalAnimation";
const modalRootElement = document.querySelector("#modal");

export const NavModal = ({ close }) => {
  const handleOnDropClose = (event) => {
    event.target === event.currentTarget && close();
  };

  const handleKeyDown = useCallback(
    (event) => {
      event.key === "Escape" && close();
    },
    [close]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return ReactDOM.createPortal(
    <div className={style.modalOverlay} onClick={handleOnDropClose}>
      <motion.div
        variants={fromRigth}
        initial="hidden"
        exit="exit"
        whileInView="visible"
        className={style.modal}
      >
        <SocialNetworkIcon socialNetwork="facebook" width="46" height="46" />
        <div className={style.navMenu}>
          <Navigation modal close={close} />
        </div>
        <ButtonMain color={"yellow"} children={"Підтримати"} maxW="100%" />
        <div className={style.languageSwitcher}>
          <LanguageSwitcher modal />
        </div>
      </motion.div>
    </div>,
    modalRootElement
  );
};
