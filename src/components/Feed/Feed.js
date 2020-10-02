import * as React from "react";

import Controls from './Controls';

import styles from '../../styles/Feed/Feed.module.css';

const Feed = (props) => {
    return (
        <main className={styles.feed}>
            <Controls class={styles.controls}/>
        </main>
    )
};

export default Feed