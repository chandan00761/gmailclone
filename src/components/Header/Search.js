import * as React from "react";

// ICON IMPORTS
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

// STYLES IMPORT
import styles from "../../styles/Header/Search.module.css";

class Search extends React.Component {
    constructor(props) {
        super();
        this.searchInputRef = React.createRef();
        this.searchDropRef = React.createRef();
    }

    state = {
        active: false,
        dropdown: false
    };

    toggleSearch = (e) => {
        if (e.target === this.searchInputRef.current || e.target === this.searchDropRef.current) {
            document.body.addEventListener("click", (event) =>
                this.toggleSearch(event)
            );
            this.setState({
                active: true,
            });
        } else {
            document.body.removeEventListener("click", this.toggleSearch);
            this.setState({
                active: false,
            });
        }
    };

    toggleDropdown = () => {
        this.setState({
            dropdown: !this.state.dropdown
        });
    }

    render() {
        return (
            <span
                className={[
                    styles.search,
                    this.state.active ? styles.searchActive : null,
                ].join(" ")}
            >
                <AiOutlineSearch />
                <input
                    className={[
                        styles.searchInput,
                        this.state.active ? styles.searchActive : null,
                    ].join(" ")}
                    type="text"
                    placeholder="Search mail"
                    ref={this.searchInputRef}
                    onClick={this.toggleSearch}
                />
                <IoMdArrowDropdown onClick={this.toggleDropdown}/>
            </span>
        );
    }
}

export default Search;
