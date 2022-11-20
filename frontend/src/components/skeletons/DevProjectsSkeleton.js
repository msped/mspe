import React from "react";
import { Grid, Card, CardContent, Typography, Skeleton } from "@mui/material";

export default function DevProjectsSkeleton() {
    return [...Array(6)].map((_, i) => (
        <Grid item xs={12} sm={4} key={i}>
            <Card sx={{ minheight: 200 }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4} sm={12} md={4}>
                            <Skeleton
                                variant="rectangular"
                                width={100}
                                height={100}
                            />
                        </Grid>
                        <Grid
                            container
                            item
                            xs={8}
                            sm={12}
                            md={8}
                            spacing={1}
                            p={1}
                        >
                            <Grid item xs={12}>
                                <Typography variant="h5" component="h1">
                                    <Skeleton />
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    <Skeleton />
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Skeleton
                                    variant="rectangular"
                                    width={135}
                                    height={25}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    ));
}
