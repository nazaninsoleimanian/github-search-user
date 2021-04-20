import React, { useEffect } from 'react';
import {useGithubContext} from '../context/githubContext';
import {Info, Navbar, Repos} from '../component';
//Material Component
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
//React-router
import { useParams} from 'react-router-dom';

const url = 'https://api.github.com/users';


const Dashboard = () => {

const classes = useStyles();
const {fetchUsername} = useGithubContext()
const {username} = useParams();

useEffect(()=>{
 fetchUsername(`${url}/${username}`)
},[username])

 return (
   <main className= {classes.wrapper}>
      <Navbar/>
     <Box display= 'flex'>
      <Info />
      <Repos />
     </Box>
    </main>
 )
}

const useStyles = makeStyles({
  wrapper: {
    width: '100%',
    minHeight: '100vh',
    marginTop: '8rem',
  },
 })

export default Dashboard
