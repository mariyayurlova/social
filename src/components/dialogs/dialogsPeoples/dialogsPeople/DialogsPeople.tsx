import React from "react";
import styles from "./DialogsPeople.module.css";
import {NavLink} from "react-router-dom";
// @ts-ignore
import {DialogsPeopleType} from "../DialogsPeoples";


const DialogsPeople = (props:DialogsPeopleType) =>{

    return (
        <div className={styles.dialogs__messages_item}>
            <NavLink className={styles.dialogs__messages_name} to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )

}

export default DialogsPeople;