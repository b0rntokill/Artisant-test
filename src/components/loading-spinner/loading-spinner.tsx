import React from "react";
import styles from "./loading-spinner.module.scss";

function LoadingSpinner(): JSX.Element {
  return <div className={styles.spinner}>Loading...</div>;
}

export default LoadingSpinner;
