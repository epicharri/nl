import React from "react"
import {
  Card,
  Typography,
  CardContent,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

const PurchaseInvoice = ({ props }) => {
  const invoice = props
  const classes = useStyles()
  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {invoice.sender}
          </Typography>
        </CardContent>
      </Card>

      <div>
        <p>Tämä on ostolasku.</p>
        <p>{invoice.sender}</p>
        <p>{invoice.dueDate}</p>
        <p>{invoice.total}</p>
        <p>{invoice.VAT}</p>
      </div>
    </>
  )
}

const PurchaseInvoices = () => {
  const listOfPurchaceInvoices = [
    {
      sender: "Telia Oyj",
      dueDate: "27.7.2020",
      total: "2000.00",
      VAT: "480.00",
    },
  ]
  return (
    <div>
      <h2>Ostolaskut</h2>
      <p>
        Tämä sitten listaa ostolaskuja.
      </p>
      <PurchaseInvoice
        props={
          listOfPurchaceInvoices[0]
        }
      ></PurchaseInvoice>
    </div>
  )
}

export default PurchaseInvoices
