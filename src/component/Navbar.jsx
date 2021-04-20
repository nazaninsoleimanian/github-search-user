import React from 'react';
import { useGithubContext } from '../context/githubContext';
import defaultProfileImage from '../images/defaultProfileImage.png';
//Material Component
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
//React-icons
import { BsPersonDash } from "react-icons/bs";
//React-router
import {Link} from 'react-router-dom';


const Navbar = () => {

const classes = useStyles();
const {person_infos: person} = useGithubContext()
const {name, avatar_url} = person;

 return (
  <Box component='header' className={classes.header}>
   <Box component='nav' className={classes.headerNavBar}>
    <Box display='flex' alignItems='center' flex= '1'>
     <Avatar alt={name} src={avatar_url ? avatar_url : defaultProfileImage} />
     <Typography component = 'span' className={classes.welcome}>welcome {name}</Typography>
    </Box>
    <Link to='/' className={classes.logout}>logout <BsPersonDash className={classes.bsPersonDash} /></Link>
   </Box>
  </Box>
 )
}

const useStyles = makeStyles({
    header: {
        width: '100%',
        height: '5.5rem',
        position: 'fixed',
        backgroundColor: 'var(--clr-white)',
        borderBottom: 'var(--border-main)',
        top: 0,
        zIndex: 100,
    },
    headerNavBar: {
        padding: '0 2rem',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
    },
    welcome: {
     fontSize: '1.4rem',
     transform: 'capitalize',
     marginLeft: '1.5rem',
    },
    logout: {
     display: 'flex',
     justifyContent: 'space-around',
     alignItems: 'center',
     color: 'var(--clr-grey-1)',
    },
    bsPersonDash: {
      marginLeft: '2rem',
     }
   
   })
export default Navbar
