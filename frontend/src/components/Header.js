import React from "react";
import { AppBar, Box, Toolbar, Typography, Button, Link } from "@mui/material";

import Sidebar from "../components/Sidebar";

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="inherit">
                <Toolbar id="back-to-top-anchor">
                    <Sidebar />
                    <Typography
                        variant="h6"
                        component={Link}
                        sx={{ flexGrow: 1, color: "#fff" }}
                        underline="none"
                        href="/"
                    >
                        Matt Edwards
                    </Typography>
                    <Button color="primary" href="/cv" variant="contained">
                        Resume
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
