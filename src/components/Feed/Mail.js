import * as React from "react";
import {IconContext} from "react-icons";
import {
    IoMdMailOpen,
    MdCheckBoxOutlineBlank,
    MdArchive,
    MdDelete,
    AiOutlineStar,
    MdCheckBox,
    AiFillClockCircle,
} from "react-icons/all";
import {connect} from "react-redux";

import styles from "../../styles/Feed/Mail.module.scss";
import {READ_EMAIL, TOGGLE_SELECT_EMAIL} from '../../store/actions';
import iconStyle from "../../styles/icons.module.scss";

const Mail = (props) => {
    const [showExtra, toggleExtras] = React.useState(false);
    return (
        <IconContext.Provider
            value={{size: "1.3em"}}
        >
            <tr className={[styles.mail, props.read ? styles.read : styles.unread, props.selected ? styles.selected : null].join(" ")}
                onMouseOver={() => toggleExtras(true)}
                onMouseOut={() => toggleExtras(false)}
                onClick={() => props.readMail(props.id)}>
                <td className={styles.mailIcons} onClick={(e) => {
                    props.selectMail(props.id);
                    e.stopPropagation();
                }}>
                    {
                        !props.selected ? <MdCheckBoxOutlineBlank title={"Select"}/>
                                       : <MdCheckBox title={"Unselect"}/>
                    }
                    <AiOutlineStar/>
                </td>
                <td className={styles.mailSender}>{props.from}</td>
                <td><span className={styles.mailSubject}> {props.subject} </span> <span
                    className={styles.mailBody}> - {props.body} </span>
                </td>
                <td style={{
                    opacity : showExtra ? 1 : 0.001
                }}>
                    <MdArchive className={iconStyle.gmailIcon} title={"Archive"}/>
                    <MdDelete className={iconStyle.gmailIcon} title={"Delete"}/>
                    <IoMdMailOpen className={iconStyle.gmailIcon} title={"Mark as read"}/>
                    <AiFillClockCircle className={iconStyle.gmailIcon} title={"Snooze"}/>
                </td>
            </tr>
        </IconContext.Provider>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        readMail: (id) => dispatch({type: READ_EMAIL, payload: id}),
        selectMail: (id) =>dispatch({type: TOGGLE_SELECT_EMAIL, payload:id}),
    }
}

export default connect(null, mapDispatchToProps)(Mail);
