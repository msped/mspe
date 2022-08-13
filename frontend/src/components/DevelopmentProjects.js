import React from 'react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'

export default function DevelopmentProjects() {
    return (
        <Grid container item xs={12} spacing={3} sx={{ margin: 2 }}>
            <Grid item xs={12}>
                <Box sx={{ textAlign: "center" }}>
                    <Typography fontWeight={500} variant="h4" component="div">
                        Software Development Projects
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <Stack direction="column" gap={2}>
                    <Typography sx={{ textDecoration: 'underline'}}>
                        AutoSkunkWorks
                    </Typography>
                    <Typography>
                        Technologies: Ubuntu Server, Linux, Nginx, Postgres, Django, Bootstrap, 
                        HTML, CSS, JavaScript (jQuery)
                    </Typography>
                    <ul>
                        <li>
                            A Django and live version of <Link 
                                href="https://github.com/msped/AutoLog" 
                                underline='hover'
                                target="_blank">
                                AutoLog
                            </Link> deployed on a DigitalOcean Ubuntu Server.
                        </li>
                    </ul>
                    <Stack direction="row" gap={2}>
                        <Link 
                            href="https://github.com/msped/autoskunkworks" 
                            target="_blank" 
                            underline='hover'
                        >
                            Github
                        </Link>  
                        <Link 
                            href="https://autoskunkworks.herokuapp.com/" 
                            target="_blank" 
                            underline='hover'
                        >
                            Live Site
                        </Link>
                    </Stack>
                </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
                <Stack direction="column" gap={2}>
                    <Typography sx={{ textDecoration: 'underline'}}>
                        Check the Match
                    </Typography>
                    <Typography>
                        Technologies: HTML, CSS, React, Football API, React Router DOM, Material UI
                    </Typography>
                    <ul>
                        <li>
                            A React Application to view football statistics without seeing the final score 
                            of a match.
                        </li>
                    </ul>
                    <Stack direction="row" gap={2}>
                        <Link 
                            href="https://github.com/msped/checkthematch" 
                            target="_blank" 
                            underline='hover'
                        >
                            Github
                        </Link>  
                        <Link 
                            href="https://checkthematch.herokuapp.com/" 
                            target="_blank" 
                            underline='hover'
                        >
                            Live Site
                        </Link>
                    </Stack>
                </Stack> 
            </Grid>

            <Grid item xs={12} md={4}>
                <Stack direction="column" gap={2}>
                    <Typography sx={{ textDecoration: 'underline'}}>
                        Project Parts
                    </Typography>
                    <Typography>
                        Technologies: PostgreSQL, Django, HTML, CSS, jQuery, AJAX, Stripe.js, Heroku
                    </Typography>
                    <ul>
                        <li>
                            An online competition for car modifications built in Pythons Django Framework.
                        </li>
                    </ul>
                    <Stack direction="row" gap={2}>
                        <Link 
                            href="https://github.com/msped/projectparts" 
                            target="_blank" 
                            underline='hover'
                        >
                            Github
                        </Link>  
                        <Link 
                            href="https://projectparts.herokuapp.com/" 
                            target="_blank" 
                            underline='hover'
                        >
                            Live Site
                        </Link>
                    </Stack>
                </Stack>   
            </Grid>
        </Grid>
    )
}
