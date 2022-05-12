import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@mui/material'
import DetailDialog from '../components/DetailDialog'

export default function ProjectCard({ project }) {
  return (
    <Card>
        <CardContent>
        
        </CardContent>
        <CardActions>
          <DetailDialog project={project} />
        </CardActions>
    </Card>
  )
}
