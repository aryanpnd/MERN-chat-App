import { EditIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Center, color, Input, Stack, Text, Toast, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ChatState } from '../../../../Context/ChatProvider'
import ChatLoadingSkeletons from '../ChatLoadingSkeletons'
import { getSender } from '../ChatLogic';

function MyChats() {

  const { user, setUser,
    searchUsersIndex, setsearchUsersIndex,
    selectedChats, setSelectedChats,
    chats, setChats } = ChatState()

  const Toast = useToast()

  const [loggedUser, setloggedUser] = useState()

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        }
      }

      const { data } = await axios.get(`/api/chats`, config)
      setChats(data)
      // setSearchResults(data)
      console.log(data)
    } catch (error) {
      Toast({
        title: 'Oops, Something went wrong !!!',
        description: "Fail to load Chats,Trying again",
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-left',
      })
    }
  }

  useEffect(() => {
    setloggedUser(JSON.parse(localStorage.getItem("userInfo")))
    fetchChats()
  }, [])



  return (
    <Box overflow={"scroll"} display={{ base: selectedChats ? "none" : "block", md: "block" }} color={"white"} background={"#111633"} width={{ base: "100%", md: "25%" }} padding={{ base: "3", md: "5" }} >

      <Box display={"flex"} justifyContent={"space-between"} marginTop={{ base: "5", md: "5" }}>

        <Text fontFamily={"sans-serif"} fontWeight={"bold"} fontSize={{ base: "2xl", md: "3xl" }}>Inbox</Text>
        <Center>
          <EditIcon cursor={"pointer"} fontSize={"lg"} />
        </Center>
      </Box>

      <Box marginTop={"5"} marginBottom={"5"}>
        <Input borderRadius={10} border={"1px"} marginRight={"5px"} focusBorderColor='#7d43a9' placeholder='Search here...'
        // value={search}
        //  onChange={(e) => setSearch(e.target.value)} 
        />
      </Box>
      {/* displaying chats */}

      {
        chats ? (
            <Stack >
              {chats.map((chat) => (

                <Box key={chat._id} onClick={() => setSelectedChats(chat)} cursor={"pointer"} width={"100%"} _hover={{ bg: "#7a6dd473" }} display={"flex"} background={selectedChats === chat ? "#1d2146" : "transparent"} _active={{ bg: "#1d2146" }} borderRadius={8} padding={"3"} marginBottom={"0px"}>

                  <Center>

                    <Avatar
                      background={"#935dbd"}
                      size='md'
                      name={!chat.isGroupChat ? (
                        getSender(loggedUser, chat.users)
                      ) : chat.chatName}
                    // src='https://bit.ly/prosper-baba'
                    />
                  </Center>

                  <Box width={"10rem"} fontFamily={"sans-serif"} paddingLeft={"3"}>

                    <Box >
                      <Text fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji"} marginTop={"1"} fontWeight='semibold' fontSize={"md"}>{!chat.isGroupChat ? (
                        getSender(loggedUser, chat.users)
                      ) : chat.chatName}</Text>
                    </Box>

                    <Box height={"1.5rem"} >
                      <Text color={"#cbccd2b3"} fontSize='xs'>{!chat.isGroupChat ? (
                        getSender(loggedUser, chat.users)
                      ) : chat.chatName}</Text>
                    </Box>

                  </Box>
                </Box>
              ))}
            </Stack>
            )
            :
            <ChatLoadingSkeletons />
      }



          </Box>
        )
}

      export default MyChats