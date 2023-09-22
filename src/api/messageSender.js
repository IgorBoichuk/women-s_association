import { toast } from "react-toastify";
import { CustomToastContainer } from "../modules/shared/CustomToastContainer/CustomToastContainer";

export const sendEmail = (message, subject) => {
	const config = {
		SecureToken: process.env.REACT_APP_MAIL_SENDER_TOKEN,
		To: process.env.REACT_APP_MAIL_SENDER,
		From: process.env.REACT_APP_MAIL_RECEIVER,
		Subject: subject,
		Body: message,
	};
	if (window.Email) {
		window.Email.send(config)
			.then((messageStatus) => {
				if (messageStatus === "OK") {
					toast.success(<CustomToastContainer success={true} />, {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						pauseOnHover: true,
						draggable: true,
					});
				} else {
					toast.error(<CustomToastContainer error={true} />, {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						pauseOnHover: true,
						draggable: true,
					});
				}
			})
			.catch((error) => {
				console.error("Promise rejected with error:", error);
			});
	}
};
