import React from "react";
import styles from "./Dialogs.module.css";
import DialogsPeoples from "./dialogsPeoples/DialogsPeoples";
import DialogsPosts from "./dialogsPosts/DialogsPosts";
import {Typography} from "@material-ui/core";



const Dialogs = () =>{

    return (
        <div className={styles.dialogs}>
            <Typography variant="h4" component="h2">
                Dialogs
            </Typography>
            <div className={styles.dialogs__inner}>
                <DialogsPeoples/>
                <DialogsPosts/>
            </div>
        </div>
    )

}

export default Dialogs;