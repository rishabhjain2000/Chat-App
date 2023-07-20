import React, { useEffect } from 'react'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
import { Container,Box,Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const Homepage = () => {

  const history=useHistory();
  
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem('userInfo'));

    if(user)history.push('/chats');

  },[history]);
  
  return (
    <Container maxW='xl' centerContent>
     <Box
     d="flex"
     justifyContent="center"
     p={3}
     bg={"white"}
     w="100%"
     borderRadius="lg"
     borderWidth="1px"
     as="center"
     >
      <new fontSize='4xl' fontFamily="Work sans" color="black">Talk-A-Tive</new>
     </Box>
     <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
     <Tabs variant='soft-rounded'>
  <TabList mb='1em'>
    <Tab width='50%'>Login</Tab>
    <Tab width='50%'>Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
     <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
     </Box>
    </Container>
  )
}

export default Homepage