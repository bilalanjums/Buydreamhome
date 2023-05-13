import { Link } from '@mui/material'
import React from 'react'

const FooterLink = ({ text }) => {
  return (
    <Link 
    href="#"
    variant='p'
    component='a'
    sx={{
      fontSize: '0.9rem',
      fontWeight: '400',
      textDecoration: 'none',
      color: '#ccc',
      textTransform: 'capitalize',
      "&:hover": {
        color: '#fff',
      }
    }}
    >
      {text}
    </Link>
  )
}

export default FooterLink