import Api from '../Api'
import React, { useState } from 'react'
import {
  Box,
  Stack,
  OutlinedInput,
  Button,
  FormControl,
  InputLabel,
  Snackbar,
  Alert
} from '@mui/material'

export default function ContactForm() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [alert, setAlert] = useState('success')

  const handleSnackbar = () => {
    setOpen(!open)
  }

  const snackBar = () => {
    return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackbar}>
        <Alert severity={alert} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    )
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    
    Api.post(
      '/contact/send/',
      data
    ).then((res) => {
      event.target.reset()
      setMessage('Message sent!')
      setAlert('success')
      handleSnackbar()
    }, (error) => {
      setMessage("There was an error in sending your message.")
      setAlert('error')
      handleSnackbar()
    })
  }

  
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 2, px: 2 }}
    >
      <Stack direction="column" gap={2}>
        <FormControl>
          <InputLabel htmlFor="name" sx={{ color: "#CCC" }}>
            Name
          </InputLabel>
          <OutlinedInput
            name="name"
            fullWidth
            id="name"
            label="Name"
            required
            sx={{
              input: {
                background: "rgb(48, 51, 55)",
                borderRadius: "4px",
              },
            }}
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="email" sx={{ color: "#CCC" }}>
            Email
          </InputLabel>
          <OutlinedInput
            name="email"
            fullWidth
            label="Email"
            required
            id="email"
            sx={{
              input: {
                background: "rgb(48, 51, 55)",
                borderRadius: "4px",
              },
            }}
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="subject" sx={{ color: "#CCC" }}>
            Subject
          </InputLabel>
          <OutlinedInput
            name="subject"
            fullWidth
            label="Subject"
            required
            id="subject"
            sx={{
              input: {
                background: "rgb(48, 51, 55)",
                borderRadius: "4px",
              },
            }}
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="message" sx={{ color: "#CCC" }}>
            Message
          </InputLabel>
          <OutlinedInput
            name="message"
            fullWidth
            label="Message"
            required
            multiline
            rows={6}
            id="message"
            sx={{
              background: "rgb(48, 51, 55)",
              borderRadius: "4px",
            }}
          />
        </FormControl>

        <Stack alignItems="center">
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </Stack>
      </Stack>
      {snackBar()}
    </Box>
  );

}
