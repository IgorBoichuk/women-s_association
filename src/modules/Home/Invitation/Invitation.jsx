import React from "react";
import style from "./Invitation.module.scss";
import ButtonMain from "../../shared/ButtonMain/ButtonMain";
import { Container } from "../../shared/Container/Container";
import { useGetInvitationContent } from "../../../hooks/home/invitations/useGetInvitationContent";

export const Invitation = () => {
  const { invitation, loadingInvitation } = useGetInvitationContent();

  return (
    <section className={style.section}>
      <Container>
        {invitation && !loadingInvitation && (
          <div className={style.wrapper}>
            <h3 className={style.title}>{invitation.title}</h3>
            <div className={style.descriptionWrapper}>
              <p className={style.description}>{invitation.invitation}</p>
              <ButtonMain>{invitation.button}</ButtonMain>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
