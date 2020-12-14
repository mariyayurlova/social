import React from "react";
import styles from "./DialogsPeople.module.css";
import {NavLink} from "react-router-dom";
// @ts-ignore
import {DialogsPeopleType} from "../DialogsPeoples";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiListItem-root': {
                borderBottom: '1px solid grey'
            },
            '& .MuiTypography-root': {
                textDecoration: 'none',
                color: '#000000'
            },
        },
    }),
);

const DialogsPeople = (props:DialogsPeopleType) =>{
    const classes = useStyles();
    return (
        <ListItem className={classes.root} component={NavLink} to={"/dialogs/" + props.id}>
            <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.name} secondary="Jan 9, 2014" />
        </ListItem>
    )

}

export default DialogsPeople;