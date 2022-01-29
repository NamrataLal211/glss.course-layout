import React, { useState } from 'react';
import './Overlay.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function ImgCard(props) {
    let { img, title } = props

    return (
        <>
            <div className="container" style={{ display: 'block' }}>
                <Card sx={{ maxWidth: 250, maxHeight: 250, paddingTop: '10px', paddingRight: '10px', paddingBottom: '10px', paddingLeft: '10px' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            width='200'
                            image={img}
                            alt="green iguana"
                        />
                    </CardActionArea>
                </Card>
                <div className="overlay">
                    <a href='#' style={{ textAlign: 'center' }} className='title'>
                        <h5>{title}</h5>
                    </a>
                </div>
            </div>
        </>
    );
}
