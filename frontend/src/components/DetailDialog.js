import React, { useState } from "react";
import {
    Button,
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Slide,
    Container,
    Grid,
    Link,
    Box,
    Chip,
    Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetailDialog({ project }) {
    const [open, setOpen] = useState(false);

    const buttonLink = (apiURL) => {
        if (apiURL) {
            const url = new URL(apiURL);
            return (
                <Button
                    component={Link}
                    href={apiURL}
                    variant="contained"
                    mx={2}
                    sx={{
                        color: "#fff",
                    }}
                    color={url.host === "github.com" ? "background" : "primary"}
                >
                    {url.host === "github.com"
                        ? "GitHub Repo"
                        : "Go to Website"}
                </Button>
            );
        }
        return null;
    };

    const toggleDialog = () => {
        setOpen(!open);
    };

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
                <Container maxWidth="md" py={5}>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h3"
                                component="h1"
                                fontWeight={500}
                                mt={2}
                                align="center"
                            >
                                {project.name}
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography
                                variant="h5"
                                component="h2"
                                fontWeight={500}
                            >
                                Description
                            </Typography>
                            <Typography
                                gutterBottom
                                component="div"
                                sx={{ whiteSpace: "pre-wrap" }}
                            >
                                {project.description}
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Box textAlign="center">
                                {buttonLink(project.url)}
                                {buttonLink(project.github_link)}
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography
                                variant="h5"
                                component="h2"
                                fontWeight={500}
                            >
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
                                        target="_blank"
                                        label={tech.name}
                                        variant="filled"
                                        color="primary"
                                        sx={{
                                            cursor: "pointer",
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
