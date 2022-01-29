import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function Learning(props) {
    let { img, heading } = props
    return (
        <Box sx={{ flexGrow: 1 }}>
            <div className="container" style={{ paddingLeft: '9%' }}>
                <Grid container spacing={2} style={{ display: 'block' }}>
                    <Grid item xs={6} md={4}>
                        <img src={img} alt="logo" style={{ paddingLeft: '45%' }} />
                        <Item style={{
                            border: 0, boxShadow: 'none', color: '#375DBE', paddingTop: '1%', fontWeight: 700,
                            fontSize: '1.1rem'
                        }}>{heading}</Item>
                    </Grid>
                </Grid>
            </div>
        </Box >
    );
}
