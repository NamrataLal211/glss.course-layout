import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MainCourseCard(props) {

    let { logo, title, stream, duration, mode } = props

    return (
        <Card sx={{ maxWidth: 555 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={logo}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">{stream}</Typography>
            </CardContent>
            <CardContent style={{ display: 'flex' }}>
                <Typography variant="body2" color="text.secondary">{duration}</Typography>
                <Typography variant="body2" color="text.secondary" style={{ paddingLeft: '2%' }} size="">.</Typography>
                <Typography variant="body2" color="text.secondary" style={{ paddingLeft: '2%' }}>{mode}</Typography>
            </CardContent>
            <CardActions>
                <Button sx={{ minWidth: 225 }} size="large" variant='contained'>Apply Now</Button>
                <Button size="large" variant='outlined'>Download Brochure</Button>
            </CardActions>
        </Card>
    );
}
