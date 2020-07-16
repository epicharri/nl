import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import {MailIcon as SalesInvoiceIcon} from '@material-ui/icons/Mail'; // myyntilaskut (suljettu kirjekuori)
import {DraftsIcon as PurchaseInvoiceIcon} from '@material-ui/icons/Drafts' // ostolaskut (avattu kirjekuori)

import {
    Switch, Route, Link as RouterLink
  } from "react-router-dom"
  import Home from './Home'
  import SalesInvoices from './SalesInvoices'
  import PurchaseInvoices from './PurchaseInvoices'
import { TextareaAutosize } from '@material-ui/core';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logo: {
      padding: 5,
      maxHeight: 40
  }

}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const navigation = [
        {
            "id": 1,
            "text": 'Koti',
            "link": '/',
            "icon": HomeIcon
        },
        {
            "id": 2,
            "text": "Myyntilaskut",
            "link": '/salesinvoices',
            "icon": SalesInvoiceIcon
        },
        {
            "id": 3,
            "text": "Ostolaskut",
            "link": '/purchaseinvoices',
            "icon": PurchaseInvoiceIcon
        }
  ]
 

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <div>
                <img src="../nettilasku_logo_valkoinen.svg" alt="Nettilasku" className={classes.logo}/>
            </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
            <div className={classes.drawerContainer}>
                <List>
                    {navigation.map((item) => (
                        <Link component={RouterLink} to={item.link}>
                            <ListItem button key={item.text}>

                                <ListItemText primary={item.text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </div>




      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Switch>
            <Route path="/salesinvoices">
                    <SalesInvoices />
            </Route>
            <Route path="/purchaseinvoices">
                <PurchaseInvoices />
            </Route>
            <Route path="/">
                <Home />
            </Route>        
            </Switch>

        <Typography paragraph>
          Tässä voisi olla jotain tekstiä.
        </Typography>

      </main>
    </div>
  );
}
