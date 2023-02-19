import { Avatar, Box, Button, Divider, Menu, MenuButton, MenuItem, MenuList, Tooltip } from '@chakra-ui/react'
import { BellIcon, ChatIcon, CloseIcon, Search2Icon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Logo } from './Logo'
import { ChatState } from '../../Context/ChatProvider'
import ProfileModal from './ProfileModal'
import SearchDrawer from './SearchDrawer'

function SideDrawer() {

    const { user, setUser } = ChatState()
    const history = useHistory();

    const [search, setSearch] = useState()
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingChat, setLoadingChat] = useState()


    const logout = () => {
        localStorage.removeItem("userInfo")
        history.push('/')
    }

    return (
        <>
            <Box
                display={{ base: 'flex', md: 'flex' }}
                flexDirection={{ base: 'column', md: 'column' }}
                background={{ base: "#1b1b1d", md: "#1b1b1d" }}
                padding={{ base: "0.8rem", md: "0.8em" }}
                alignItems={"center"}
                justifyContent={"space-between"}

            >
                <Logo marginTop={{ base: '2rem', md: '2rem' }} marginBottom={{ base: '2rem', md: '2rem' }} />

                <Box
                    height={"100%"}
                    display={{ base: 'flex', md: 'flex' }}
                    flexDirection={{ base: 'column', md: 'column' }}
                // justifyContent={{base: 'space-between', md: 'space-around'}}

                >
                    <Tooltip  label='Chat' closeDelay={500}>
                       <SearchDrawer />
                    </Tooltip>

                    <Tooltip label='Search Users' closeDelay={500}>
                        <Button fontSize={"2xl"} _hover={{ bg: 'grey' }} background={"transparent"} marginTop={{ base: '3rem', md: '3rem' }}><ChatIcon color={"white"} /></Button>
                    </Tooltip>
                    
                    

                    <Tooltip label='Notification' closeDelay={500}>
                        <Button fontSize={"2xl"} _hover={{ bg: 'grey' }} background={"transparent"} marginTop={{ base: '3rem', md: '3rem' }}><BellIcon color={"white"} _hover={{ bg: 'grey' }} /></Button>
                    </Tooltip>
                </Box>

                <Divider marginTop={{ base: '3rem', md: '3rem' }} marginBottom={{ base: '3rem', md: '3rem' }} />

                <Box>

                    <Tooltip label='Logout' closeDelay={500}>
                        <Menu>
                            <MenuButton cursor={"pointer"} as={Avatar} icon={<Avatar name={user.name} />}>
                            </MenuButton>
                            <MenuList color={"white"} border={"#4a4c4d"} background={"#384044"} minW='50px' padding={"0.5rem"}>
                                <MenuItem background={"transparent"} _hover={{ bg: '#7d43a9' }} borderRadius={"8px"} marginTop={"5px"}><ProfileModal /></MenuItem>
                                <MenuItem background={"transparent"} _hover={{ bg: '#db3948' }} borderRadius={"8px"} marginTop={"5px"} onClick={logout}><i className="fa-solid fa-right-from-bracket"></i>Logout</MenuItem>
                            </MenuList>
                        </Menu>
                        {/* <Button><i class="fa-solid fa-right-from-bracket"></i></Button> */}
                    </Tooltip>

                </Box>

            </Box>
        </>
    )
}

export default SideDrawer