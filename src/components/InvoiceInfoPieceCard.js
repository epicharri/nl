import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 1,
},
  title: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 6,
  },
})

export default function InvoiceInfoPieceCard(
  props
) {
  const title = props.title
  const data = props.data
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
        >
          {data}
        </Typography>
      </CardContent>
    </Card>
  )
}
