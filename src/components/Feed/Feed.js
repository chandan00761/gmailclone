import * as React from "react";
import { connect } from "react-redux";

import Controls from "./Controls";
import InboxFeed from "./InboxFeed";
import menuItems from "../../store/menuItems";

import styles from "../../styles/Feed/Feed.module.scss";

const Feed = (props) => {
    let userFeed = null;

    switch (props.menu) {
        case menuItems.MENU_INBOX:
            userFeed = (
                <main className={styles.feed}>
                    <Controls class={styles.controls} />
                    <InboxFeed />
                </main>
            );
            break;
        default:
            userFeed = <div>Something went wrong!!</div>;
    }

    return userFeed;
};

const mapStateToProps = (state) => {
    return {
        menu: state.menuItemActive,
    };
};

export default connect(mapStateToProps)(Feed);
