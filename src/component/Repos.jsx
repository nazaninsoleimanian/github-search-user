import React from 'react';
import {useGithubContext} from '../context/githubContext';
//Material Component
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';


const Repos = () => {

const classes = useStyles();
const {repos} = useGithubContext();

 return (
 <Box className= {classes.wrapper}>
  <Box className= {classes.boxRepos}>
   <Typography component = 'h2' className = {classes.title}>Repositories</Typography>
   {repos.map((repo)=>{
    const {name, id, language, html_url} = repo;
    return (
      <Box key= {id} className= {classes.repo}>
       <Typography component = 'h4' className = {classes.h4}>{name}</Typography>
       <Typography component = 'p' className = {classes.language}>{language}</Typography>
       <Link href={html_url} className = {classes.url}>{html_url}</Link>
      </Box>
    )
   })}
  </Box>
 </Box>
 )
}
const useStyles = makeStyles({
  wrapper: {
   background: 'var(--clr-white)',
   minWidth: '40rem',
   flex: '1 1 40rem',
   minHeight: '2rem',
   padding: '4rem',
   margin: '0 3rem',
   borderRadius: 'var(--radius)',
  },
  boxRepos: {
   width: '100%',
   display: 'grid',
   gap: '2rem',
  },
  title: {
   fontSize: '3rem',
   color: 'var(--clr-primary-3)'
  },
  repo: {
   display: 'grid',
   gap: '1.5rem',
   padding: '1rem',
   borderRadius: 'var(--radius)',
   background: 'var(--clr-grey-10)'
  },
  h4: {
   fontSize: '2rem'
  },
  language: {
   fontSize: '1.5rem',
   color: 'var(--clr-green-dark)'
  },
  url: {
   fontSize: '1.2rem',
   color:'var(--clr-primary-2)',
   cursor: 'pointer',
  },
 })
export default Repos
