import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import DetailDialog from "../components/DetailDialog";
import LazyLoad from "react-lazyload";
import default_img from "../images/default.jpg";

export default function ProjectCard({ project }) {
    return (
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={4} sm={12} md={4}>
                        <LazyLoad>
                            <Box sx={{ textAlign: "center" }}>
                                <img
                                    src={
                                        project.logo == null
                                            ? default_img
                                            : project.logo
                                    }
                                    alt="Development Logo"
                                    style={{
                                        height: "auto",
                                        maxWidth: "100%",
                                        borderRadius: 2.5,
                                        maxHeight: "100px",
                                    }}
                                />
                            </Box>
                        </LazyLoad>
                    </Grid>
                    <Grid container item xs={8} sm={12} md={8} spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" component="h1">
                                {project.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ flexGrow: 1 }}>
                                <DetailDialog project={project} />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
