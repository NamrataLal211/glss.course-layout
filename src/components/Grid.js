import * as React from 'react';
// import './Overlay.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImgCard from './ImgCard';
import plearn from '../images/plearn.png';
import mocase from '../images/mocase.png';
import exams from '../images/exams.png';
import create from '../images/create.png';
import incubation from '../images/incubation.png';
import netmedia from '../images/netmedia.png';


export default function ResponsiveGrid() {
    return (
        <Box sx={{ flexGrow: 0 }} style={{ display: 'block', transform: 'translateY(40%) scale(1, 0.9)' }}>
            <Grid container spacing={0} style={{ marginBottom: '25px' }}>
                <Grid item xs={1}>

                </Grid>
                <Grid item xs={3} style={{ alignItems: 'center' }}>
                    <ImgCard
                        classname='plearn'
                        img={plearn}
                        title="Personalized Learning"
                    />
                </Grid>
                <Grid item xs={0.5}>

                </Grid>
                <Grid item xs={3}>
                    <ImgCard
                        img={mocase}
                        title="MyOpenCase"
                    />
                </Grid>
                <Grid item xs={0.5}>

                </Grid>
                <Grid item xs={3}>
                    <ImgCard
                        img={exams}
                        title="Examination"
                    />
                </Grid>
                <Grid item xs={1}>

                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={1}>

                </Grid>
                <Grid item xs={3} style={{ alignItems: 'center' }}>
                    <ImgCard
                        img={create}
                        title="Create"
                    />
                </Grid>
                <Grid item xs={0.5}>

                </Grid>
                <Grid item xs={3}>
                    <ImgCard
                        img={incubation}
                        title="Incubation"
                    />
                </Grid>
                <Grid item xs={0.5}>

                </Grid>
                <Grid item xs={3}>
                    <ImgCard
                        img={netmedia}
                        title="Network Media"
                    />
                </Grid>
                <Grid item xs={1}>

                </Grid>
            </Grid>
        </Box>
    );
}
