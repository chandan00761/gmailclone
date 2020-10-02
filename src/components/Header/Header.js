import * as React from "react";

// COMPONENT IMPORTS

import Search from "./Search";

// ICON IMPORTS

import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import GoogleSetting from "../../icons/GoogleSetting";

// STYLES IMPORT

import styles from "../../styles/Header/Header.module.css";

const Header = (props) => {
  return (
    <IconContext.Provider value={{ size: "1.5em", color: "#5f6368", className:styles.icons}}>
      <header className={styles.header}>
        <span>
          <GiHamburgerMenu onClick={props.menuHandler} />
          {/* TODO add bmail icon */}
        </span>
        <Search/>
        <span>
          <AiOutlineQuestionCircle />
          <GoogleSetting cssClassName={styles.icon_setting}/>
          <HiOutlineUserCircle />
        </span>
      </header>
    </IconContext.Provider>
  );
};

export default Header;
