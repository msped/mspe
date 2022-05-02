import React from 'react'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function Copyright() {
    return (
        <Typography 
            variant="body2" 
            sx={{
                color: '#CFD0D1' 
            }}
        >
            {'© '}
            <Link sx={{ color: '#CFD0D1' }} underline='none' href="/">
                Matt Edwards
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Box
            sx={{ 
                position: "fixed", 
                bottom: 0, 
                backgroundColor: '#111417',
                width: '100%',
                height: '60px',
                zIndex: '-40',
                display: 'flex',
                alignItems: 'center',
                paddingX: 2
            }}
        >
            {Copyright()}
        </Box>
    )
}
