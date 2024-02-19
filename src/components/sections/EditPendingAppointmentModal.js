import React, { useState, useEffect } from "react";
import CalenderIcon from "../../assets/CalenderIcon.svg";
import DatePicker from "react-datepicker";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  useToast,
  Box,
  Image,
  Flex,
  Input,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import axios from "axios";

const EditPendingAppointment = ({
  isOpen,
  onClose,
  appointmentDetails,
  onSubmit,
}) => {
  const toast = useToast();
  const [formData, setFormData] = useState(appointmentDetails);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

  console.log("Data", formData)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  useEffect(() => {
    setFormData(appointmentDetails);
  }, [appointmentDetails]);


  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
    setFormData({ ...formData, startDate: date });
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
    setFormData({ ...formData, endDate: date });
  };

  const handleConfirmationCancel = () => {
    setConfirmationModalOpen(false);
  };

  const formatDateToUTC = (selectedDate) => {
    if (!selectedDate) return "";

    if (isNaN(new Date(selectedDate))) {
      console.error("Invalid date:", selectedDate);
      return "";
    }

    // Add one day to the selected date
    const adjustedDate = new Date(selectedDate);
    adjustedDate.setDate(adjustedDate.getDate() + 1);

    return adjustedDate.toISOString().split("T")[0];
  };

  const handleConfirmationConfirm = async () => {
    try {
      const token = localStorage.getItem("token");

      const formatDateWithDayAdjustment = (selectedDate) =>
        formatDateToUTC(new Date(selectedDate));

      const formDataWithDates = {
        ...formData,
        startDate: formatDateWithDayAdjustment(formData.startDate),
        endDate: formatDateWithDayAdjustment(formData.endDate),
      };

      const requestBody = formDataWithDates;

      const response = await axios.post(
        `http://localhost:8080/v1/appointment/editAppointmentDetails/${formData.id}`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        toast({
          title: "Appointment changed successfully",
          status: "success",
          duration: 6000,
        });
        onClose();
      } else {
        console.error("Error updating appointment details");
        const errorMessage = response.data
          ? response.data.message
          : "Unknown error";
        toast({
          title: "Update failed",
          description: errorMessage,
          status: "error",
          duration: 6000,
        });
      }
    } catch (error) {
      console.error("Error updating appointment details:", error);
    } finally {
      setConfirmationModalOpen(false);
    }
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();

    setConfirmationModalOpen(true);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reschedule Pending Appointment</ModalHeader>
          <ModalBody>
            <Box marginLeft="55px">
              <Box w="270px">
                <FormLabel fontWeight="bold" marginTop="20px">
                  Start Date
                </FormLabel>
                <Flex
                  h="6vh"
                  padding="5px"
                  paddingLeft="15px"
                  style={{ border: "1px solid #ccc", borderRadius: "5px" }}
                >
                  <DatePicker
                    selected={selectedStartDate}
                    onChange={handleStartDateChange}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    dateFormat="dd-MM-yyyy"
                    placeholderText="preferred date to start"
                    className="form-control"
                    minDate={new Date()}
                    value={formData?.startDate}
                  />
                  <Image
                    marginLeft="30px"
                    w="24px"
                    h="24px"
                    src={CalenderIcon}
                    alt="CalenderIcon"
                  />
                </Flex>
              </Box>
              <Box w="270px">
                <FormLabel fontWeight="bold" marginTop="20px">
                  End Date
                </FormLabel>
                <Flex
                  h="6vh"
                  padding="5px"
                  paddingLeft="15px"
                  style={{ border: "1px solid #ccc", borderRadius: "5px" }}
                >
                  <DatePicker
                    selected={selectedEndDate}
                    onChange={handleEndDateChange}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    dateFormat="dd-MM-yyyy"
                    placeholderText="preferred date to end"
                    className="form-control"
                    minDate={new Date()}
                    style={{ border: "none" }}
                    value={formData?.endDate}
                  />
                  <Image
                    marginLeft="30px"
                    w="24px"
                    h="24px"
                    src={CalenderIcon}
                    alt="CalenderIcon"
                  />
                </Flex>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              color="white"
              bg="#A210C6"
              mr={3}
              onClick={handleSaveChanges}
            >
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Confirmation Modal */}
      <AlertDialog
        isOpen={isConfirmationModalOpen}
        onClose={handleConfirmationCancel}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Confirm Save Changes
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to reschedule this appointment?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={handleConfirmationCancel}>Cancel</Button>
              <Button
                bg="#A210C6"
                color="white"
                onClick={handleConfirmationConfirm}
                ml={3}
              >
                Confirm
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default EditPendingAppointment;
