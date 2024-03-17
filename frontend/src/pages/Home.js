import React from "react";
import {
    Container,
    Card,
    CardContent,
    Grid,
    Typography,
    Avatar,
    Stack,
    Link,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LatestProject from "../components/LatestProject";
import LazyLoad from "react-lazyload";
import { Helmet } from "react-helmet-async";
import avatar from "../images/avatar.jpg";

export default function Home() {
    const HeaderText = (props) => {
        return (
            <Typography variant="h3" component="h1" style={{ fontWeight: 500 }}>
                {props.children}
            </Typography>
        );
    };

    return (
        <Container sx={{ marginY: 5 }} maxWidth="xl">
            <Grid container spacing={3}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Full Stack Web Developer | Matt Edwards</title>
                    <meta
                        name="description"
                        content="A Full Stack Developer based in the North West of 
                        England using the Python Web Framework Django to create functional, user-friendly 
                        web applications"
                    />
                </Helmet>

                {/* Jumbo */}
                <Grid item xs={12}>
                    <LazyLoad once>
                        <Card
                            className="background-image"
                            style={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "35rem",
                                padding: "4.75rem",
                            }}
                        >
                            <Stack direction="column" spacing={3}>
                                <HeaderText>
                                    Hi, I'm Matt! <br /> A Full Stack Developer.
                                </HeaderText>
                                {/* Image: https://pixabay.com/photos/astronomy-moon-cosmos-lunar-space-3120482/ */}
                                <Typography
                                    variant="h5"
                                    component="h1"
                                    style={{ fontWeight: 500 }}
                                >
                                    See my{" "}
                                    <Link href="/dev" underline="hover">
                                        development projects.
                                    </Link>
                                </Typography>
                            </Stack>
                        </Card>
                    </LazyLoad>
                </Grid>

                {/* About Me */}
                <Grid item xs={12}>
                    <Card sx={{ padding: 2 }}>
                        <CardContent>
                            <Stack
                                direction="column"
                                spacing={1}
                                alignItems="center"
                                pb={2}
                            >
                                <Avatar
                                    alt="Matt Edwards"
                                    src={avatar}
                                    sx={{ width: 56, height: 56 }}
                                />
                                <Typography
                                    variant="h4"
                                    component="h2"
                                    fontWeight={500}
                                >
                                    About Me
                                </Typography>
                            </Stack>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="body1">
                                        A Full Stack Developer from the North
                                        West of England using the Python Django
                                        Framework to create web applications. I
                                        primarily use the Django Framework when
                                        creating web applications; however, I
                                        also have experience in using Flask. I
                                        am open to learning new frameworks and
                                        technologies.
                                        <br />
                                        <br />I started my developer story in
                                        2017 when I was filling in and printing
                                        off invoices for a friend's garage every
                                        day and thought,{" "}
                                        <i>
                                            "there has to be a better way to do
                                            this"
                                        </i>
                                        .
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="body1">
                                        I then went about learning and building
                                        a very simple PHP application to be able
                                        to email PDF invoices to customers,
                                        saving me and my friend time from
                                        exchanging information and reducing the
                                        number of paper invoices being produced.
                                        <br />
                                        <br />
                                        Once I completed this web application
                                        and saw that it was being used, and
                                        considering the knowledge I had gathered
                                        during its development, I decided that{" "}
                                        <b>software development</b> is what I
                                        wanted to do for a living.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="body1">
                                        In late 2018, I enrolled with{" "}
                                        <Link
                                            href="https://codeinstitute.net/"
                                            target="_blank"
                                            underline="hover"
                                        >
                                            Code Institute
                                            <OpenInNewIcon
                                                sx={{ fontSize: 18 }}
                                            />
                                        </Link>{" "}
                                        on the Full Stack Software Development
                                        course, where I earned First Class
                                        Honours🎓 at the end.
                                        <br />
                                        <br />
                                        During the course, I learned the
                                        fundamentals of HTML, CSS, JavaScript,
                                        and Python, along with associated web
                                        frameworks Flask and Django. You can see
                                        the projects I created in this course
                                        (and out of it!) on the{" "}
                                        <Link underline="hover" href="/dev">
                                            Developments Page
                                        </Link>
                                        .
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Latest */}
                <Grid item xs={12} md={6}>
                    <LatestProject />
                </Grid>

                {/* Want a Copy? */}
                <Grid item xs={12} md={6}>
                    <Card sx={{ minHeight: 140, paddingY: 1, paddingX: 2 }}>
                        <CardContent>
                            <Stack direction="column" spacing={2}>
                                <Typography
                                    variant="h5"
                                    component="h4"
                                    style={{ fontWeight: 500 }}
                                >
                                    Want a copy of my CV?
                                </Typography>
                                <Typography
                                    variant="h5"
                                    component="h4"
                                    style={{ fontSize: 14 }}
                                >
                                    You can view and download a copy of my{" "}
                                    <Link href="/cv" underline="hover">
                                        CV here.
                                    </Link>{" "}
                                    Please make sure to read the full page.
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
