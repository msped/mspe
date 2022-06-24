import React from 'react'
import {
    Container,
    Typography,
    Grid,
    Stack,
    Box,
    Link,
} from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Helmet } from 'react-helmet-async'

import ContactForm from '../components/ContactForm'

export default function Contact() {
    return (
        <Container maxWidth="lg">
            <Helmet>
                <meta charSet='utf-8' />
                <title>Contact me! | Matt Edwards</title>
                <meta name="description" content="Want to dicuss a new position in your company you think
                 I would be the perfect fit or comission a website? Contact me here!"/>
            </Helmet>
            <Box my={5}>
                <Stack direction="column" gap={1} alignItems="center">
                    <Typography color="text" variant="h2" component="h1" sx={{ fontWeight: 500 }}>
                        Contact
                    </Typography>
                </Stack>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Stack direction="column" gap={2}>
                            <Typography variant="h4" component="h2" fontWeight={500}>
                                Getting in contact
                            </Typography>
                            <Typography fontSize={18}>
                                You can message via the form on this pae or you can 
                                message me on <Link href='https://www.linkedin.com/in/mspe/' underline='none'>
                                    LinkedIn <OpenInNewIcon/>
                                </Link>
                            </Typography>
                            <Typography fontSize={18}>
                                I will aim to reply to either platforms within 72 hours.
                            </Typography>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContactForm />
                </Grid>
            </Grid>
        </Container>
    )
}
