import { Container, VStack, Heading, Box, Text, Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state;

  const handleConfirmBooking = () => {
    // Mock confirmation logic
    alert("Booking confirmed!");
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} width="100%">
        <Heading as="h1" size="xl">Booking Confirmation</Heading>
        <Box width="100%" p={4} borderWidth="1px" borderRadius="lg">
          <Text fontSize="lg" fontWeight="bold">Booking Details</Text>
          <Text>Flight: {bookingDetails.flight}</Text>
          <Text>From: {bookingDetails.from}</Text>
          <Text>To: {bookingDetails.to}</Text>
          <Text>Date: {bookingDetails.date}</Text>
          <Text>Price: {bookingDetails.price}</Text>
        </Box>
        <Button colorScheme="teal" size="lg" onClick={handleConfirmBooking}>
          Confirm Booking
        </Button>
      </VStack>
    </Container>
  );
};

export default BookingConfirmation;