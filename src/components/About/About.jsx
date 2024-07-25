import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils"

export const About = () => {
    return (
        <section className={ styles.container } id="about">
            <h2 className={ styles.title }>About</h2>
            <div className={ styles.content }>
                <img className={styles.aboutImage} src={ getImageUrl("about/aboutImage.png") } alt="about-me" />
                <ul className={ styles.aboutItems }>
                    <li className={ styles.aboutItem }>
                        <img className={ styles.itemImage } src={ getImageUrl("about/uiImage.png") } alt="ui-image" />
                        <div className={ styles.aboutItemText }>
                            <h3>Web Developer</h3>
                            <p>I'm a web developer with knowledge in building responsive and optimized websites especially Single Page Applications using frameworks such as Angular, React and more...</p>
                        </div>
                    </li>
                    <li className={ styles.aboutItem }>
                        <img className={ styles.itemImage } src={ getImageUrl("about/androidImage.png") } alt="android-image" />
                        <div className={ styles.aboutItemText }>
                            <h3>Android Developer</h3>
                            <p>I'm a Android developer building Kotlin based applications. I can work with multiple frameworks and technologies like Jetpack Compose, Firebase and more...</p>
                        </div>
                    </li>
                    <li className={ styles.aboutItem }>
                        <img className={ styles.itemImage } src={ getImageUrl("about/teachingImage.png") } alt="teaching-image" />
                        <div className={ styles.aboutItemText }>
                            <h3>Educator</h3>
                            <p>I provide teaching assistance to students in subjects like Mathematics, Aptitude & Reasoning, History, Political Science, Geography and more...</p>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
    )
}