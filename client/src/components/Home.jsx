import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import styles from "./Home.module.css";
//import NavBar from "./NavBar";
//import Order from "./Order";

export default function Home() {
  const dispatch = useDispatch();
  const all = useSelector((state) => state.all);

  return (
    <div className={styles.container}>
      {/* <NavBar />
      <Order /> */}
      <div className={styles.cardContainer}>
        {all &&
          all?.map((c) => (
            <Card
              name={c.name}
              image={c.image}
              actor={c.actor}
              ancestry={c.ancestry}
              house={c.house}
              key={c.name}
            />
          ))}
      </div>
    </div>
  );
}
