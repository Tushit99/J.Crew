import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    Image,
    Input,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react'; 
import "./Footer.css" 
import Logo from "../Image/mylogo.png"; 
import Logo2 from "../Image/mylogo2.png"; 


const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() { 
    const { colorMode } = useColorMode()

    return (
        <Box >
            <Container as={Stack} maxW={'8xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <ListHeader>Help</ListHeader>
                        <Link href={'#'}>Overview</Link>
                        <Link href={'#'}>Customer Service</Link>
                        <Stack direction={'row'} align={'center'} spacing={2}>
                            <Link href={'#'}>Track Order</Link>
                            <Tag
                                size={'sm'}
                                // bg={useColorModeValue('green.300', 'green.800')}
                                ml={2}
                                // color={'white'}
                                >
                                New
                            </Tag>
                        </Stack>
                        <Link href={'#'}>Returns & Exchanges</Link>
                        <Link href={'#'}>Shipping</Link>
                        <Link href={'#'}>International Orders</Link>
                        <Link href={'#'}>Contact Us</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Quick Links</ListHeader>
                        <Link href={'#'}>Find a Store</Link>
                        <Link href={'#'}>Size Charts</Link>
                        <Link href={'#'}>Refer a Friend</Link>
                        <Link href={'#'}>Offers & Promotions</Link>
                        <Link href={'#'}>My Favorites</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>About J.Crew</ListHeader>
                        <Link href={'#'}>Our Story</Link>
                        <Link href={'#'}>Careers</Link>
                        <Link href={'#'}>Social Responsibility</Link>
                        <Link href={'#'}>Investor Relations</Link>
                        <Link href={'#'}>Terms of Use</Link>
                        <Link href={'#'}>Privacy Policy</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Like Being First?</ListHeader>
                        {/* <Input borderColor='black.500' /> */}  
                        <input type="text" className='inpt' />
                    </Stack>
                </SimpleGrid>
            </Container>
            <Box py={10}>
                <Flex
                    align={'center'}
                    _before={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        mr: 8,
                    }}
                    _after={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        ml: 8, 
                    }}>
                    <Image 
                        h={{ base: '40px', sm: '50px', lg: '80px' }} 
                        w={{ base: '120px', sm: '120px', lg: '260px' }}
                        src={colorMode === 'light' ? `${Logo}`: `${Logo2}`}
                    /> 
                </Flex>
                <Text pt={6} fontSize={'sm'} ml={"100px"} textAlign={'left'}>
                    © 2022 FashionHolic
                </Text>
            </Box>
        </Box>
    );
}