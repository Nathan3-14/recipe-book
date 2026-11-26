import { Outlet } from "react-router";
import "./NavBar.css"
import GoToButton from "./GoToButton";

export default function NavBar() {
    return <div className="nav-bar">
        <GoToButton to={"/recipes"}>Recipes</GoToButton>
        <Outlet />
    </div>
}