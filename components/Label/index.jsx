import React from "react";
import { Icon } from "./patch";
import styles from "./style.module.scss";

export default function Label({ data, color }) {
  return (
    <p className={styles.label}>
      <span>{data}</span>
      <Icon fill={color} />
    </p>
  );
}
