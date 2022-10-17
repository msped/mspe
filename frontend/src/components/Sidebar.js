import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export default function Sidebar() {
    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <React.Fragment>
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: '#fff' }}
                onClick={handleToggle}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor="left"
                open={open}
                onClose={handleToggle}
                
            >
                <Box>
                    <IconButton onClick={handleToggle} sx={{ margin: 2, float: 'right' }}>
                        <ChevronLeftIcon sx={{ color: '#fff' }}/>
                    </IconButton>
                </Box>
                <List sx={{ padding: 1, minWidth: '250px'}}>
                    <ListItem>
                        <ListItemText sx={{ textAlign: 'center' }}>
                            <Link
                                underline='none'
                                color="link"
                                href='/'
                            >
                                Home
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem sx={{ textAlign: 'center' }}>
                        <ListItemText>
                            <Link
                                underline='none'
                                color="link"
                                href='/dev'
                            >
                                Development
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText sx={{ textAlign: 'center' }}>
                            <Link
                                underline='none'
                                color="link"
                                href='/cv'
                            >
                                CV
                            </Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    )
}
