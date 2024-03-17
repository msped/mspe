import React from "react";
import { Link, Typography, AppBar, Toolbar, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Copyright() {
    return (
        <Typography
            variant="body1"
            sx={{
                color: "#C5C6C7",
                flexGrow: 1,
            }}
        >
            {"© "}
            <Link sx={{ color: "#C5C6C7" }} underline="none" href="/">
                Matt Edwards
            </Link>{" "}
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    return (
        <React.Fragment>
            <AppBar
                position="fixed"
                color="inherit"
                sx={{ top: "auto", bottom: 0 }}
            >
                <Toolbar>
                    {Copyright()}
                    <Stack direction="row" spacing={2} mx={2}>
                        <Typography
                            variant="body1"
                            sx={{ whiteSpace: "normal" }}
                        >
                            Get in touch on LinkedIn
                        </Typography>
                        <Link
                            href="https://www.linkedin.com/in/mspe/"
                            target="_blank"
                            color="#C5C6C7"
                            aria-label="LinkedIn"
                        >
                            <LinkedInIcon />
                        </Link>
                        <Link
                            href="https://github.com/msped"
                            target="_blank"
                            color="#C5C6C7"
                            aria-label="GitHub"
                        >
                            <GitHubIcon />
                        </Link>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </React.Fragment>
    );
}
