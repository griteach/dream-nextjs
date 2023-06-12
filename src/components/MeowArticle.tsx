"use client";

import { useEffect, useState } from "react";
import styles from "./MeowArticle.module.css";

export default function MeowArticle() {
  const [text, setText] = useState("Loading...");

  //맛만 봤다 아입니꺼.
  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com", {
      next: { revalidate: 0 },
      //cache:'no-store'
    })
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);
  return <article className={styles.article}>{text}</article>;
}
