import React from "react";
import styles from "./DialogsPeoples.module.css";
import DialogsPeople from "./dialogsPeople/DialogsPeople";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

export type DialogsPeopleType = {
    id: number
    name:string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '25%',
            backgroundColor: theme.palette.background.default,
            marginTop: '20px'
        },
    }),
);

const DialogsPeoples = () =>{

    const classes = useStyles();

    return (
        <List className={classes.root}>
            <DialogsPeople name="Masha" id={1}/>
            <DialogsPeople name="Sasha" id={2}/>
            <DialogsPeople name="Misha" id={3}/>
        </List>
    )

}

export default DialogsPeoples;