import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import "./Signin.css";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function Signin() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    async function detail() {
      let res = await fetch(`http://localhost:8080/user`);
      let x = await res.json();
      setData(x);
    }
    detail(); 
  }, []);

  const handleCheck = () => {
    let num = false;
    data.map((e) => {
      if (e.email == email && e.password == pass) {
        num = true;
        return true;
      }
    });
    if (num == true) {
      return <Navigate to="/" />;
    } else {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000); 
      console.log(num);
    }
  };

  return (
    <>
      {alert ? (
        <div className="wrong">
          <h1> Filled Wrong info... </h1>
        </div>
      ) : (
        <></>
      )} 
      <Flex
        minH={"80vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"xl"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"5xl"}>Sign in to your account</Heading>
            <Text fontSize={"xl"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️  
            </Text> 
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  onClick={handleCheck}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
              <Text align={"center"}>
                Don't have an account?{" "}
                <Link color={"blue.400"} to="/signup">
                  {" "}
                  Sign up{" "}
                </Link>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
