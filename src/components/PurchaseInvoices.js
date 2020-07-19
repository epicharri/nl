import React from "react"
import { useState } from "react"
import {
  Card,
  Typography,
  CardContent,
  Box,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import PurchaseInvoiceDialog from "./PurchaseInvoiceDialog"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 5,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const PurchaseInvoice = (props) => {
  const invoice = props.item
  const changePhaseOfInvoice =
    props.changePhaseOfInvoice
  const classes = useStyles()
  const [
    openDialog,
    setOpenDialog,
  ] = useState(false)
  const [
    invoiceClicked,
    setInvoiceClicked,
  ] = useState(null)
  const openInvoiceToDialog = (
    props
  ) => {
    const key = props
    setInvoiceClicked(key)
    setOpenDialog(true)
  }

  return openDialog ? (
    <PurchaseInvoiceDialog
      open={openDialog}
      setOpen={setOpenDialog}
      invoiceClicked={invoiceClicked}
      setInvoiceClicked={invoiceClicked}
      changePhaseOfInvoice={
        changePhaseOfInvoice
      }
    />
  ) : (
    <>
      <Card
        className={classes.root}
        key={invoice.id}
        onClick={() =>
          openInvoiceToDialog(
            invoice.id
          )
        }
      >
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {invoice.sender}
          </Typography>
          <Box display="flex">
            <Typography
              className={classes.root}
              color="textPrimary"
            >
              {invoice.total}
            </Typography>
            <Typography>
              {invoice.dueDate}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  )
}

const PurchaseInvoices = (props) => {
  const listOfPurchaceInvoices = [
    {
      id: "1",
      sender: "Telia Oyj",
      dueDate: "27.7.2020",
      total: "2000.00",
      phase: "open",
      ban: "fi991122334455",
    },
    {
      id: "2",
      sender: "Helen Oyj",
      dueDate: "29.7.2020",
      total: "10722.19",
      phase: "open",
      ban: "fi995522334455",
    },
    {
      id: "3",
      sender: "Lähi-Tapiola",
      dueDate: "27.7.2020",
      total: "117.16",
      phase: "open",
      ban: "fi994422334455",
    },
    {
      id: "4",
      sender: "Google Inc",
      dueDate: "25.8.2020",
      total: "1431.11",
      phase: "open",
      ban: "fi993322334455",
    },
  ]

  const [
    purchaseInvoices,
    setPurchaseInvoices,
  ] = useState(listOfPurchaceInvoices)

  //phases are: rejected, open, accepted and paid.
  function changePhaseOfInvoice(
    invoiceId,
    phase
  ) {
    const invoice = purchaseInvoices.find(
      (item) => item.id === invoiceId
    )
    console.log(invoice)
    invoice.phase = phase
    const newInvoiceList = []
    let item
    for (item of purchaseInvoices) {
      if (item.id !== invoiceId) {
        newInvoiceList.push(item)
      }
    }
    newInvoiceList.push(invoice)
    setPurchaseInvoices(newInvoiceList)
  }

  function purchaseInvoiceCards(props) {
    const phase = props

    const purchaseInvoiceList = purchaseInvoices
    return purchaseInvoiceList
      .filter(
        (item) => item.phase === phase
      )
      .map((item) => (
        <PurchaseInvoice
          item={item}
          changePhaseOfInvoice={
            changePhaseOfInvoice
          }
        ></PurchaseInvoice>
      ))
  }

  return (
    <div>
      <h2>Ostolaskut</h2>
      <p>
        Tämä sitten listaa ostolaskuja.
      </p>

      {purchaseInvoiceCards("open")}
    </div>
  )
}

export default PurchaseInvoices
