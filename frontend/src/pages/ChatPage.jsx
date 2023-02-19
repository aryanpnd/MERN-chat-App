import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import { ChatState } from '../Context/ChatProvider';
import { Box } from '@chakra-ui/react';
import SideDrawer from './miscellaneous/SideDrawer';
import ChatBox from './miscellaneous/ChatBox';
import MyChats from './miscellaneous/MyChats';

export default function ChatPage() {
    const { user, setUser } = ChatState()
    const [userAuth, setUserAuth] = useState()
    const history = useHistory()


    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))
        setUserAuth(userInfo)
        if (userInfo) {
            setUser(true)
            history.push('/chats')
        }
    }, [history])

    return (
        <div style={{ display:"flex", width: "100%",height: "100%", backgroundColor: "yellow" }}>
            {user && <SideDrawer />}

            {
                <Box style={{display:"flex" ,width:"100%", justifyContent:"space-between"}} >
                    {
                        user && <MyChats />
                    }
                    {
                        user && <ChatBox />
                    }
                </Box>
            }
        </div>
    )
}
