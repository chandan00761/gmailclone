import * as React from "react";

import { IconContext } from "react-icons";
import { MdInbox } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { BsTagFill } from "react-icons/bs";

import styles from "../../styles/Feed/MailList.module.scss";

const MailList = (props) => {
    return (
        <div className={styles.mailList}>
            <IconContext.Provider value={{ size: "1.3em", color: "#727272" }} >
                <div className={styles.mailTypes}>
                    <div>
                        <MdInbox />
                        Primary
                    </div>
                    <div>
                        <IoMdPeople />
                        Social
                    </div>
                    <div>
                        <BsTagFill />
                        Promotional
                    </div>
                </div>
            </IconContext.Provider>
            <div></div>
        </div>
    );
};

export default MailList;
