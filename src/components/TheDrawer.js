import React, { useState } from "react"
import {
  makeStyles,
  useTheme,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles"
import {
  MenuItem,
  Drawer,
  AppBar,
  CssBaseline,
  Hidden,
  Toolbar,
  List,
  Typography,
  Divider,
  Button,
  ButtonGroup,
} from "@material-ui/core"

import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import {
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom"
import Home from "./Home"
import SalesInvoices from "./SalesInvoices"
import PurchaseInvoices from "./PurchaseInvoices"
import { IconButton } from "@material-ui/core"
import {
  indigo,
  pink,
} from "@material-ui/core/colors"

const pinkTheme = createMuiTheme({
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: indigo[500],
    },
  },
})

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
      [theme.breakpoints.up("md")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
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
      textDecoration: "none",
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
    },
    {
      id: 2,
      text: "Myyntilaskut",
      link: "/salesinvoices",
    },
    {
      id: 3,
      text: "Ostolaskut",
      link: "/purchaseinvoices",
    },
  ]

  const [
    readTheme,
    setTheme,
  ] = useState(null)

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
              key={item.id}
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
    <ThemeProvider theme={readTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classes.appBar}
          color="primary"
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
            mdUp
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
            smDown
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

        <main
          className={classes.content}
        >
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
    </ThemeProvider>
  )
}
