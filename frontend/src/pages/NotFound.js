import React from 'react'
import {
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    Stack
} from '@mui/material'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
    return (
        <Container maxWidth="md" sx={{ marginTop: 5}}>
            <Helmet>
                <meta charSet='utf-8' />
                <title>404 Page Not Found | Matt Edwards</title>
            </Helmet>
            <Card sx={{ minHeight: '40vh'}}>
                <CardContent>
                    <Stack direction="column" spacing={4}>
                        <Typography 
                            variant='h2' 
                            component="h1" 
                            sx={{ textAlign: 'center', marginY: 4 }}
                        >
                            404 Page not found
                        </Typography>

                        <Typography 
                            color="text" 
                            variant='body1' 
                            sx={{ marginY: 3, textAlign: 'center'}}
                        >
                            The page you're looking for can't be found, 
                            head back home to see if you can find where you need to be!
                        </Typography>

                        <Stack alignItems="center">
                            <Button 
                                variant='contained' 
                                href='/' 
                                sx={{ width: '50%' }}
                            >
                                Go to Home    
                            </Button>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>      
        </Container>
    )
}
