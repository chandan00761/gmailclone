import * as React from "react";
import { connect } from "react-redux";

import { TOGGLE_SELECT_ALL }from "../../store/actions";

import { IconContext } from "react-icons";
import {
    MdArrowDropDown,
    MdCheckBoxOutlineBlank,
    MdCheckBox,
} from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

import {
    feedIcon,
    border8,
    feedIconStroke,
} from "../../styles/Feed/Feed.module.scss";

const Controls = (props) => {
    return (
        <IconContext.Provider value={{ color: "#747474", className: feedIcon }}>
            <div className={props.class}>
                <span onClick={props.toggleSelectAll}>
                    {props.selectAll ? (
                        <MdCheckBox size="1.2em" />
                    ) : (
                        <MdCheckBoxOutlineBlank size="1.2em" />
                    )}
                </span>
                <span>
                    <MdArrowDropDown />
                </span>
                <span>
                    <IoMdRefresh size="1.2em" />
                </span>
                <span>
                    <FiMoreVertical />
                </span>
                <span/>
                <span className={border8}>1-50 of 3000</span>
                <span>
                    <HiOutlineChevronLeft className={feedIconStroke} />
                </span>
                <span>
                    <HiOutlineChevronRight className={feedIconStroke} />
                </span>
            </div>
        </IconContext.Provider>
    );
};

const mapStateToProps = (state) => {
    return {
        selectAll: state.feedSelectAll
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSelectAll: () => dispatch({ type: TOGGLE_SELECT_ALL }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
