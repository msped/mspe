import React from "react";
import { Container, Typography, Grid, Stack, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import ProjectCard from "../components/ProjectCard";
import useGetDevProjects from "../hooks/useGetDevProjects";
import DevProjectsSkeleton from "../components/skeletons/DevProjectsSkeleton";

export default function Development() {
    const { projects, isLoading } = useGetDevProjects();

    return (
        <Container maxWidth="xl">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Development | Matt Edwards</title>
                <meta
                    name="description"
                    content="Here you will find my previous development projects, 
                whether they be commission work or just to learn new technologies."
                />
            </Helmet>
            <Box my={5}>
                <Stack direction="column" gap={1} alignItems="center">
                    <Typography
                        color="text"
                        variant="h2"
                        component="h1"
                        sx={{ fontWeight: 500 }}
                    >
                        Development
                    </Typography>
                    <Typography
                        color="text"
                        variant="body1"
                        fontWeight={500}
                        sx={{ textAlign: "center" }}
                    >
                        Here you can see all my development projects, click on
                        them to find out more!
                    </Typography>
                </Stack>
            </Box>

            <Grid container spacing={2}>
                {isLoading ? (
                    <DevProjectsSkeleton />
                ) : (
                    projects.map((project) => (
                        <Grid item xs={12} sm={4} key={project.id}>
                            <ProjectCard project={project} />
                        </Grid>
                    ))
                )}
            </Grid>
        </Container>
    );
}
