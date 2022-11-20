import React from "react";
import {
    Card,
    CardContent,
    Stack,
    Grid,
    Typography,
    Link,
    Skeleton,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function LatestProjectSkeleton() {
    return (
        <Card sx={{ minheight: 200 }}>
            <CardContent p={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                        <Skeleton
                            variant="rectangular"
                            width="100%"
                            height="100%"
                        />
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Stack direction="column">
                            <Typography variant="h5" component="h3">
                                <Skeleton />
                            </Typography>
                            <Typography>
                                <Skeleton />
                                <Skeleton />
                            </Typography>
                            <Link underline="hover" href="/dev">
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    gap={0}
                                >
                                    <Typography>
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
