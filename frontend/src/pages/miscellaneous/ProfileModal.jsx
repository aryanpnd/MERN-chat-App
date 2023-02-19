import { Avatar, AvatarBadge, Box, Button, Center, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { ChatState } from '../../Context/ChatProvider'

function ProfileModal() {
    const { user, setUser } = ChatState()
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
          <>
            <span onClick={onOpen}><i className="fa-solid fa-user"></i>Profile</span>
      
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent background={"#252326"} color={"whiteAlpha.700"}>
                <ModalHeader>Your Profile</ModalHeader>

                <ModalCloseButton />

                <ModalBody>
                    <Box>
                        <Center><Avatar size='2xl' name={user.name}>
                        <AvatarBadge border={"2px"} size='md' boxSize='0.9em' bg='green.500' />
                            </Avatar></Center>
                 <Center> 
                    <Box>

                    <Center marginTop={"5"}><h1 style={{marginRight:"20px",fontWeight:"bolder"}} >{user.name}</h1> <i class="fa-solid fa-pen-to-square"></i></Center>

                    <Center marginTop={"3"}><h1 style={{marginRight:"20px",fontWeight:"bolder"}} >{user.email}</h1> <i class="fa-solid fa-pen-to-square"></i></Center>
                    </Box>
                    </Center>
                        
                    </Box>

                </ModalBody>
      
                <ModalFooter>
                  <Button background={"#7d43a9"} _hover={{ bg: '#9578f1d1' }} _focus={{ bg: '#9578f1a3' }} mr={3} onClick={onClose}>
                    Close
                  </Button>
                  {/* <Button variant='ghost'>Secondary Action</Button> */}
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
}

export default ProfileModal