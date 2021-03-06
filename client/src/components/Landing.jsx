import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Welcome to the magical world of Harry Potter!!
        </h1>
        <h3 className={styles.text}>
          Are you ready to meet some awesome characters?
        </h3>
        <Link to="/home">
          <button className={styles.btn}>Come on in!</button>
        </Link>
      </div>
    </div>
  );
}
