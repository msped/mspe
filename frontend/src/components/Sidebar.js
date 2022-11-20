import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
    Box,
    Link,
    IconButton,
    ListItemText,
    ListItem,
    List,
    Drawer,
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
                <Box>
                    <IconButton
                        onClick={handleToggle}
                        m={2}
                        sx={{ float: "right" }}
                    >
                        <ChevronLeftIcon sx={{ color: "#fff" }} />
                    </IconButton>
                </Box>
                <List p={1} sx={{ minWidth: "250px" }}>
                    <ListItem>
                        <ListItemText sx={{ textAlign: "center" }}>
                            <Link underline="none" color="link" href="/">
                                Home
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem sx={{ textAlign: "center" }}>
                        <ListItemText>
                            <Link underline="none" color="link" href="/dev">
                                Development
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText sx={{ textAlign: "center" }}>
                            <Link underline="none" color="link" href="/cv">
                                CV
                            </Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    );
}
