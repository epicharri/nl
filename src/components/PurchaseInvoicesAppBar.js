import React from "react"
import {
  AppBar,
  Toolbar,
  Button,
  Box,
} from "@material-ui/core"
import { Link as RouterLink } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const PurchaseInvoicesAppBar = () => {
    const classes = useStyles()

  return (
      <div className="classes.root">
      <React.Fragment>

        <Box>
          <Button
            color="primary"
            component={RouterLink}
            to="/purhaceinvoices/rejected"
          >
            Hylätyt
          </Button>
          <Button
            color="primary"
            component={RouterLink}
            to="/purhaceinvoices/open"
          >
            Avoimet
          </Button>
          <Button
            color="primary"
            component={RouterLink}
            to="/purhaceinvoices/accepted"
          >
            Hyväksytyt
          </Button>
          <Button
            color="primary"
            component={RouterLink}
            to="/purhaceinvoices/paid"
          >
            Maksetut
          </Button>
        </Box>
      </React.Fragment>
    </div>
  )
}

export default PurchaseInvoicesAppBar
