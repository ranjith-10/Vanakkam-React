import { useState } from "react";
import { HEADER_LOGO, LABEL_LOGIN, LABEL_LOGOUT } from "../utils/constants";
const Header = () => {
    const [btnname, setBtnName] = useState(LABEL_LOGIN);
    return (
        <div className="header-container">
            <div className="header-logo">
                <img className="header-img" src={HEADER_LOGO} />
            </div>
            <div className="header-list">
                <ul>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                    <button className="btn-login" onClick={() => (
                        btnname === LABEL_LOGIN ? setBtnName(LABEL_LOGOUT) : setBtnName(LABEL_LOGIN)
                    )}>{btnname}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;