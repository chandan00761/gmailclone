import * as React from "react";
import { connect } from "react-redux";

import Mail from "./Mail";
import { SELECT_MAIL_CAT }from "../../store/actions";

import { IconContext } from "react-icons";
import { MdInbox } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { BsTagFill } from "react-icons/bs";

import styles from "../../styles/Feed/InboxFeed.module.scss";

const InboxFeed = (props) => {
    return (
        <div className={styles.inboxFeed}>
            <IconContext.Provider value={{ size: "1.3em", color: "#727272" }}>
                <div className={styles.mailTypes}>
                    <div
                        onClick={() => props.changeCategory("PRIMARY")}
                        className={[
                            props.category === "PRIMARY"
                                ? styles.activeRed
                                : null,
                        ].join(" ")}
                    >
                        <MdInbox />
                        Primary
                    </div>
                    <div
                        onClick={() => props.changeCategory("SOCIAL")}
                        className={[
                            props.category === "SOCIAL"
                                ? styles.activeGreen
                                : null,
                        ].join(" ")}
                    >
                        <IoMdPeople />
                        Social
                    </div>
                    <div
                        onClick={() => props.changeCategory("PROMOTIONAL")}
                        className={[
                            props.category === "PROMOTIONAL"
                                ? styles.activeBlue
                                : null,
                        ].join(" ")}
                    >
                        <BsTagFill />
                        Promotional
                    </div>
                </div>
            </IconContext.Provider>
            <table cellSpacing={"0"} cellPadding={"0"} className={styles.mailFeed}>
                <tbody>
                    {props.mailList.map((mail) => (
                        <Mail
                            id={mail.id}
                            from={mail.from}
                            subject={mail.subject}
                            body={mail.body}
                            read={mail.read}
                            selected={mail.selected}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        category: state.feedMailCategory,
        mailList: state.feedInboxMail,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCategory: (category) =>
            dispatch({ type: SELECT_MAIL_CAT, payload: category }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InboxFeed);
