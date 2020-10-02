import * as React from "react";

import Controls from './Controls';
import MailList from './MailList';

import styles from '../../styles/Feed/Feed.module.scss';

const Feed = (props) => {
    return (
        <main className={styles.feed}>
            <Controls class={styles.controls}/>
            <MailList/>
        </main>
    )
};

export default Feed