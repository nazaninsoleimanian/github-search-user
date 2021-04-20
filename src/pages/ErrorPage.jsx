import React from 'react';
//Material Component
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//React-router
import { Link } from 'react-router-dom';

const ErrorPage = () => {

const classes = useStyles();

  return <Box component= 'main' className= {classes.wrapper}>
    <Box component = 'section'>
      <Typography component = 'h1' className= {classes.h1}>404</Typography>
      <Typography component= 'h3' className= {classes.h3}>Sorry, the page you tried cannot be found</Typography>
      <Link to='/'>
       <Button variant="contained" className = {classes.loginBtn}>
         back home
       </Button></Link>
    </Box>
  </Box>
}


const useStyles = makeStyles({
 wrapper: {
  width: '100%',
  height: '100vh',
  background: 'var(--clr-primary-10)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
 },
 h1: {
    fontSize: '10rem',
  },
  h3: {
    fontSize: '3rem',
    textTransform: 'none',
    marginBottom: '2rem',
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
    // boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
    borderRadius: 'var(--radius)',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,

  '&:hover': {
    background: 'var(--clr-primary-8)',
    color: 'var(--clr-primary-1)',
  }
},
})


export default ErrorPage
