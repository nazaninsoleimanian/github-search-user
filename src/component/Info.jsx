import React from 'react';
import {useGithubContext} from '../context/githubContext';
import defaultProfileImage from '../images/defaultProfileImage.png';
//Material Component
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
//React-icons
import { GrLocation } from "react-icons/gr";
import { BsPersonPlusFill } from "react-icons/bs";
import { GiShadowFollower } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";

const Info = () => {

const classes = useStyles();
const {person_infos: person} = useGithubContext()
const {name, location, followers, following, avatar_url, } = person;

 return (
  <Box component= 'section' className={classes.wrapper}>
   <Avatar alt={name} src={avatar_url ? avatar_url : defaultProfileImage} className = {classes.avatar} />
   <Box className={classes.boxInfo}> 
     <Box>
      <FaRegUser  className = {classes.user}/> {name}
     </Box>
     <Box>
      <GrLocation /> {location}
     </Box>
     <Box>
      <BsPersonPlusFill /> {following}
     </Box>
     <Box>
      <GiShadowFollower /> {followers}
     </Box>
    </Box>
  </Box>
 )
}

const useStyles = makeStyles({
  wrapper: {
   background: 'var(--clr-white)',
   minWidth: '40rem',
   maxHeight: '52rem',
   padding: '4rem 4rem 5rem',
   margin: '0 3rem',
   borderRadius: 'var(--radius)',
  },
  boxInfo: {
   background: 'var(--clr-primary-10)',
   borderRadius: 'var(--radius)',
   display:'grid',
   gap: '2rem',
   padding: '1.5rem',
  },
  avatar: {
   width: '20rem',
   height: '20rem',
   margin: '0 auto',
   marginBottom: '4rem',
  },
  user: {
   background: 'var(--clr-primary-4)',
   width: '2rem',
   height: '2rem',
   borderRadius: '50%'
  }
 })
export default Info
