import * as React from "react";

import { IconContext } from "react-icons";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";

import styles from "../../styles/Feed/Mail.module.scss";

const Mail = (props) => {
    return (
        <tr className={styles.mail}>
            <td className={styles.mailIcons}>
                <IconContext.Provider
                    value={{ size: "1.3em", color: "#727272" }}
                >
                    <MdCheckBoxOutlineBlank />
                    <AiOutlineStar />
                </IconContext.Provider>
            </td>
            <td className={styles.mailSender}>{props.from}</td>
            <td className={styles.mailSubject}>{props.subject}</td>
            <td className={styles.mailBody}> - {props.body}</td>
        </tr>
    );
};

export default Mail;
