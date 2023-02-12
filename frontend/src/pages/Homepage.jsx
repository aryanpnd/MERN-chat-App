import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Box, Container,Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import { LoginPage } from './authentication/login/LoginPage'
import { Signup } from './authentication/signup/Signup'

function Homepage() {
  return (
    <>
      <Container><h1>Homepage</h1></Container>
    </>
  )
}

export default Homepage