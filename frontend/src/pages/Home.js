import React from 'react'
import {
    Container,
    Card,
    CardContent,
    Grid,
    Typography,
    Avatar,
    Stack,
    Link,
} from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LatestProject from '../components/LatestProject'
import header from '../images/header.jpg'
import avatar from '../images/avatar.jpg'

export default function Home() {

    const HeaderText = props => {
        return (
            <Typography
                variant="h3"
                component="h1"
                style={{ fontWeight: 500 }}
            >
                {props.children}
            </Typography>
        )
    }

    return (
        <Container sx={{ marginY: 5}} maxWidth="xl">
            <Grid container spacing={3}>
                {/* Jumbo */}
                <Grid item xs={12}>
                    <Card style={{
                        backgroundImage: `url(${header})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '35rem',
                        padding: '4.75rem'
                    }}>
                        <Stack direction="column" spacing={3}>
                            <HeaderText>
                                Hi, I'm Matt! <br /> A Full Stack Developer.
                            </HeaderText>
                            <Typography
                                variant="h5"
                                component="h1"
                                style={{ fontWeight: 500 }}
                            >
                                See my <Link href='/dev' underline='hover'>development projects.</Link>
                            </Typography>
                        </Stack>
                    </Card>
                </Grid>

                {/* About Me */}
                <Grid item xs={12}>
                    <Card sx={{ padding: 2 }}>
                        <CardContent>
                            <Stack direction="column" spacing={1} alignItems="center" pb={2}>
                                <Avatar
                                    alt="Matt Edwards"
                                    src={avatar}
                                    sx={{ width: 56, height: 56 }}
                                />
                                <Typography variant='h4' fontWeight={500}>About Me</Typography>
                            </Stack>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="body1">
                                    A Full Stack Developer from the North West of England using the Python 
                                    Django Framework to create web applications. I primarily use the Django
                                    Framework when creating web applications however I do also have 
                                    exprience in using Flask but I am open to learning new frameworks and 
                                    technologies.
                                    <br /><br/>
                                    I'm currently looking into learning React along side Django Rest 
                                    Framework to provide more visually pleasing and functional applications 
                                    for users.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="body1">
                                    I started my developer story in 2017 when I was filling in and printing 
                                    off invoices for a friends garage everyday and thought <i>"there has to be 
                                    a better way to do this"</i>.
                                    <br/><br/>
                                    I then went about learning and building a very simple PHP application to 
                                    be able to email PDF invoices to customers saving me & my friend time 
                                    from exchanging information and reducing the amount of paper invoices 
                                    being produced.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="body1">
                                    Once completing this web application seeing what I had built was being used 
                                    and the knowledge I had gethered I decided this is what I wanted to do for 
                                    a living, <b>software development</b>. In late 2018 I enrolled with <Link href="https://codeinstitute.net/" target="_blank" underline="hover">Code Institute
                                        <OpenInNewIcon sx={{ fontSize: 18 }}/>
                                    </Link> on the Full Stack Software Development course which I at the end I earned First Class Honours🎓.
                                    <br /><br/>
                                    During the course I learnt fundamentals in HTML, CSS, Javascript, 
                                    & Python along with associated web frameworks Flask and Django. 
                                    You can see projects I created in this course (and out of it!) on 
                                    the <Link underline='hover' href="/dev">Developments Page</Link>.
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
                    <Card sx={{ minHeight: 175, paddingY: 1, paddingX: 2 }}>
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
                                    You can view and download a copy of my <Link href="/cv" underline='hover'>CV here.</Link> Please make sure to read the full page.
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}
