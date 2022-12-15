import {
  Box,
  Flex,
  Text,
  IconButton, 
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  // useBreakpointValue,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import "../App.css";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  SunIcon,
  MoonIcon,
} from "@chakra-ui/icons";
import Logo from "../Image/mylogo.png";
import Logo2 from "../Image/mylogo2.png";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TheamContext } from "../Context/TheamContext";

export default function Navbar() {
  const { back, change } = useContext(TheamContext);
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div className={back ? "background" : "background2"}>
      <Box position={"fixed"} top={"0px"} left={"0px"} right={"0px"}>
        <Flex
          color={useColorModeValue("gray.600", "white")}
          minH={"50px"}
          px={{ base: 4 }}
          borderBottom={0}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>

          <Flex
            flex={{ base: 1 }}
            alignItems={"center"}
            justify={{ base: "center", md: "start" }}
          >
            <Link className="navlink" to="/">
              <Image
                w={{ sm: "80px", lg: "100px", xl: "140px" }}
                src={back ? Logo2 : Logo}
                alt={"logoIMG"}
              />
            </Link>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav back={back} />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            align={"center"}
            direction={"row"}
            spacing={6}
          >
            <button className="sign">Sign In</button>
            <button onClick={change}>
              {back ? <SunIcon /> : <MoonIcon />}
            </button>
            <button>
              <Link to="/cart" className="navlink">
                <BsBag />
              </Link>
            </button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </div>
  );
}

const DesktopNav = () => {
  const { back } = useContext(TheamContext);

  return (
    <Stack direction={"row"} spacing={2}>
      {NAV_ITEMS.map((navItem,i) => (
        <Box key={i}> 
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link to={navItem.to} className="navlink">
                {/* nave name =========== */}
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={"0px"}
                borderRadius={"0px"}
                boxShadow={"xl"}
                bg={back ? "black" : "white"}
                p={4}
                minW={"sm"}
              >
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

const DesktopSubNav = ({ label, to }) => { 
  return (
    <Link to={to} className="navlink">
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text transition={"all .3s ease"} fontWeight={500}>
            {/* name options list ========= */}
            {label}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          opacity={0}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        ></Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
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
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child, i) => (
              <Link key={i} className="navlink" to={child.to}>
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
    label: "Gifts",
    to: "/",
    children: [
      {
        label: "For Men",
        to: "/formen",
      },
      {
        label: "For Women",
        to: "/forwomen",
      },
      {
        label: "For boys",
        to: "/forboys",
      },
      {
        label: "For Girls",
        to: "/forgirl",
      } 
    ],
  },
  {
    label: "Women",
    to: "/",
    children: [
      {
        label: "Best Sellers",
        to: "/",
      },
      {
        label: "Over 60% Off",
        to: "/",
      },
      {
        label: "Shop All",
        to: "/",
      },
    ],
  },
  {
    label: "Men",
    to: "/",
    children: [
      {
        label: "Best Sellers",
        to: "/",
      },
      {
        label: "Over 60% Off",
        to: "/",
      },
      {
        label: "Shop All",
        to: "/",
      },
    ],
  },
  {
    label: "Girls",
    to: "/",
    children: [
      {
        label: "Best Sellers",
        to: "/",
      },
      {
        label: "Over 60% Off",
        to: "/",
      },
      {
        label: "Shop All",
        to: "/",
      },
    ],
  },
  {
    label: "Boys",
    to: "/",
    children: [
      {
        label: "Best Sellers",
        to: "/",
      },
      {
        label: "Over 60% Off",
        to: "/",
      },
      {
        label: "Shop All",
        to: "/",
      },
    ],
  },
];
