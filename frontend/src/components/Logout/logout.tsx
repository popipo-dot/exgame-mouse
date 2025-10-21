// import style from './Logout.module.css';

import { useContext } from "react";
import { AuthenticationContext } from "../authentication/AuthenticationProvider";
import { useNavigate } from "react-router";

const Logout = () => {
    const { setUsername, setAuthenticated } = useContext(AuthenticationContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        setUsername("");
        setAuthenticated(false);
        navigate("/login");
    }
    return (
        <a onClick={handleLogout}>
            Logout
        </a >
    );
};

export default Logout;