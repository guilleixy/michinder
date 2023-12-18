import React from 'react';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { faCat } from '@fortawesome/free-solid-svg-icons';
// import { Link } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';

const Header = ({ backButton }) => {

  const navigate = useNavigate();

  return (
    <div className='header'>
      {backButton ? (
        <IconButton onClick={() => navigate(backButton)}>
          <ArrowBackIosIcon className='header__logo' fontSize='large'/>
        </IconButton>
      ):(
        <IconButton>
          <PersonIcon className='header__logo' fontSize='large'/>
        </IconButton>
      )}


      <Link to='/' className='header__icon'>
        <h1>
          Michinder
          <FontAwesomeIcon icon={faCat} />
        </h1>
      </Link>
      <Link to='/chat'>
        <IconButton>
          <ForumIcon className='header__logo' fontSize='large' />
        </IconButton>
      </Link>
    </div>
  )
}

export default Header