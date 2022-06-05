import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetailDialog({ project }) {
  const [open, setOpen] = useState(false)

  let newExtraText = project.description.split('\n').map(
    (item, i) => <p key={i}>{item}</p>)

  const buttonLink = (apiURL) => {
    if (apiURL) {
      const url = new URL(apiURL)
      return (
        <Button 
          component={Link}
          href={apiURL}
          variant="contained"
          sx={{
            marginX: 2,
            color: '#fff'
          }}
          color={url.host === 'github.com' ? 'background' : 'primary'}
        >
          {url.host === 'github.com' ? 'GitHub Repo' : 'Go to Website'}
        </Button>
      )
    }
    return ''
  }

  const toggleDialog = () => {
    setOpen(!open);
  }

  return (
    <React.Fragment>
      <Button onClick={toggleDialog}>View More</Button>
      <Dialog
        open={open}
        fullScreen
        onClose={toggleDialog}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }} color="inherit">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDialog}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md" sx={{ paddingY: 5 }}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography 
                variant="h3" 
                component="h1" 
                fontWeight={500}
                sx={{ textAlign: 'center' }}
              >
                {project.name}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h5" component="h2" fontWeight={500}>
                Description
              </Typography>
              <Typography sx={{ paddingTop: 2 }} component="div">
                { newExtraText }
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ textAlign: 'center' }}>
                {buttonLink(project.url)}
                {buttonLink(project.github_link)}
              </Box>
              
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h5" component="h2" fontWeight={500}>
                Technology Used
              </Typography>
              <Typography variant="subtitle2" fontWeight={400}>
                Click on the technology to find out more!
              </Typography>
              <Stack direction="row" gap={2} py={2}>
                {project.tech.map((tech) => (
                  <Chip
                    key={tech.name}
                    component={Link}
                    underlink="none"
                    href={tech.info}
                    target='_blank'
                    label={tech.name}
                    variant="filled"
                    color="primary"
                    sx={{
                      cursor: 'pointer'
                    }}
                  />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Dialog>
    </React.Fragment>
  );
}
