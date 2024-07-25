import React from "react";
import {getImageUrl} from "../../utils"
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm <span>Rajeshwar Singh</span></h1>
                <h3 className={styles.designation}>I'm a <span></span></h3>
                <p className={styles.description}>I'm a developer with knowledge in web development and Android app creation. Along with my technical skills, I have a strong dedication to teaching and mentoring students, helping them unlock their potential.</p>

                <a className={styles.contactBtn} href="mailto:rajeshwarofficial27@gmail.com">Contact Me</a>
            </div>
            <img className={styles.profileImg} src={getImageUrl("hero/profile.jpg")} alt="Profile" />
        </section>
    )
}