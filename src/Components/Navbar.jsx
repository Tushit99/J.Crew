import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  // useBreakpointValue,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';
import Logo from "../Image/mylogo.png" 

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex> 
        
        <Flex flex={{ base: 1 }} alignItems={"center"} justify={{ base: 'center', md: 'start' }}>
          {/* <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            Logo
          </Text> */} 
          <Link to="/">
            <Image w={{sm:"80px", lg:"100px", xl:"140px"}} src={Logo} alt="Logo" />
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Sign In
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                to={navItem.to}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {/* nave name */}
                {navItem.label} 4
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, to, subLabel }) => {
  return ( 
    <Link
      to={to} 
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50'), textDecoration: 'underline' }}>
      <Stack direction={'row'} align={'center'}> 
        <Box>
          <Text
            transition={'all .3s ease'}
            fontWeight={500}>
            {/* name options list */}
            {label} 2
          </Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          opacity={0}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, to }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        to={to}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon} 
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child,i) => (
              <Link key={i} py={2} to={child.to}> 
                {child.label} 
              </Link> 
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

// interface NavItem {
//   label: string;
//   subLabel?: string; 
//   children?: Array<NavItem>;
//   href?: string;
// }  

const NAV_ITEMS = [
  {
    label: 'Gifts',
    to:'/', 
    children: [
      {
        label: 'For Men',
        to:'/' ,
      },
      {
        label: 'For Women',
        to:'/' ,
      },
      {
        label: 'For boys',
        to:'/' ,
      },
      {
        label: 'For Girls',
        to:'/' ,
      },
      {
        label: 'For Kids',
        to:'/' ,
      },
    ],
  },
  {
    label: 'Women', 
    to:'/',  
    children: [
      {
        label: 'Best Sellers',
        to:'/',
      },
      {
        label: 'Over 60% Off',
        to:'/',
      },
      {
        label: 'Shop All',
        to:'/',
      },
    ],
  },
  {
    label: 'Men', 
    to:'/', 
    children: [
      {
        label: 'Best Sellers',
        to:'/',
      },
      {
        label: 'Over 60% Off',
        to:'/',
      },
      {
        label: 'Shop All',
        to:'/',
      },
    ],
  },
  {
    label: 'Girls',
    to:'/', 
    children: [
      {
        label: 'Best Sellers',
        to:'/',
      },
      {
        label: 'Over 60% Off',
        to:'/',
      },
      {
        label: 'Shop All',
        to:'/',
      },
    ],
  },
  {
    label: 'Boys', 
    to:'/', 
    children: [
      {
        label: 'Best Sellers',
        to:'/', 
      },
      {
        label: 'Over 60% Off',
        to:'/', 
      },
      {
        label: 'Shop All',
        to:'/', 
      },
    ],
  },
];

