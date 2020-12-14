import React from "react";
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {
    AccountBoxOutlined,
    AnnouncementOutlined,
    MessageOutlined,
    MusicVideoOutlined,
    SettingsApplicationsOutlined
} from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth:'25%',
            backgroundColor: "#A52A2A",
            color: '#ffffff',
            fill: '#ffffff'
        },
    }),
);



const Navbar = () =>{
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button component={NavLink} to="/profile" activeClassName={styles.active}>
                    <ListItemIcon style={{ color: '#ffffff' }}>
                        <AccountBoxOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button component={NavLink} to="/dialogs" activeClassName={styles.active}>
                    <ListItemIcon style={{ color: '#ffffff' }}>
                        <MessageOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Messages" />
                </ListItem>
                <ListItem button >
                    <ListItemIcon style={{ color: '#ffffff' }}>
                        <AnnouncementOutlined />
                    </ListItemIcon>
                    <ListItemText primary="News" />
                </ListItem>
                <ListItem button >
                    <ListItemIcon style={{ color: '#ffffff' }}>
                        <MusicVideoOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Music" />
                </ListItem>
                <ListItem button >
                    <ListItemIcon style={{ color: '#ffffff' }}>
                        <SettingsApplicationsOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
            </List>
            <Divider />
        </div>
    );
}

export default Navbar;