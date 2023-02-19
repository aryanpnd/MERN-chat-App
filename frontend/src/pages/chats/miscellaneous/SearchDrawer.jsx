import React, { useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Toast,
    useToast,
    Box,
    Container,
    Text,
    Spinner,
} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { ChatIcon, Search2Icon } from '@chakra-ui/icons'
import { ChatState } from '../../../Context/ChatProvider'
import axios from 'axios'
import ChatLoadingSkeletons from './ChatLoadingSkeletons'
import UsersChatList from './UsersChatList'

function SearchDrawer() {
    const { user, setUser,
        searchUsersIndex, setsearchUsersIndex,
        selectedChats, setSelectedChats,
        chats, setChats } = ChatState()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const Toast = useToast()
    const [search, setSearch] = useState()
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingUsers, setLoadingUsers] = useState(false)


    const handleSearch = async () => {
        if (!search) {
            Toast({
                title: 'Empty Search',
                description: "Please Type a valid input",
                status: 'warning',
                duration: 4000,
                isClosable: true,
                position: 'top-left',
            })
            return
        }

        try {
            setLoading(true)
            setLoadingUsers(true)
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                }
            }

            const { data } = await axios.get(`/api/user?search=${search}`, config)
            // setSearchResults(data)
            console.log(data)
            setLoading(false)
            setLoadingUsers(false)
            setSearchResults(data)

        } catch (error) {
            Toast({
                title: 'Oops, Something went wrong !!!',
                description: "Fail to load user",
                status: 'error',
                duration: 4000,
                isClosable: true,
                position: 'top-left',
            })

            setLoading(false)
            setLoadingUsers(false)
        }
    }

    const toggleUserChat = async (userId) => {
        try {
            setLoading(true)

            const config = {
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                }
            }

            const { data } = await axios.post('/api/chats', { userId }, config)

            if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);

            setSelectedChats(data)
            setLoading(false)
            onClose()
        } catch (error) {
            Toast({
                title: 'Oops, Something went wrong !!!',
                description: "Fail to load the Chat",
                status: 'error',
                duration: 4000,
                isClosable: true,
                position: 'top-left',
            })
        }
    }

    return (
        <>
            <Button
                _hover={{ bg: 'grey' }} background={"transparent"} marginTop={{ base: '3rem', md: '3rem' }}
                ref={btnRef} colorScheme='teal' onClick={onOpen}>
                <Search2Icon fontSize={"2xl"} color={"white"} />
            </Button>


            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}

            >
                <DrawerOverlay />
                <DrawerContent color={"white"} background={"#1c1a1d"}>
                    <DrawerCloseButton />
                    <DrawerHeader>Search Users</DrawerHeader>

                    <DrawerBody display={"flex"} flexDirection={"column"}  >

                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Input marginRight={"5px"} focusBorderColor='#7d43a9' placeholder='Search here...' value={search} onChange={(e) => setSearch(e.target.value)} />


                            <Button isLoading={loading} background={"#7d43a9"} _hover={{ bg: '#9578f1d1' }} _focus={{ bg: '#9578f1a3' }} mr={3} onClick={handleSearch}>
                                <Search2Icon color={"white"} />
                            </Button>
                        </Box>

                        <Box display={"flex"} justifyContent={"space-between"} marginTop={{ base: "4", md: "6" }}>
                            <Text fontSize='xl'>Users Found</Text>
                            <Text paddingRight={"3"} fontSize='xl'>{searchUsersIndex}</Text>

                        </Box>

                        <Box marginTop={{ base: "4", md: "6" }} >
                            {
                                loadingUsers ?
                                    (<ChatLoadingSkeletons />) :
                                    (searchResults.map((user, index) => {
                                        setsearchUsersIndex(index + 1)
                                        return (

                                            <UsersChatList
                                                key={user._id}
                                                user={user}
                                                handleUserChat={() => toggleUserChat(user._id)}
                                            />
                                        )
                                    })
                                    )
                            }
                        </Box>
                        {/* {setLoading && <Spinner />} */}

                    {/* <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Modal Title</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                                <Button variant='ghost'>Secondary Action</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal> */}
                    </DrawerBody>

                    {/* <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter> */}


                </DrawerContent>

                
            </Drawer>
        </>
    )
}

export default SearchDrawer