import React, { useEffect, useState } from 'react'
import { Route, Routes, Link, useHistory } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Box, Container,Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import { LoginPage } from './authentication/login/LoginPage'
import { Signup } from './authentication/signup/Signup'

function Homepage() {

  const [user, setUser] = useState()
  const history = useHistory()


  useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"))
      setUser(userInfo)
      if(userInfo){
        history.push('/chats')
      }
      if(!userInfo){
          history.push('/login')
      }
  }, [history])

  return (
    <>
      <Container><h1>Homepage</h1></Container>
    </>
  )
}

export default Homepage