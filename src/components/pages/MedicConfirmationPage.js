import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Link as ChakraLink,
  HStack,
  Spacer,
  Image,
  extendTheme,
  ChakraProvider,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Textarea,
  Select,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import Coloredlogo from "../../assets/LogoColoured.svg";
import Done from "../../assets/MedicRegDone.svg";
import "../../styles/pages/LandingPage.css";
import logo from "../../assets/Whitelogo.png";

const customTheme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        _focus: {
          boxShadow: "none",
        },
      },
    },
  },
  fonts: {
    body: "Gill Sans MT, sans-serif",
    heading: "Gill Sans MT, sans-serif",
  },
});

const LandingPage = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleFileChange = (event) => {
    // Access the selected file using event.target.files
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    // Perform any additional logic or state updates as needed
  };

  return (
    <ChakraProvider theme={customTheme}>
      <Box overflowY="scroll" height="100vh">
        <Box overflow="hidden" alignContent="center" alignItems="center" marginTop="20px">
          <Text
            fontFamily="body"
            fontSize="36px"
            color="#A210C6"
            marginTop="45px"
          >
            And we’re done!
          </Text>
          <Image src={Done} alt="Logo" w="250px" h="250px" marginLeft="550px" marginTop="10px" />
          <Text
            fontFamily="Montserrat"
            fontSize="18px"
            color="black"
            marginTop="30px"
          >
           Your details have been received. <br></br>
           Please give us 3-5 working days to process your application. <br></br>
           A log in link would be sent to your email address shortly.
          </Text>
          <ChakraLink href="/">
            <Button
              w="250px"
              h="50px"
              bg="#A210C6"
              marginTop="20px"
              color="white"
            >
              Back to home
            </Button>
          </ChakraLink>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default LandingPage;
