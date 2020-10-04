import React from "react";
import styles from "./DialogsPeoples.module.css";
import DialogsPeople from "./dialogsPeople/DialogsPeople";

export type DialogsPeopleType = {
    id: number
    name:string
}

const DialogsPeoples = () =>{

    return (
        <div className={styles.dialogs__messages}>
            <DialogsPeople name="Masha" id={1}/>
            <DialogsPeople name="Sasha" id={2}/>
            <DialogsPeople name="Misha" id={3}/>
        </div>
    )

}

export default DialogsPeoples;