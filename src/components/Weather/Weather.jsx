import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Paper } from '@material-ui/core'

export const Weather = (props) => {
  return (
    <Paper style={{ width: '100%', height: '90vh' }}>
      <Typography style={{ paddingLeft: '1em', paddingTop: '1em' }} variant='h3' gutterBottom component='div'>
        <Link href='https://hydrobee3000.github.io/weather/'>Weather</Link>
      </Typography>
    </Paper>
  )
}
