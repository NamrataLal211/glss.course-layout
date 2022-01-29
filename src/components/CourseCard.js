import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function CourseCard(props) {

    let { logo, title, duration, mode } = props

    return (
        <div className='card'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={logo}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Typography size="small">{duration}</Typography>
                    <Typography size="small">{mode}</Typography>
                </CardActions>
            </Card>
        </div>
    );
};

export default CourseCard;
