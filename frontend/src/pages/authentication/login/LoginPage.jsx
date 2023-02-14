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

} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { OAuthButtonGroup } from './OAuthButtonGroup'
import { PasswordField } from './PasswordField'

export const LoginPage = () => {
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
                                <Input id="email" type="email" />
                            </FormControl>
                            <PasswordField />
                        </Stack>
                        <HStack justify="space-between">
                            <Checkbox defaultChecked>Remember me</Checkbox>
                            <Button variant="link" colorScheme="blue" size="sm">
                                Forgot password?
                            </Button>
                        </HStack>
                        <Stack spacing="6">
                            <Button  colorScheme='teal'>Sign in</Button>
                            <Button colorScheme='blue'>Get Guest User Token</Button>
                            <HStack>
                                <Divider /> 
                                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                                    or continue with   
                                </Text>
                                <Divider />
                            </HStack>

                            <OAuthButtonGroup />
                        </Stack>
                        <HStack spacing="1" justify="center">
                            <Text color="muted">Don't have an account?</Text>
                            <Button  variant="link" colorScheme="blue">
                                <Link to="/signup">Sign Up</Link>
                            </Button>
                        </HStack>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    )

}