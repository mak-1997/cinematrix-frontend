import React from "react";
import {
  Box,
  Container,
  Text,
  Button,
  Flex,
  Image,
  color,
  localStorageManager,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ColorContext } from "../contexts/ColorContextProvider";
import { AuthContext } from "../contexts/AuthContextProvider";

const Navbar = () => {
  const { c1, c2, c3, c4, c5, c6 } = React.useContext(ColorContext);
  const { username, setUsername, token, setToken } =
    React.useContext(AuthContext);

  const handleLogout = () => {
    setUsername("");
    setToken("");
    // localStorage.setItem("cinematrix_username",JSON.stringify(""))
    // localStorage.setItem("cinematrix_token",JSON.stringify(""))
  };

  React.useEffect(() => {
    console.log(username, token);
  }, []);

  return (
    <Flex
      justifyContent={"space-between"}
      padding={"10px"}
      alignItems={"center"}
      position="fixed"
      top="0"
      w="100%"
      bg={c3}
      zIndex={"1"}
      boxShadow={
        "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
      }
    >
      <Link to="/">
        <Text
          fontSize={"2xl"}
          as="b"
          fontStyle={"italic"}
          _hover={{ color: "white", textDecoration: "underline" }}
        >
          CineMatrix
        </Text>
      </Link>
      <Flex gap="10">
        <Link to={"/"}>
          {" "}
          <Text _hover={{ color: "white", textDecoration: "underline" }} as="b">
            {" "}
            Movies & Events{" "}
          </Text>{" "}
        </Link>
        <Link to={"/shows"}>
          {" "}
          <Text _hover={{ color: "white", textDecoration: "underline" }} as="b">
            {" "}
            Shows{" "}
          </Text>{" "}
        </Link>
      </Flex>
      <Flex gap="5" alignItems={"center"}>
        <Text as="b">
          {username == "" || username == null
            ? null
            : `Welcome, ${username?.split(" ")[0]}`}{" "}
        </Text>
        <Link to={"/user/login"}>
          <Button onClick={handleLogout}>
            {token === "" ? "Login" : "Logout"}
          </Button>
        </Link>
        <Link to={"/user/signup"}>
          <Button>Signup</Button>
        </Link>
        <Link to="/admin/login" >
          <Button colorScheme="red">Admin Login</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
