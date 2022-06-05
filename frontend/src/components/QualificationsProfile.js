import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

export default function QualificationsProfile() {
    return (
        <Grid item xs={12}>
            <Stack direction="column" gap={2}>
                <Box sx={{ textAlign: "center" }}>
                    <Typography fontWeight={500} variant="h4" component="div">
                        Professional Experience
                    </Typography>
                </Box>
                <Typography>
                    Technical-minded professional with 1 year experience in programming languages, 
                    Flask/Django frameworks, MongoDB, and PostgreSQL; well-prepared to excel in a 
                    challenging role such as a Python Developer.
                </Typography>
                <ul>
                    <li>
                        <Typography m={1}>
                            <strong>Software Development: </strong>
                            Demonstrated ability to design and develop software and technical solutions in 
                            line with client specifications. Recently completed diploma in Full Stack 
                            Software Development from Code Institute, Napier University. Excel at storing 
                            highly sensitive technical data.
                        </Typography>
                    </li>
                    <li>
                        <Typography m={1}>
                            <strong>Web/Application Development: </strong>
                            Able to write modular, reusable, version-controlled code to build responsive 
                            websites, as well as ability to develop custom web applications for internal and 
                            customer-facing audiences with a variety of functionalities and features.
                        </Typography>
                    </li>
                    <li>
                        <Typography m={1}>
                            <strong>Project Management: </strong>
                            Repeated success in managing multiple projects, consistently remaining on or ahead 
                            of schedule through effective prioritisation and planning.
                        </Typography>
                    </li>
                    <li>
                        <Typography m={1}>
                            <strong>Key Skills: </strong>
                            A fast learner, dedicated to continually learning emerging technologies, 
                            programming languages, techniques, and other best practices. Committed to work 
                            collaboratively with cross-functional teams to achieve collective goal and shared 
                            vision.
                        </Typography>                         
                    </li>
                </ul>
                <Stack direction="column" gap={2}>
                    <Typography sx={{ textDecoration: 'underline' }}>Technologies:</Typography>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Environments:</td>
                                    <td>UNIX, Windows 7/8/8.1/10</td>
                                </tr>
                                <tr>
                                    <td>Applications:</td>
                                    <td>MS Office (Word, Excel, Outlook, Powerpoint), Git</td>
                                </tr>
                                <tr>
                                    <td>Core Technology:</td>
                                    <td>HTML5, CSS3, Django, Flask, JavaScript, AXAJ, Bootstrap, jQuery, MongoDB, SQL, PostgreSQL, Chrome Developer Tools</td>
                                </tr>
                            </tbody>
                        </table>
                </Stack>
            </Stack>
        </Grid>
    )
}
