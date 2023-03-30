import React from "react";
import { Container, Grid, Box, Alert, Typography } from "@mui/material";
import useGetAlerts from "../hooks/useGetAlerts";

export default function Alerts() {
    const alerts = useGetAlerts();

    return alerts.length > 0 ? (
        <Container maxWidth="lg">
            <Grid container spacing={1} mt={2}>
                <Grid item xs={12}>
                    {alerts.map((alert) => (
                        <Box p={1} key={alert.id}>
                            <Alert
                                severity={alert.severity_display}
                                icon={false}
                            >
                                <Typography fontWeight={450}>
                                    {alert.message}
                                </Typography>
                            </Alert>
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </Container>
    ) : (
        ""
    );
}
