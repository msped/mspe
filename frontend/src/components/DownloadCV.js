import Api from '../Api'
import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function DownloadCV() {
    const [code, setCode] = useState([])
    const [open, setOpen] = useState(false);

    const toggleDialog = () => {
        setOpen(!open);
    };

    const handleDownload = async () => {
        return Api.get('/cv/download/', { responseType: 'blob'})
            .then((res) => {
                const url = window.URL.createObjectURL( new Blob([res.data]))
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', 'CV.pdf')
                document.body.appendChild(link)
                link.click()
                toggleDialog()
            })
    }

    useEffect(() => {
        const search = async () => {
            const { data } = await Api.get(
                "/cv/"
            );
            setCode(data)
        };
        search();
    }, []);

    return (
        <Grid item xs={12}>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography sx={{ textAlign: 'center' }}>
                            If you are contacting me please quote '{code.code}' in your 
                            correspondence.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <Button 
                            variant='contained'
                            onClick={toggleDialog}
                        >
                            Download
                        </Button>
                    </Grid>
                </Grid>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={toggleDialog}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Downloading a copy of my CV"}</DialogTitle>
                    <DialogContent>
                        <Typography component="div">
                            <p>
                                If you download my CV <strong>please read it through before contacting me 
                                regarding a position or for a chat.</strong>
                            </p>
                            <p style={{ textDecoration: 'underline' }}>
                                Just for thought if you're storing my CV
                            </p>
                            <p>
                                Should you wish to retain my CV on file, you are required to inform the
                                data subject (that's me!) how the information is going to be used as
                                well as retained for.
                            </p>
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleDownload}>Download</Button>
                        <Button onClick={toggleDialog}>Close</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Grid>
    )
}
