import React from "react";
import { Grid, Typography, Box, Stack } from "@mui/material";

export default function EducationalBackground() {
    return (
        <Grid item xs={12}>
            <Box sx={{ textAlign: "center" }}>
                <Typography fontWeight={500} variant="h4" component="div">
                    Educational Background
                </Typography>
                <Stack direction="column" py={2} spacing={2}>
                    <Box>
                        <Typography variant="h6" component="p">
                            <strong>
                                Diploma in Full Stack Software Development -
                                2020
                            </strong>
                        </Typography>
                        <Typography variant="body1">
                            Code Insitute, Napier University, Edinburgh,
                            Scotland
                        </Typography>
                        <Typography pt={1}>
                            Code Institutes Software Development course consists
                            of 4 milestone projects after different learning
                            modules. After learning a new language or frameworks
                            your skills are put to the test in a milestone
                            projects were I earned First Class Honours,
                            equivalent to Level 5 on the European Qualifications
                            Framework.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="p">
                            <strong>
                                Sir John Deanes College, Northwich - 2013-2015
                            </strong>
                        </Typography>
                        <Typography variant="body1">A-levels</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="p">
                            <strong>Weaverham High School - 2008-2013</strong>
                        </Typography>
                        <Typography variant="body1">GCSEs</Typography>
                    </Box>
                </Stack>
            </Box>
        </Grid>
    );
}
