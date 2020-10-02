import * as React from "react";
import { connect } from "react-redux";

import { IconContext } from "react-icons";
import { AiOutlinePlus } from "react-icons/ai";
import { MdInbox } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import { BsClockFill } from "react-icons/bs";
import { IoMdSend, IoMdDocument } from "react-icons/io";
import { RiSpam2Fill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";

import actions from "../../store/actions";
import menu from "../../store/menuItems";
import styles from "../../styles/Menu/Menu.module.scss";

const Menu = (props) => {
    const itemTextStyle = [
        styles.itemText,
        props.menuStatus ? null : styles.menuInactive,
    ].join(" ");

    return (
        <IconContext.Provider value={{ size: "1.2em", color: "#747474" }}>
            <aside className={styles.menuContainer}>
                <div className={[styles.composeMail, props.menuStatus ? null : styles.minMenu].join(" ")}>
                    <AiOutlinePlus
                        size="1.7em"
                        color="#5f6368"
                        className={styles.icons}
                    />
                    <span className={[styles.composeText, props.menuStatus ? null : styles.menuInactive].join(" ")}>Compose</span>
                </div>
                <div
                    className={[
                        styles.mailItems,
                        props.activeItem === menu.MENU_INBOX
                            ? styles.activeMailItem
                            : null,
                        props.menuStatus ? null : styles.minMenu
                    ].join(" ")}
                    onClick={() => props.selectItem(menu.MENU_INBOX)}
                >
                    <span className={styles.itemIcon}>
                        <MdInbox />
                    </span>
                    <span className={itemTextStyle}>Inbox</span>
                </div>
                <div
                    className={[
                        styles.mailItems,
                        props.activeItem === menu.MENU_STARRED
                            ? styles.activeMailItem
                            : null,
                            props.menuStatus ? null : styles.minMenu
                    ].join(" ")}
                    onClick={() => props.selectItem(menu.MENU_STARRED)}
                >
                    <span className={styles.itemIcon}>
                        <BsStarFill />
                    </span>
                    <span className={itemTextStyle}>Starred</span>
                </div>
                <div
                    className={[
                        styles.mailItems,
                        props.activeItem === menu.MENU_SNOOZED
                            ? styles.activeMailItem
                            : null,
                            props.menuStatus ? null : styles.minMenu
                    ].join(" ")}
                    onClick={() => props.selectItem(menu.MENU_SNOOZED)}
                >
                    <span className={styles.itemIcon}>
                        <BsClockFill />
                    </span>
                    <span className={itemTextStyle}>Snoozed</span>
                </div>
                <div
                    className={[
                        styles.mailItems,
                        props.activeItem === menu.MENU_SENT
                            ? styles.activeMailItem
                            : null,
                            props.menuStatus ? null : styles.minMenu
                    ].join(" ")}
                    onClick={() => props.selectItem(menu.MENU_SENT)}
                >
                    <span className={styles.itemIcon}>
                        <IoMdSend />
                    </span>
                    <span className={itemTextStyle}>Sent</span>
                </div>
                <div
                    className={[
                        styles.mailItems,
                        props.activeItem === menu.MENU_DRAFT
                            ? styles.activeMailItem
                            : null,
                            props.menuStatus ? null : styles.minMenu
                    ].join(" ")}
                    onClick={() => props.selectItem(menu.MENU_DRAFT)}
                >
                    <span className={styles.itemIcon}>
                        <IoMdDocument />
                    </span>
                    <span className={itemTextStyle}>Drafts</span>
                </div>
                <div
                    className={[
                        styles.mailItems,
                        props.activeItem === menu.MENU_SPAM
                            ? styles.activeMailItem
                            : null,
                            props.menuStatus ? null : styles.minMenu
                    ].join(" ")}
                    onClick={() => props.selectItem(menu.MENU_SPAM)}
                >
                    <span className={styles.itemIcon}>
                        <RiSpam2Fill />
                    </span>
                    <span className={itemTextStyle}>Spam</span>
                </div>
                <div
                    className={[
                        styles.mailItems,
                        props.activeItem === menu.MENU_TRASH
                            ? styles.activeMailItem
                            : null,
                            props.menuStatus ? null : styles.minMenu
                    ].join(" ")}
                    onClick={() => props.selectItem(menu.MENU_TRASH)}
                >
                    <span className={styles.itemIcon}>
                        <FaTrash />
                    </span>
                    <span className={itemTextStyle}>Trash</span>
                </div>
            </aside>
        </IconContext.Provider>
    );
};

const mapStateToProps = (state) => {
    return {
        activeItem: state.menuItemActive,
        menuStatus: state.menuActive,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectItem: (item) =>
            dispatch({ type: actions.SELECT_ITEM, payload: item }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
