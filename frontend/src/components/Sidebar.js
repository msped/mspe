import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
    Box,
    Link,
    IconButton,
    ListItemText,
    ListItemButton,
    Drawer,
    List,
    Grid,
} from "@mui/material";

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <React.Fragment>
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: "#fff" }}
                onClick={handleToggle}
            >
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={open} onClose={handleToggle}>
                <Box sx={{ width: 250, padding: 1 }} role="presentation">
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <IconButton onClick={handleToggle} sx={{ float: 'right', cursor: 'pointer' }}>
                                <ChevronLeftIcon sx={{ color: "#fff" }} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={12}>
                            <List>
                                <ListItemButton component={Link} href="/">
                                    <ListItemText primary="Home" sx={{ textAlign: "center" }} />
                                </ListItemButton>
                                <ListItemButton component={Link} href="/dev">
                                    <ListItemText primary="Development" sx={{ textAlign: "center" }} />
                                </ListItemButton>
                                <ListItemButton component={Link} href="/cv">
                                    <ListItemText primary="CV" sx={{ textAlign: "center" }} />
                                </ListItemButton>
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            </Drawer>
        </React.Fragment>
    );
}
