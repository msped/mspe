import apiClient from "../api/apiClient";
import React, { useState, useEffect } from "react";
import {
    Button,
    Typography,
    Box,
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
} from "@mui/material";
import useGetCode from "../hooks/useGetCode";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const styles = {
    centerText: {
        textAlign: 'center'
    },
    underline: {
        textDecoration: 'underline'
    }
}

export default function DownloadCV() {
    const [open, setOpen] = useState(false);
    const [downloadURL, setDownloadURL] = useState('')
    const code = useGetCode();

    const toggleDialog = () => {
        setOpen(!open);
    };

    useEffect(() => {
        return () => window.URL.revokeObjectURL(downloadURL);
    }, [downloadURL]);

    const handleDownload = async () => {
        const res = await apiClient.get("/cv/download/", { responseType: "blob" });
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        setDownloadURL(url)
        link.href = url;
        link.setAttribute("download", "CV.pdf");
        document.body.appendChild(link);
        link.click();
        toggleDialog()
    };

    return (
        <Grid item xs={12}>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography sx={{ ...styles.centerText }}>
                            If you are contacting me please quote '{code.code}'
                            in your correspondence.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ ...styles.centerText }}>
                        <Button variant="contained" onClick={toggleDialog}>
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
                                If you download my CV{" "}
                                <strong>
                                    please read it through before contacting me
                                    regarding a position or for a chat.
                                </strong>
                            </p>
                            <p style={{ ...styles.underline }}>
                                Just for thought if you're storing my CV
                            </p>
                            <p>
                                Should you wish to retain my CV on file, you are
                                required to inform the data subject (that's me!)
                                how the information is going to be used as well
                                as retained for.
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
    );
}
