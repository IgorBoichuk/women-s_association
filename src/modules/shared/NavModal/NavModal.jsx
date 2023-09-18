import style from "./NavModal.module.scss";
import { Navigation } from "../Navigation/Navigation";
import { Facebook } from "../SocialLinks/Facebook";
import ButtonMain from "../ButtonMain/ButtonMain";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import ReactDOM from "react-dom";
import { useCallback, useEffect } from "react";
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
      <div className={style.modal}>
        <Facebook modal />
        <div className={style.navMenu}>
          <Navigation modal close={close} />
        </div>
        <ButtonMain color={"yellow"} children={"Підтримати"} maxW="100%" />
        <div className={style.languageSwitcher}>
          <LanguageSwitcher modal />
        </div>
      </div>
    </div>,
    modalRootElement
  );
};