import React, { ButtonHTMLAttributes } from "react";
import styles from "./custom-button.module.scss";

type CustomButtonProps = {
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function CustomButton({ text, ...otherProps }: CustomButtonProps): JSX.Element {
  return (
    <button className={styles.customButton} {...otherProps}>
      {text}
    </button>
  );
}

export default CustomButton;
