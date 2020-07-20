import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  Container,
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Box,
} from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close'
import InvoiceInfoPieceCard from "./InvoiceInfoPieceCard"

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
  const invoice = props.invoice
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
              Ostolasku
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
        <Container>
          <Box
            display="flex"
            flexWrap="wrap"
          >
            <InvoiceInfoPieceCard
              title="Laskun lähettäjä"
              data={invoice.sender}
            />
            <InvoiceInfoPieceCard
              title="Laskun summa"
              data={invoice.total}
            />
            <InvoiceInfoPieceCard
              title="Eräpäivä"
              data={invoice.dueDate}
            />
            <InvoiceInfoPieceCard
              title="Tilinumero"
              data={invoice.ban}
            />
            <InvoiceInfoPieceCard
              title="Viitenumero"
              data={invoice.ref}
            />
            <InvoiceInfoPieceCard
              title="Laskun numero"
              data={invoice.number}
            />
          </Box>
        </Container>
      </Dialog>
    </div>
  )
}
