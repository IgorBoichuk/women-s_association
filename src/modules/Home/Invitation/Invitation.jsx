import React from "react";
import style from "./Invitation.module.scss";
import ButtonMain from "../../shared/ButtonMain/ButtonMain";
import { Container } from "../../shared/Container/Container";
import { useGetInvitationContent } from "../../../hooks/home/invitations/useGetInvitationContent";
import bgPicture from "../../../assets/img/Invitation/lediesmob.jpg";

export const Invitation = () => {
  const { invitation, loadingInvitation } = useGetInvitationContent();

  return (
    <section className={style.section}>
      <Container>
        {invitation && !loadingInvitation && (
          <div className={style.wrapper}>
            <h3 className={style.title}>{invitation.title}</h3>
            <div className={style.imgWrapper}>
              <img
                src={bgPicture}
                alt="Жінки та матері військовослужбовців, групове фото"
                className={style.bgImg}
              />
            </div>
            <p className={style.description}>{invitation.invitation}</p>
            <ButtonMain>{invitation.button}</ButtonMain>
          </div>
        )}
      </Container>
    </section>
  );
};
