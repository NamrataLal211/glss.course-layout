import * as React from 'react';
import { Typography } from '@mui/material';
import zigzag from '../images/Fill_403.png';
import {Grid} from '@mui/material';
import create1 from '../images/create_1.png';
import create2 from '../images/create_2.png';
import create3 from '../images/create_3.png';
import { typography } from '@mui/system';
import Quarter from '../images/Vector2.png';
import Circle from '../images/Vector3.png';
import "./create.css"
// import ImageBack  from '../images/backgroundCreateSection'

export default function Create() {
    return(
        
        
        <Grid container style={{textAlign:'center'}} className='coverImage'>
            <Grid xs={12}>
                <img src={zigzag} alt="zigzag" style={{marginTop:"20px"}}/>
                </Grid>
             <Grid xs={12}>
            <Typography 
            variant="h5" 
            style={{
                color: "#375DBE",
                fontWeight:"bold",
                marginTop:"10px",
                
                }}>
                Create with KEEWE
            </Typography>
            </Grid> 
            
            <Grid container spacing={2} style={{display:'flex', textAlign:'center'}} xs={12}>
                <Grid xs={4}>
                <img src={create1} alt="create1" style={{marginLeft:"120px"}}/>
                
                <Typography variant="h5" style={{fontWeight:"bold", marginTop:"-20px", marginLeft:"100px"}}>
                   Create Courses<br/>
                   Get access to<br/>
                   Artboard
                </Typography>
                
                
                </Grid>
                <Grid style={{textAlign:'center'}} xs={4} >
                <img src={create2} alt="create2" style={{marginTop:"70px"}}/>
                <Typography variant="h5" style={{fontWeight:"bold", marginTop:"40px", marginLeft:"70px"}}>
                    Incubate Ideas with us<br/>
                    Get funding
                </Typography>
                </Grid>
                <Grid xs={4}>
                <img src={create3} alt="create3" style={{marginTop:"70px", marginRight:"100px"}}/>
                <Typography variant="h5" style={{fontWeight:"bold", marginTop:"30px"}}>
                     Synergize your Research<br/>
                     on products with<br/>
                     like Minds
                </Typography>
                </Grid>
            </Grid>
            <Grid xs={4}></Grid>
            
            <Grid xs={12}>
            
            </Grid> 
            
            
        </Grid>
    )
}