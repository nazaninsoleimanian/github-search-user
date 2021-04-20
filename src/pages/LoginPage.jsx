import React, {useState} from 'react';
import {useGithubContext} from '../context/githubContext';
import loginImg from '../images/login-img.svg';
import preloader from '../images/preloader.gif';
//Material Components
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
//React-router
import { useHistory } from 'react-router-dom';

const LoginPage = () => {

const classes = useStyles();
const {person_authentication_loading: loading, person_authentication_error: error} = useGithubContext()
const [user, setUser] = useState('')
 
const history = useHistory()


const getUsername = (e) => {
 setUser(e.target.value)
}

const loginHandler = (e) => {
 e.preventDefault();
 history.push(`/profile/${user}`)
}


if(loading){
  return <Box width='100%' height='100vh' display='flex' justifyContent='center' alignItems='center'>
   <img src= {preloader} alt='preloader' className = {classes.preloader}/>
  </Box>
}

  return (
    <Box component = 'section' className = {classes.wrapper} >
      <Box className = {classes.container}>
        <img src={loginImg} alt="github user"/>
        <Typography component = 'h1'>github user</Typography>
        
        <form onSubmit={loginHandler}>
          <FormControl className = {classes.formControll}>
           <Box className = {classes.inputBox}>
            <TextField label="username" type='text'
        name='username' variant="outlined" value={user} onChange={getUsername} className = {classes.textField}/>
            <Button variant="contained" type= 'submit' className = {classes.loginBtn}>login</Button>
           </Box>
             {error && <FormHelperText className = {classes.textHelper}>user not found</FormHelperText>}          
          </FormControl>
        </form>
       </Box>
    </Box>
  )
};

const useStyles = makeStyles({
  wrapper: {
   minHeight: '100vh',
   display: 'grid',
   placeItems: 'center',
  },
  container: {
    width: '90vw',
    maxWidth: '60rem',
    textAlign: 'center',
    display: 'grid',
   placeItems: 'center',

    '& img': {
      marginBottom: '2rem',
      width: '50rem'
   },
   '& h1': {
     fontSize: '5rem',
    marginBottom: '1.5rem',
  }
  },
  formControll: {
   width: '50rem',
  
  },
  textField: {
   flex: 3,
   '& div': {
    borderRight: 'none',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    '& input':{
    fontSize: '1.3rem'
   },
   },   
  },
  inputBox: {
   width: '100%',
   display: 'flex',
   flexDirection: 'row'
  },
  loginBtn: {
    flex: 1,
    textTransform: 'uppercase',
    background: 'var(--clr-primary-5)',
    color: 'var(--clr-primary-10)',
    padding: '0.375rem 0.75rem',
    letterSpacing: 'var(--spacing)',
    display: 'inline-block',
    fontWeight: 400,
    transition: 'var(--transition)',
    fontSize: '2rem',
    border: '2px solid transparent',
    cursor: 'pointer',
    borderRadius: 'var(--radius)',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,

  '&:hover': {
    background: 'var(--clr-primary-8)',
    color: 'var(--clr-primary-1)',
  }
},
preloader: {
 width: '5rem',
},

textHelper: {
    fontSize: '1.2rem',
    color: 'var(--clr-red-dark)'
}

  
})

export default LoginPage;
