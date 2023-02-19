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
    InputGroup,
    InputRightElement

} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { OAuthButtonGroup } from './OAuthButtonGroup'
import { PasswordField } from './PasswordField'
import { useToast } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

export const LoginPage = () => {
    const history = useHistory();
    const toast = useToast()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const notEmplemented = () => {
        toast({
            title: 'Warnig!!',
            description: "This feature has not been implemented yet",
            status: 'warning',
            duration: 5000,
            isClosable: true,
            position: 'top-right',
        })
    }

    const submitHandler = async () => {
        setLoading(true);
        if (!email || !password) {
            toast({
                title: 'Warnig!!',
                description: "Please fill all the fields !",
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'top-right',
            })
            setLoading(false);
            return;
        }

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                }
            }
            const { data } = await axios.post("/api/user/login", { email, password }, config)
            toast({
                title: 'Success',
                description: "Login SuccessFull !!",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top-right',
            })
            localStorage.setItem("userInfo", JSON.stringify(data))
            setLoading(false)
            history.push('/chats')
        } catch (error) {
            toast({
                title: 'Oops!!',
                description: "Invalid Email and Password !!!",
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top-right',
            })
            setLoading(false)
        }

    }


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
                            Log in to your account
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
                    <Stack spacing="6">
                        <Stack spacing="5" >
                            <FormControl d="flex">
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input onChange={(e) => { setEmail(e.target.value) }} id="email" type="email" />
                            </FormControl>

                            <FormControl d="flex">
                                <FormLabel htmlFor="email">Password</FormLabel>
                                <InputGroup size='md'>
                                    <Input
                                        onChange={(e) => { setPassword(e.target.value) }}
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

                            {/* <PasswordField /> */}
                        </Stack>
                        <HStack justify="space-between">
                            {/* <Checkbox id='checkBox' defaultChecked>Remember me</Checkbox> */}
                            <Button variant="link" colorScheme="blue" size="sm">
                                Forgot password?
                            </Button>
                        </HStack>
                        <Stack spacing="6">
                            <Button isLoading={loading} onClick={submitHandler} colorScheme='teal'>Sign in</Button>
                            <Button onClick={notEmplemented} colorScheme='blue'>Get Guest User Token</Button>
                            <HStack>
                                <Divider />
                                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                                    or continue with
                                </Text>
                                <Divider />
                            </HStack>

                            <OAuthButtonGroup notEmplemented={notEmplemented} />
                        </Stack>
                        <HStack spacing="1" justify="center">
                            <Text color="muted">Don't have an account?</Text>
                            <Button variant="link" colorScheme="blue">
                                <Link to="/signup">Sign Up</Link>
                            </Button>
                        </HStack>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    )

}