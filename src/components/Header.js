import React from "react";

const Header = (props) => {
	return (
        <header className="Header">
            <div className="Searchbar">
                <input
                type="text"
                placeholder="Search notes..."
                value={props.keyword}
                onChange={(e) => props.keywordChange(e.target.value)}
                />
            </div>
            <div className="toggle">
                <p className="lang">EN</p>
                <p className="logut">Logout</p>
            </div>
        </header>
    )
};

export default Header;
