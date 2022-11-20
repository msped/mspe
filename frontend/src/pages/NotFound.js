import React from "react";
import {
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    Stack,
    Grid,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import travolta_gif from "../images/travolta-gif.gif";

export default function NotFound() {
    return (
        <Container maxWidth="md" sx={{ marginTop: 5 }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>404 Page Not Found | Matt Edwards</title>
            </Helmet>
            <Card sx={{ minHeight: "40vh" }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Stack direction="column" spacing={4}>
                                <Typography
                                    variant="h2"
                                    component="h1"
                                    my={4}
                                    fontWeight={500}
                                    sx={{ textAlign: "center" }}
                                >
                                    404 Page not found
                                </Typography>

                                <Typography
                                    color="text"
                                    variant="body1"
                                    my={3}
                                    sx={{ textAlign: "center" }}
                                >
                                    The page you're looking for can't be found,
                                    head back home to see if you can find where
                                    you need to be!
                                </Typography>

                                <Stack alignItems="center">
                                    <Button
                                        variant="contained"
                                        href="/"
                                        sx={{ width: "50%" }}
                                    >
                                        Go to Home
                                    </Button>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <img
                                src={travolta_gif}
                                alt="John Travolta looking for content."
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
}
