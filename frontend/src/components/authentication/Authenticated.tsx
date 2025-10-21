import { Outlet } from "react-router";
import { AuthenticationContext } from "./AuthenticationProvider";
import { useContext } from "react";
import { Link } from "react-router";

export const Authenticated = () => {
    const { authenticated } = useContext(AuthenticationContext);
    if (!authenticated) {
        return <div>
            You must be logged in to view this page. <br />
            <Link to="/login">Login</Link>
        </div>;
    }
    return (<Outlet />);
}