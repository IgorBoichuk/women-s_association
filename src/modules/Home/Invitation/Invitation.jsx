import React from "react";
import style from "./Invitation.module.scss";
import ButtonMain from "../../shared/ButtonMain/ButtonMain";

export const Invitation = () => {
  return (
    <div>
      <h3>Запрошуємо до нашої команди!</h3>
      <p>
        Шукаємо активних, ініціативних жінок, мам чи дружин діючих
        військовослужбовців або жінок з родин загиблих героїв, які мають бажання
        допомагати таким самим жінкам, в умовах повномасштабної війни.
      </p>
      <ButtonMain children={"Заповнити анкету"} />
    </div>
  );
};
