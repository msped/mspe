import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

export default function EducationalBackground() {
    return (
        <Grid item xs={12}>
            <Box sx={{ textAlign: "center" }}>
                <Typography fontWeight={500} variant="h4" component="div">
                    Educational Background
                </Typography>
                <Stack direction="column" py={2}>
                    <Typography variant='h6' component='p'>
                        <strong>
                            Diploma in Full Stack Software Development - 2020
                        </strong>
                    </Typography>
                    <Typography variant='body1'>
                        Code Insitute, Napier University, Edinburgh, Scotland
                    </Typography>
                    <Typography pt={1}>
                        Code Institutes Software Development course consists of 4 milestone projects 
                        after different learning modules. After learning a new language or frameworks 
                        your skills are put to the test in a milestone projects were I earned First Class
                        Honours, equivalent to Level 5 on the European Qualifications Framework.
                    </Typography>
                </Stack>
            </Box>
        </Grid>
    )
}
