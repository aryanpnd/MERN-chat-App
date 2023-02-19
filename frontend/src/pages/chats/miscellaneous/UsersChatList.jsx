import { Avatar, Badge, Box, Button, Center, Flex, Text, useDisclosure } from '@chakra-ui/react'

import React from 'react'

function UsersChatList({ user, handleUserChat }) {
   
    return (
        <>

            <Box onClick={handleUserChat} _hover={{ bg: "#c000ff36" }} cursor={"pointer"} display={"flex"} background={"#242426"} padding={"2"} borderRadius={"8px"} marginBottom={"10px"}>
                <Center>

                    <Avatar
                        background={"#935dbd"}
                        size='md'
                        name={user.name}
                    // src='https://bit.ly/prosper-baba'
                    />
                </Center>

                <Box width={"10rem"} fontFamily={"sans-serif"} paddingLeft={"3"}>

                    <Box overflow={"hidden"}>
                        <Text marginTop={"1"} fontWeight='bold' fontSize={"lg"}>{user.name}</Text>
                    </Box>

                    <Box height={"1.5rem"} overflow={"hidden"}>
                        <Text overflow={"hidden"} fontSize='sm'>{user.email}</Text>
                    </Box>

                </Box>
            </Box>



            
        </>
    )
}

export default UsersChatList