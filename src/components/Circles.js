import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ResponsiveGrid from './Grid';
import './backImage.css'

// import learnbackground from '../images/learnBackground.png'
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const LearnBackground = () => {

    return (
        <>
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={0} style={{ position: 'relative' }} className='coverImage'>
                        <Grid item xs={2.5} />
                        <Grid item xs>
                            <ResponsiveGrid style={{ position: 'absolute', top: '70px', left: '100px', zIndex: '3' }} />
                        </Grid>
                        <Grid item xs={2.5} />
                    </Grid>
                </Box>
            </div>
        </>
    );
};

export default LearnBackground;
