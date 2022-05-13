import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {
    Card,
    CardContent,
    Box,
    Stack,
    Grid,
    Typography,
    Link,
} from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TextTruncate from 'react-text-truncate'
import default_img from '../images/default.jpg'
import LazyLoad from 'react-lazyload';

export default function LatestProject() {
    const [project, setProject] = useState([])

    useEffect(() => {
      const search = async () => {
        const { data } = await axios.get(
          "http://127.0.0.1:8000/api/dev/latest/"
        );
        setProject(data)
      };
      search();
    }, []);
    
    return (
      <Card sx={{minheight: 200}}>
        <CardContent sx={{ padding: 3}}>
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
                    src={project.logo == null ? default_img : project.logo}
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
                  style={{ fontWeight: 500 }}
                >
                  {project.name}
                </Typography>
                <TextTruncate
                  line={2}
                  element="p"
                  truncateText="..."
                  text={project.description}
                  style={{ color: "#CCCCCC", fontSize: 14 }}
                />
                <Link underline="hover" href="/dev">
                  <Stack direction="row" alignItems="center" gap={0}>
                    <Typography style={{ fontWeight: 600 }}>
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
