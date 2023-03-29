import React, { useState } from 'react'
import { Modal, Typography, Box, Button } from '@mui/material';
function Model() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

  }
  return (
    <div>
      <Button onClick={() => setOpen(true)}
        variant="contained"
      >Open Model</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">title</Typography>
          <Typography id="modal-description">Descripion</Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Model
