import * as React from 'react';
import { useContext,useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import './Login.css'
import insta from '../Assets/instagram-logo.png'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import bg from '../Assets/instaLogin.png'
import {Link, useHistory} from 'react-router-dom'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { AuthContext } from '../Context/AuthContext';


export default function Login() {
    const store = useContext(AuthContext);
    // console.log(store);
    const userStyle = makeStyles({
        text1:{
            color:'gray',
            textAlign:'center',
        },
        text2:{
            textAlign:'center'
        },
        card2:{
            height:'7vh',
            marginTop:'2%',

        }
    })
    const classes = userStyle();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false)
    const history = useHistory();
    const {login} = useContext(AuthContext);

    const handleClick = async()=>{
        try{
            setError('');
            setLoading(true);
            let res = await login(email,password);
            setLoading(false);
            history.push('/')
        }catch(err){
            setError(err);
            setTimeout(()=>{
                setError('');
            },2000)
            setLoading(false)
        }
    }
    return (
        <div className='loginWrapper'>

            <div className='imgcar' style={{backgroundImage:'url('+bg+')',backgroundSize:'cover'}}>
                <div className='car'>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={175}
                        totalSlides={4}
                        visibleSlides={1}
                        // step={3}
                        hasMasterSpinner
                        isPlaying={true}
                        infinite={true}
                        dragEnabled={false}
                        touchEnabled={false}
                    >
                        <Slider>
                        <Slide index={0}><Image src={img1} style={{objectFit:'cover'}}/></Slide>
                        <Slide index={1}><Image src={img2}/></Slide>
                        <Slide index={2}><Image src={img3}/></Slide>
                        <Slide index={3}><Image src={img4}/></Slide>
                        </Slider>
                    </CarouselProvider>
                </div>
            </div>

            <div className='loginCard'>
                <Card variant="outlined">
                    <CardContent>
                        <div className='insta-logo'>
                            <img className='insta-logo-img' src={insta}/>
                        </div>
                        {error!='' && <Alert severity="error">{error}</Alert>}

                        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <Typography className={classes.text2} color="primary" variant="subtitle1" >
                            Forgot Password
                        </Typography>

                    </CardContent>
                    <CardActions>
                        <Button color="primary" fullWidth={true} variant="contained" onClick={handleClick} disabled={loading}>Login</Button>
                    </CardActions>
                </Card>
                <Card variant="outlined" className={classes.card2}>
                    <CardContent>
                        <Typography className={classes.text1} variant="subtitle1" >
                            Don't have an account ? <Link to='/signup' style={{textDecoration:'none'}}>Sign up</Link>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}