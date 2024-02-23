import React, { useState, useEffect } from "react";
import { CheckIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Box,
  Flex,
  Button,
  Divider,
  Link,
  ModalBody,
  ModalCloseButton,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import BookAppointmentModal from "../sections/BookAppointment";
const ElderlyCareModal = ({ isOpen, onClose }) => {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  const handleCloseAppointmentModal = () => {
    setShowAppointmentModal(false);
  };

  const handleOpenAppointmentModal = () => {
    setShowAppointmentModal(true);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl">
      <ModalOverlay />
      <ModalContent marginTop="30px">
        <ModalHeader textAlign="center">ELDERLY CARE</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight="bold" textAlign="center" color="#A210C6">
            STANDARD ALL-INCLUSIVE CARE FOR AGED PEOPLE OVER 60 YEARS OLD.
          </Text>

          <Flex
            marginBottom="30px"
            marginTop="50px"
            marginLeft="8px"
            alignItems="center"
          >
            <Box
              borderColor="#A210C6"
              borderRadius="10px"
              style={{
                cursor: "pointer",
                boxShadow: "0px 4px 8px rgba(162, 16, 198, 0.4)",
                transition: "transform 0.3s ease-in-out",
              }}
              w="40vw"
              h="64vh"
              marginTop="10px"
              _hover={{
                transform: "translateY(-10px)",
              }}
            >
              <Text
                color="black"
                fontWeight="bold"
                marginTop="20px"
                textAlign="center"
              >
                8 Hours Daily (5 days a week for a month)
              </Text>
              <Text
                color="black"
                marginTop="5px"
                textAlign="center"
                fontStyle="italic"
                fontSize="16px"
              >
                Provided by a Nurse Assistant
              </Text>
              <Divider my={1} borderColor="black.500" />
              <Text ml="15px" fontSize="16px" mt="5px">
                Comprehensive nursing care for elderly individuals, focusing on
                their unique needs and promoting overall well-being.
              </Text>
              <Flex mt="15px" direction="column">
                <Box ml="20px" fontSize="16px">
                  <Text>- Vital signs check</Text>
                  <Text>- Serving/feeding food</Text>
                  <Text>- Blood sugar monitoring</Text>
                  <Text>- Serving of medication</Text>
                  <Text>- Assistance with daily activities</Text>
                  <Text>- Wound dressing/Wound care (where applicable)</Text>
                  <Text>- Emotional and companionship support</Text>
                </Box>
              </Flex>
              <Divider my={1} borderColor="black.500" />
              <Flex justifyContent="space-between">
                <Flex>
                  <Text
                    color="#A210C6"
                    fontWeight="bold"
                    marginTop="10px"
                    marginLeft="20px"
                    fontSize="24px"
                  >
                    ₦120,000
                  </Text>
                </Flex>

                <Button
                  marginTop="10px"
                  borderRadius="100px"
                  fontSize="16px"
                  bg="#A210C6"
                  marginRight="20px"
                  leftIcon={<CheckIcon />}
                  color="white"
                  onClick={handleOpenAppointmentModal}
                  style={{
                    fontStyle: "italic",
                    cursor: "pointer",
                  }}
                  _hover={{ color: "" }}
                >
                  Book plan
                </Button>
              </Flex>
            </Box>

            <Box
              style={{
                cursor: "pointer",
                boxShadow: "0px 4px 8px rgba(162, 16, 198, 0.4)",
                transition: "transform 0.3s ease-in-out",
              }}
              marginTop="-10px"
              borderRadius="10px"
              marginLeft="30px"
              bg="#A210C6"
              w="40vw"
              h="64vh"
              _hover={{
                transform: "translateY(-10px)",
              }}
            >
              <Text
                color="white"
                fontWeight="bold"
                marginTop="20px"
                textAlign="center"
              >
                24 Hours Daily (30 days in a month)
              </Text>
              <Text
                color="white"
                marginTop="5px"
                textAlign="center"
                fontStyle="italic"
                fontSize="16px"
              >
                Provided by a Nurse Assistant
              </Text>
              <Divider my={1} borderColor="white" />
              <Text color="white" ml="15px" fontSize="16px" mt="5px">
                Comprehensive nursing care for elderly individuals, focusing on
                their unique needs and promoting overall well-being.
              </Text>
              <Flex mt="15px" direction="column">
                <Box color="white" ml="20px" fontSize="16px">
                  <Text>- Vital signs check</Text>
                  <Text>- Serving/feeding food</Text>
                  <Text>- Blood sugar monitoring</Text>
                  <Text>- Serving of medication</Text>
                  <Text>- Assistance with daily activities</Text>
                  <Text>- Wound dressing/Wound care (where applicable)</Text>
                  <Text>- Emotional and companionship support</Text>
                </Box>
              </Flex>
              <Divider my={1} borderColor="white" />
              <Flex justifyContent="space-between">
                <Flex>
                  <Text
                    color="white"
                    fontWeight="bold"
                    marginTop="10px"
                    marginLeft="20px"
                    fontSize="24px"
                  >
                    ₦150,000
                  </Text>
                </Flex>

                <Button
                  marginTop="10px"
                  borderRadius="100px"
                  fontSize="16px"
                  bg="white"
                  marginRight="20px"
                  leftIcon={<CheckIcon />}
                  color="#A210C6"
                  onClick={handleOpenAppointmentModal}
                  style={{
                    fontStyle: "italic",
                    cursor: "pointer",
                  }}
                  _hover={{ color: "#A210C6" }}
                >
                  Book plan
                </Button>
              </Flex>
            </Box>
          </Flex>
          <Flex
            marginBottom="30px"
            marginTop="50px"
            marginLeft="8px"
            alignItems="center"
          >
            <Box
              borderColor="#A210C6"
              borderRadius="10px"
              style={{
                cursor: "pointer",
                boxShadow: "0px 4px 8px rgba(162, 16, 198, 0.4)",
                transition: "transform 0.3s ease-in-out",
              }}
              marginTop="10px"
              w="40vw"
              h="64vh"
              _hover={{
                transform: "translateY(-10px)",
              }}
            >
              <Text
                color="black"
                fontWeight="bold"
                marginTop="20px"
                textAlign="center"
              >
                8 Hours Daily (5 days a week for a month)
              </Text>
              <Text
                color="black"
                marginTop="5px"
                textAlign="center"
                fontStyle="italic"
                fontSize="16px"
              >
                Provided by a Licensed Nurse
              </Text>
              <Divider my={1} borderColor="black.500" />
              <Text ml="15px" fontSize="16px" mt="5px">
                Comprehensive nursing care for elderly individuals, focusing on
                their unique needs and promoting overall well-being.
              </Text>
              <Flex mt="15px" direction="column">
                <Box ml="20px" fontSize="16px">
                  <Text>- Vital signs check</Text>
                  <Text>- Serving/feeding food</Text>
                  <Text>- Blood sugar monitoring</Text>
                  <Text>- Serving of medication</Text>
                  <Text>- Assistance with daily activities</Text>
                  <Text>- Wound dressing/Wound care (where applicable)</Text>
                  <Text>- Emotional and companionship support</Text>
                </Box>
              </Flex>
              <Divider my={1} borderColor="black.500" />
              <Flex justifyContent="space-between">
                <Flex>
                  <Text
                    color="#A210C6"
                    fontWeight="bold"
                    marginTop="10px"
                    marginLeft="20px"
                    fontSize="24px"
                  >
                    ₦180,000
                  </Text>
                </Flex>

                <Button
                  marginTop="10px"
                  borderRadius="100px"
                  fontSize="16px"
                  bg="#A210C6"
                  marginRight="20px"
                  leftIcon={<CheckIcon />}
                  color="white"
                  onClick={handleOpenAppointmentModal}
                  style={{
                    fontStyle: "italic",
                    cursor: "pointer",
                  }}
                  _hover={{ color: "" }}
                >
                  Book plan
                </Button>
              </Flex>
            </Box>

            <Box
              style={{
                cursor: "pointer",
                boxShadow: "0px 4px 8px rgba(162, 16, 198, 0.4)",
                transition: "transform 0.3s ease-in-out",
              }}
              marginTop="-10px"
              borderRadius="10px"
              marginLeft="30px"
              bg="#A210C6"
              w="40vw"
              h="64vh"
              _hover={{
                transform: "translateY(-10px)",
              }}
            >
              <Text
                color="white"
                fontWeight="bold"
                marginTop="20px"
                textAlign="center"
              >
                24 Hours Daily (30 days in a month)
              </Text>
              <Text
                color="white"
                marginTop="5px"
                textAlign="center"
                fontStyle="italic"
                fontSize="16px"
              >
                Provided by a Licensed Nurse
              </Text>
              <Divider my={1} borderColor="white" />
              <Text color="white" ml="15px" fontSize="16px" mt="5px">
                Comprehensive nursing care for elderly individuals, focusing on
                their unique needs and promoting overall well-being.
              </Text>
              <Flex mt="15px" direction="column">
                <Box color="white" ml="20px" fontSize="16px">
                  <Text>- Vital signs check</Text>
                  <Text>- Serving/feeding food</Text>
                  <Text>- Blood sugar monitoring</Text>
                  <Text>- Serving of medication</Text>
                  <Text>- Assistance with daily activities</Text>
                  <Text>- Wound dressing/Wound care (where applicable)</Text>
                  <Text>- Emotional and companionship support</Text>
                </Box>
              </Flex>
              <Divider my={1} borderColor="white" />
              <Flex justifyContent="space-between">
                <Flex>
                  <Text
                    color="white"
                    fontWeight="bold"
                    marginTop="10px"
                    marginLeft="20px"
                    fontSize="24px"
                  >
                    ₦220,000
                  </Text>
                </Flex>

                <Button
                  marginTop="10px"
                  borderRadius="100px"
                  fontSize="16px"
                  bg="white"
                  marginRight="20px"
                  leftIcon={<CheckIcon />}
                  color="#A210C6"
                  onClick={handleOpenAppointmentModal}
                  style={{
                    fontStyle: "italic",
                    cursor: "pointer",
                  }}
                  _hover={{ color: "#A210C6" }}
                >
                  Book plan
                </Button>
              </Flex>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
      <BookAppointmentModal
        isOpen={showAppointmentModal}
        onClose={handleCloseAppointmentModal}
      />
    </Modal>
  );
};

export default ElderlyCareModal;
