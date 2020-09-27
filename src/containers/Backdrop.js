import * as React from "react";

const style = {
    height: "100%",
    width: "100%",
    position: "fixed",
    top: "10%",
    left: "0",
    zIndex: 100,
    backgroundColor: "rgba(0,0,0,0.2)"
}

const Backdrop = (props) => (props.show ? <div style={style}></div> : null);

export default Backdrop;
