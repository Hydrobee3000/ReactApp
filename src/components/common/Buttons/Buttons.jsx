import { withStyles, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

export const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#2b7a78'),
    backgroundColor: '#2b7a78',
    '&:hover': {
      backgroundColor: '#2b7a78',
    },
  },
}))(Button)

export default function CustomizedButtons() {
  const classes = useStyles()

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }))

  return (
    <div>
      <ColorButton variant='contained' color='primary' className={classes.margin}>
        Custom CSS
      </ColorButton>
    </div>
  )
}
