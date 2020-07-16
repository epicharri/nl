import React, { useState } from "react"
import {
  makeStyles,
  useTheme,
} from "@material-ui/core/styles"
import { MenuItem } from "@material-ui/core"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Hidden from "@material-ui/core/Hidden"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import HomeIcon from "@material-ui/icons/Home"
import { MailIcon as SalesInvoiceIcon } from "@material-ui/icons/Mail" // myyntilaskut (suljettu kirjekuori)
import { DraftsIcon as PurchaseInvoiceIcon } from "@material-ui/icons/Drafts" // ostolaskut (avattu kirjekuori)
import {
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom"
import Home from "./Home"
import SalesInvoices from "./SalesInvoices"
import PurchaseInvoices from "./PurchaseInvoices"
import {
  IconButton,
} from "@material-ui/core"

const drawerWidth = 240

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    drawerContainer: {
      overflow: "auto",
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    closeMenuButton: {
      marginRight: "auto",
      marginLeft: 0,
    },
    logo: {
      padding: 5,
      maxHeight: 40,
    },
    menuItemLink: {
      textDecoration: 'none',
    },
  })
)

export default function TheDrawer() {
  const classes = useStyles()
  const theme = useTheme()
  const [
    isMobile,
    setIsMobile,
  ] = useState(false)
  const toggleIsMobile = () => {
    setIsMobile(!isMobile)
  }
  const setIsMobileFalse = () => {
    setIsMobile(false)
  }
  const navigation = [
    {
      id: 1,
      text: "Koti",
      link: "/",
      icon: HomeIcon,
    },
    {
      id: 2,
      text: "Myyntilaskut",
      link: "/salesinvoices",
      icon: SalesInvoiceIcon,
    },
    {
      id: 3,
      text: "Ostolaskut",
      link: "/purchaseinvoices",
      icon: PurchaseInvoiceIcon,
    },
  ]

  const appBarLogo = (
    <div>
      <img
        src="../nettilasku_logo_valkoinen.svg"
        alt="Nettilasku"
        className={classes.logo}
      />
    </div>
  )

  const drawer = (
    <div
      className={
        classes.drawerContainer
      }
    >
      <List>
        {navigation.map((item) => (

            <MenuItem
              key={item.text}
              onClick={setIsMobileFalse}
              component={RouterLink}
              to={item.link}
            >
              {item.text}
            </MenuItem>
        ))}
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Avaa valikko"
            edge="start"
            onClick={toggleIsMobile}
            className={
              classes.menuButton
            }
          >
            <MenuIcon />
          </IconButton>
          {appBarLogo}
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden
          smUp
          implementation="css"
        >
          <Drawer
            className={classes.drawer}
            variant="temporary"
            open={isMobile}
            onClose={toggleIsMobile}
            classes={{
              paper:
                classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <IconButton
              onClick={toggleIsMobile}
              className={
                classes.closeMenuButton
              }
            >
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>

        <Hidden
          xsDown
          implementation="css"
        >
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper:
                classes.drawerPaper,
            }}
          >
            <div
              className={
                classes.toolbar
              }
            />
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

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
          Tässä voisi olla jotain
          tekstiä.
        </Typography>
      </main>
    </div>
  )
}
