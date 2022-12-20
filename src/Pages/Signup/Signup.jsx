import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import "./Signin.css"
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom'; 

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [alert, setAlert] = useState(false);   
    const nav = useNavigate()

    const handleSubmit = async () => {
        let a = first;
        let b = last;
        let c = email;
        let d = pass;
        let obj = {
            id: Date.now(),
            first_name: a,
            last_name: b,
            email: c,
            password: d
        }
        if (a == "" || b == "" || c == "" || d == "") {
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 2000); 
        } 
        else {
            let res = await fetch(`http://localhost:8080/user`,
                {
                    method: "POST",
                    body: JSON.stringify(obj),
                    headers: { "Content-Type": "application/json", }
                })
            let data = await res.json(); 
            nav("/signin")
        } 
    }

    return (
        <>
            {alert ? (
                <div className="wrong">
                    <h1> Please fill all info... </h1>
                </div>
            ) : (
                <></>
            )}
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Sign up
                        </Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool features ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <HStack>
                                <Box>
                                    <FormControl id="firstName" isRequired>
                                        <FormLabel>First Name</FormLabel>
                                        <Input type="text" value={first} onChange={(e) => { setFirst(e.target.value) }} />
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="lastName">
                                        <FormLabel>Last Name</FormLabel>
                                        <Input type="text" value={last} onChange={(e) => { setLast(e.target.value) }} />
                                    </FormControl>
                                </Box>
                            </HStack>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input type={showPassword ? 'text' : 'password'} value={pass} onChange={(e) => { setPass(e.target.value) }} />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                            }>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={10} pt={2}>
                                <Button
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={'blue.400'}
                                    onClick={handleSubmit}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Sign up
                                </Button>
                            </Stack>
                            <Stack pt={6}>
                                <Text align={'center'}>
                                    Already a user? <Link color={'blue.400'} to="/signin" >Login</Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
}