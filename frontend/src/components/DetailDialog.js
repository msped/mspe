import React, { useState } from "react";
import {
  Button,
  Typography,
  Dialog,
} from '@mui/material'

export default function DetailDialog({ project }) {
  const [open, setOpen] = useState(false)

  const toggleDialog = () => {
    setOpen(!open);
  }

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={toggleDialog}>
        View More
      </Button>
    </React.Fragment>
  );
}
