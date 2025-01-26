import Header from '@/components/Header'
import SignUp from '@/components/SignUp';
import { Login } from '@mui/icons-material';
import React from 'react'

const login = () => {
  return (
    <div>
      {/* この中に設定したいパーツを読み込ませる */}
      <Header />
      <Login />
      
    </div>
  )
}

export default login;