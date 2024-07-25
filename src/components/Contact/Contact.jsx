import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={ styles.container }>
            <div className={ styles.text }>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={ styles.links }>
                <li className={ styles.link }>
                    <img src={ getImageUrl("contact/email.png") } alt="email-icon" />
                    <a href="mailto:rajeshwarofficial27@gmail.com">rajeshwarofficial27@gmail.com</a>
                </li>
                <li className={ styles.link }>
                    <img src={ getImageUrl("contact/linkedin.png") } alt="linked-icon" />
                    <a href="https://www.linkedin.com/in/rajeshwarsingh27/">linkedin.com/in/rajeshwarsingh27</a>
                </li>
                <li className={ styles.link }>
                    <img src={ getImageUrl("contact/github.png") } alt="github-icon" />
                    <a href="https://github.com/rajeshwar09">github.com/rajeshwar09</a>
                </li>
            </ul>
        </footer>
    )
}