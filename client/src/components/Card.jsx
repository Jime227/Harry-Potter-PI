import React from "react";
import styles from "./Card.module.css";

export default function Card({ name, image, actor, house, ancestry }) {
  return (
    <div className={styles.container} key={name}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={image} alt="A pj" />
      </div>
      <div className={styles.textContainer}>
        <h3>{name}</h3>
        <h3>{house}</h3>
        <h3>{ancestry}</h3>
        <h4>Interpreted by: {actor}</h4>
      </div>
    </div>
  );
}
