import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import './Signup.css'
import insta from '../Assets/instagram-logo.png'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {Link} from 'react-router-dom'


export default function Signup() {

    const userStyle = makeStyles({
        text1:{
            color:'gray',
            textAlign:'center',
        },
        card2:{
            height:'7vh',
            marginTop:'2%',

        }
    })
    const classes = userStyle();
    return (
        <div className='signupWrapper'>
            <div className='sighupCard'>
                <Card variant="outlined">
                    <CardContent>
                        <div className='insta-logo'>
                            <img className='insta-logo-img' src={insta}/>
                        </div>
                        <Typography className={classes.text1} variant="subtitle1" >
                            Signup to see photos and videos from your friends.
                        </Typography>

                        {true && <Alert severity="error">This is an error alert — check it out!</Alert>}

                        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small"/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small"/>
                        <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin="dense" size="small"/>

                        <Button size="small" fullWidth={true} color="secondary" variant="outlined" margin="dense" startIcon={<CloudUploadIcon/>} component="label">Upload Profile Image
                            <input type="file" accept='image/*' hidden/>
                        </Button>
                    </CardContent>
                    <CardActions>
                        <Button color="primary" fullWidth={true} variant="contained" >Sign up</Button>
                    </CardActions>
                    <CardContent>
                        <Typography className={classes.text1} variant="subtitle1" >
                            By signing up, you agree to our Terms, Condition and Cookies policy.
                        </Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined" className={classes.card2}>
                    <CardContent>
                        <Typography className={classes.text1} variant="subtitle1" >
                            Having an account ? <Link to='/login' style={{textDecoration:'none'}}>Login</Link>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}