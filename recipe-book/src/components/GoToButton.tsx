import {type ComponentPropsWithoutRef} from "react";
import { NavLink } from "react-router";
import styles from "./GoToButton.module.css";

interface GoToButtonProps extends ComponentPropsWithoutRef<"button"> {
    to: string
}


export default function GoToButton({to, children, ...rest}: GoToButtonProps) {
    return <NavLink to={to}><button className={styles.button} {...rest}>{children}</button></NavLink>
}