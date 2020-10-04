import React from "react";
import styles from "./Dialogs.module.css";
import DialogsPeoples from "./dialogsPeoples/DialogsPeoples";
import DialogsPosts from "./dialogsPosts/DialogsPosts";



const Dialogs = () =>{

    return (
        <div className={styles.dialogs}>
            <span className={styles.dialogs__title}>Dialogs</span>
            <div className={styles.dialogs__inner}>
                <DialogsPeoples/>
                <DialogsPosts/>
            </div>
        </div>
    )

}

export default Dialogs;