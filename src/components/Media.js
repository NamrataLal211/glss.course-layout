import * as React from 'react';
import { Typography } from '@mui/material';
import {Button} from '@mui/material';
import Grass from '../images/Fill_7.png';
import {Grid} from '@mui/material';

export default function Media() {
    return(
        
        
        <Grid container style={{textAlign:'center', paddingBottom:"50px"}}>
            <Grid xs={12}>
                <img src={Grass} alt="grass" style={{marginTop:"70px", marginLeft:"10px"}}/>
                </Grid>
            <Grid xs={12}>
            <Typography 
            variant="h5" 
            style={{
                color: "#375DBE",
                fontWeight:"bold",
                marginLeft:"40px",
                marginTop:"5px"
                }}>
               KEEWE Networking Media
            </Typography>
            </Grid>
            <Grid xs={12} sx={{marginTop: "18px"}}>
            <Typography 
            variant="h7" 
            style={{
                color:"grey",
                marginLeft:"30px",
                marginTop:"50px !important"
                }}>
                Why To Wait? When You Can:
            </Typography>
            </Grid>
            <Grid xs={4}></Grid>
            <Grid container style={{display:'flex', justifyContent:'space-around', marginLeft:"22px"}} xs={4}>
                <Grid>
                    <Button 
                    variant="contained" 
                    size="medium" 
                    style={{
                        backgroundColor:"#375dbe",
                        // margin:"30px 20px 0px 260px",
                        width:"150px",
                        marginTop:"20px",
                        }}>
                    LEARN 
                    </Button>
                </Grid>
                <Grid>
                    <Button 
                    variant="contained" 
                    size="medium" style={{
                        backgroundColor:"#375dbe",
                        // marginTop:"30px",
                        // marginRight:"20px",
                        width:"150px",
                        marginTop:"20px"
                        }}>
                        EARN
                    </Button>

                </Grid>
                <Grid>
                    <Button 
                    variant="contained" 
                    size="medium" 
                    style={{
                        backgroundColor:"#375dbe",
                        // marginTop:"30px",
                        width:"150px",
                        marginTop:"20px"
                        }}>
                    CREATE
                    </Button>
                </Grid>
            </Grid>
            <Grid xs={4}></Grid>
            <Grid xs={12} sx={{marginTop:"18px", marginLeft:"23px"}}>
            <Typography 
            variant="h7" 
            style={{
                color:"grey",
                // marginLeft:"370px",
                // marginBottom:"-40px"
                
                }}>
                All At The Same Time
            </Typography>
            </Grid>
        </Grid>
    )
}