import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";

import QualificationsProfile from "../components/QualificationsProfile";
import EducationalBackground from "../components/EducationalBackground";
import DevelopmentProjects from "../components/DevelopmentProjects";
import ProfessionalExperience from "../components/ProfessionalExperience";
import DownloadCV from "../components/DownloadCV";

export default function CV() {
    return (
        <Container maxWidth="lg">
            <Helmet>
                <meta charSet="utf-8" />
                <title>CV | Matt Edwards</title>
                <meta
                    name="description"
                    content="Here is an online verison of my CV, outlining my 
                previous experience, work and skills. You can download a copy of this at the bottom of 
                the page."
                />
            </Helmet>
            <Grid container spacing={4} sx={{ marginY: 3 }}>
                <Grid item xs={12}>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography
                            fontWeight={500}
                            variant="h2"
                            component="h1"
                        >
                            CV
                        </Typography>
                        <Typography fontWeight={400} variant="body2">
                            I'm a developer with experience in HTML, CSS, JS &
                            Django Framework obtained through the Code Institute
                            Full Stack Developer Course. Since the end of this
                            course, I have also been learning React and will
                            soon be looking at implementing Docker into my
                            projects. Currently, in a customer-facing data
                            management role I'm keen to utilise my skills to
                            provide great user experience and learn new
                            technologies in the process.
                        </Typography>
                    </Box>
                </Grid>
                <QualificationsProfile />
                <EducationalBackground />
                <DevelopmentProjects />
                <ProfessionalExperience />
                <DownloadCV />
            </Grid>
        </Container>
    );
}
