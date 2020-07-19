import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import ListItemText from "@material-ui/core/ListItemText"
import ListItem from "@material-ui/core/ListItem"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import CloseIcon from "@material-ui/icons/Close"
import Slide from "@material-ui/core/Slide"

const useStyles = makeStyles(
  (theme) => ({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  })
)

const Transition = React.forwardRef(
  function Transition(props, ref) {
    return (
      <Slide
        direction="up"
        ref={ref}
        {...props}
      />
    )
  }
)

export default function PurchaseInvoiceDialog(
  props
) {
  const classes = useStyles()
  const open = props.open
  const setOpen = props.setOpen
  const changePhaseOfInvoice =
    props.changePhaseOfInvoice
  const invoiceClicked =
    props.invoiceClicked
  const setInvoiceClicked =
    props.setInvoiceClicked
  const invoice=props.invoice
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleAccepted = () => {
    setOpen(false)
    changePhaseOfInvoice(
      invoiceClicked,
      "accepted"
    )
  }

  const handleRejected = () => {
    setOpen(false)

    changePhaseOfInvoice(
      invoiceClicked,
      "rejected"
    )
  }

  return (
    <div>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          className={classes.appBar}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              variant="h6"
              className={classes.title}
            >
              Ostolasku id:llä{" "}
              {invoiceClicked}
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={handleAccepted}
            >
              Hyväksy
            </Button>
            <Button
              autoFocus
              color="inherit"
              onClick={handleRejected}
            >
              Hylkää
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText
              primary={invoice.sender}
              secondary="Laskun lähettäjä"
            />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary={invoice.total}
              secondary="Laskun summa"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary={invoice.dueDate}
              secondary="Eräpäivä"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary={invoice.ban}
              secondary="Tilinumero"
            />
          </ListItem>          
        </List>
      </Dialog>
    </div>
  )
}
