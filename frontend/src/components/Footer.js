import React from 'react'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';

function Copyright() {
    return (
        <Typography 
            variant="body1" 
            sx={{
                color: 'link',
                flexGrow: 1
            }}
        >
            {'© '}
            <Link sx={{ color: 'link' }} underline='none' href="/">
                Matt Edwards
            </Link>{' '}
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
            sx={{ top: 'auto', bottom: 0 }}
        >
            <Toolbar>
                {Copyright()}
                <Stack direction="row" spacing={2} sx={{ marginX: 2 }}>
                    <Link 
                        href='https://github.com/msped' 
                        target='_blank' 
                        color="link"
                        aria-label='GitHub'
                    >
                        <GitHubIcon />
                    </Link>
                    <Link 
                        href='https://www.linkedin.com/in/mspe/' 
                        target='_blank' 
                        color="link"
                        aria-label='LinkedIn'
                    >
                        <LinkedInIcon />
                    </Link>
                </Stack>
            </Toolbar>
        </AppBar>
        <Toolbar />
        </React.Fragment>
    )
}
