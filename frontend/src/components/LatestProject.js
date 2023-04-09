import React from "react";
import {
    Card,
    CardContent,
    Box,
    Stack,
    Grid,
    Typography,
    Link,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import default_img from "../images/default.jpg";
import LazyLoad from "react-lazyload";
import useGetLatestProject from "../hooks/useGetLatestProject";
import LatestProjectSkeleton from "./skeletons/LatestProjectSkeleton";

export default function LatestProject() {
    const { project, isLoading } = useGetLatestProject();

    return isLoading ? (
        <LatestProjectSkeleton />
    ) : (
        <Card sx={{ minheight: 200 }}>
            <CardContent p={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                        <Box
                            sx={{
                                borderRadius: 2.5,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#fff",
                            }}
                        >
                            <LazyLoad>
                                <img
                                    src={
                                        project.logo == null
                                            ? default_img
                                            : project.logo
                                    }
                                    alt="Development Logo"
                                    style={{
                                        display: "block",
                                        height: "100%",
                                        width: "auto",
                                        borderRadius: 2.5,
                                        maxHeight: "100px",
                                    }}
                                />
                            </LazyLoad>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Stack direction="column">
                            <Typography
                                variant="h5"
                                component="h3"
                                fontWeight={500}
                            >
                                {project.name}
                            </Typography>
                            <Link underline="hover" href="/dev">
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    gap={0}
                                >
                                    <Typography fontWeight={600}>
                                        Development Projects
                                    </Typography>
                                    <ChevronRightIcon />
                                </Stack>
                            </Link>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
