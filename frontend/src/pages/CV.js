import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Helmet } from 'react-helmet-async'

import QualificationsProfile from '../components/QualificationsProfile'
import EducationalBackground from '../components/EducationalBackground'
import DevelopmentProjects from '../components/DevelopmentProjects'
import ProfessionalExperience from '../components/ProfessionalExperience'
import DownloadCV from '../components/DownloadCV'

export default function CV() {
    return (
        <Container maxWidth="lg">
            <Helmet>
                <meta charSet='utf-8' />
                <title>CV | Matt Edwards</title>
                <meta name="description" content="Here is an online verison of my CV, outlining my 
                previous experience, work and skills. You can download a copy of this at the bottom of 
                the page."/>
            </Helmet>
            <Grid container spacing={4} sx={{ marginY: 3 }}>
                <Grid item xs={12}>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography fontWeight={500} variant="h2" component="h1">
                        CV
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
