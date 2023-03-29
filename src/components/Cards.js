import React,{useState} from 'react';
import { Typography,Button,CardMedia} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import I from '../images/cards/flwr.jpg';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
function Cards() {
    const[open,setOpen]=useState(false);
    const handleClose=()=>{
        setOpen(false)
    }
    const handleClickOpen=()=>{
        setOpen(true)

    }
  return (
    <div>
      <Card sx={{maxWidth:'350px',margin:'25px'}}>
      <CardMedia
        component="img"
        height="300"
        image={I}
        alt="flower"
      />
<CardContent>
<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
Word of the Day
</Typography>
</CardContent>
<CardActions>
<Button size="small" variant="contained">Learn More</Button>
<Button size="small" variant="contained" onClick={handleClickOpen}>Delete</Button>
</CardActions>
      </Card>
      <Dialog open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">Confirm</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Cards
