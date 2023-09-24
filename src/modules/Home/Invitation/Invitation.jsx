import React from "react";
import style from "./Invitation.module.scss";
import { Container } from "../../shared/Container/Container";
import { useGetInvitationContent } from "../../../hooks/home/invitations/useGetInvitationContent";
import { LinkAsButton } from "../../shared/LinkAsButton/LinkAsButton";

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
              {/* <ButtonMain color="yellow">{invitation.button}</ButtonMain> */}
              <LinkAsButton link="https://docs.google.com/forms/d/e/1FAIpQLSdDZbEhPkZONSZYBz8UD8dcARY_3gLUTOnF3w5GXzDWdT5idA/viewform">
                {invitation.button}
              </LinkAsButton>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
