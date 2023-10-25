import React from "react";
import { Grid, Stack, Typography, Link, Box } from "@mui/material";

const projectData = [
    {
        title: "AutoSkunkWorks",
        tech: "buntu Server, Linux, Nginx, Postgres, Django, Bootstrap, HTML, CSS, JavaScript (jQuery)",
        description: "A Django application for car enthusiasts in the management of their modified car builds.",
        link: "https://github.com/msped/autoskunkworks"
    },
    {
        title: "Check the Match",
        tech: "HTML, CSS, React, Football API, React Router DOM, Material UI",
        description: "A React Application to view football statistics without seeing the final score of a match.",
        link: "https://github.com/msped/checkthematch"
    },
    {
        title: "Project Parts",
        tech: "PostgreSQL, Django, HTML, CSS, jQuery, AJAX, Stripe.js",
        description: "An online competition for car modifications built in Pythons Django Framework.",
        link: "https://github.com/msped/projectparts"
    },
]

const styles = {
    centerText: {
        textAlign: 'center'
    },
    underline: {
        textDecoration: 'underline'
    }
}

export default function DevelopmentProjects() {
    return (
        <Grid container item xs={12} spacing={3} m={2}>
            <Grid item xs={12}>
                <Box sx={{ ...styles.centerText }}>
                    <Typography fontWeight={500} variant="h4" component="div">
                        Software Development Projects
                    </Typography>
                </Box>
            </Grid>

            {projectData.map((project, index) => (
                <Grid key={index} item xs={12} md={4}>
                    <Stack direction="column" gap={2}>
                        <Typography sx={{ ...styles.underline }}>
                            {project.title}
                        </Typography>
                        <Typography>
                            Technologies: {project.tech}
                        </Typography>
                        <ul>
                            <li>
                                {project.description}
                            </li>
                        </ul>
                        <Stack direction="row" gap={2}>
                            <Link
                                href={project.link}
                                target="_blank"
                                underline="hover"
                            >
                                Github
                            </Link>
                        </Stack>
                    </Stack>
                </Grid>
            ))}
        </Grid>
    );
}
