import React from "react";
import style from "./Invitation.module.scss";
import ButtonMain from "../../shared/ButtonMain/ButtonMain";
import { useGetInvitationContent } from "../../../hooks/home/invitations/useGetInvitationContent";

export const Invitation = () => {
	const { invitation, loadingInvitation } = useGetInvitationContent();
	
	return (
		<div>
			{invitation && !loadingInvitation && (
				<>
					<h3>{invitation.title}</h3>
					<p>{invitation.invitation}</p>
					<ButtonMain>{invitation.button}</ButtonMain>
				</>
			)}
		</div>
	);
};
