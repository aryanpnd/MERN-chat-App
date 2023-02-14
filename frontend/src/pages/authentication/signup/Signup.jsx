import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    InputRightElement,
    InputGroup

} from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { Logo } from './Logo'
import { OAuthButtonGroup } from './OAuthButtonGroup'
import { PasswordField } from './PasswordField'
import { useToast } from '@chakra-ui/react'



export const Signup = () => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [pic, setPic] = useState()
    const [loading, setLoading] = useState(false)
    const toast = useToast()


    const handleClick = () => setShow(!show)

    const postDetails = async (pics) => {
        setLoading(true)
        if (pics === undefined) {
            toast({
                title: 'Error Occurred !!',
                description: "Please select an image !",
                status: 'warning',
                duration: 9000,
                isClosable: true,
            })
            return
        }
        if (pics.type === "image/jpeg" || pics.type === "image/png"){
            const data = new FormData()
            data.append("files",pics)
            data.append("upload_preset","mernChatApp")
            data.append("cloud_name","dnoycwhjx")
            console.log(data)
            console.log("fetched")
            
            try{
                const res = await axios.post("https://api.cloudinary.com/v1_1/dnoycwhjx",{data})
                if(!res.ok){
                    console.log(`ERROR: ${res}`)
                }
                // const data1 = res.data
                // console.log(data1)

            }
            catch(e){
                console.log(e)
            }
            // fetch("https://api.cloudinary.com/v1_1/dnoycwhjx",{
            //     method:'post',
            //     body:data,

            // }).then((res)=>res.json()).then((data)=>{
            //     setPic(data.url.toString());
            //     setLoading(false)
            // })
        }else{
            toast({
                title: 'Error Occurred !!',
                description: "Please select an image !",
                status: 'warning',
                duration: 9000,
                isClosable: true,
            })
            setLoading(false)
            return;
        }
    }

    const submitHandler = () => { }

    return (
        <Container
            py={{
                base: '12',
                md: '10',
            }}
            px={{
                base: '0',
                sm: '8',
            }}
        >
            <Stack spacing="8">
                <Stack spacing="6">
                    <Logo />
                    <Stack
                        spacing={{
                            base: '2',
                            md: '3',
                        }}
                        textAlign="center"
                    >
                        <Heading
                            size={{
                                base: 'lg',
                                md: 'lg',
                            }}
                        >
                            Create a new account
                        </Heading>

                    </Stack>
                </Stack>
                <Box
                    py={{
                        base: '0',
                        sm: '8',
                    }}
                    px={{
                        base: '4',
                        sm: '10',
                    }}
                    bg={{
                        base: 'transparent',
                        sm: 'bg-surface',
                    }}
                    boxShadow={{
                        base: 'none',
                        sm: 'xl',
                    }}
                    borderRadius={{
                        base: 'none',
                        sm: 'xl',
                    }}
                >
                    <Stack spacing="6" d="flex" >
                        <Stack spacing="5" >
                            <FormControl d="flex">
                                <FormLabel htmlFor="email">Name</FormLabel>
                                <Input id="text" type="name" />
                            </FormControl>
                            <FormControl d="flex">
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input id="email" type="email" />
                            </FormControl>

                            <FormControl d="flex">
                                <FormLabel htmlFor="email">Password</FormLabel>
                                <InputGroup size='md'>
                                    <Input
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Enter password'
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                            {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>

                            <FormControl d="flex">
                                <FormLabel htmlFor="email">Confirm Password</FormLabel>
                                <InputGroup size='md'>
                                    <Input
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Enter password'
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                            {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>

                            <FormControl d="flex">
                                <FormLabel htmlFor="email">Upload a profile Picture</FormLabel>
                                <Input padding={1} pr='4.5rem' type={'file'} accept="image/*"
                                    onChange={(e) => postDetails(e.target.files[0])} />
                            </FormControl>

                        </Stack>
                        <Stack spacing="6">
                            <Button  colorScheme='teal'>Sign Up</Button>

                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    )

}