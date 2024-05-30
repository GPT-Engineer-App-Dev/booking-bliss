import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Index = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" mb={4}>Travel Booking</Heading>
        <Text fontSize="lg" textAlign="center">Book your flights, hotels, and car rentals all in one place.</Text>
        <Box display="flex" justifyContent="space-around" width="100%" mt={8}>
          <Button leftIcon={<FaPlane />} colorScheme="teal" variant="solid" size="lg" onClick={() => navigate('/flight-search')}>
            Book Flights
          </Button>
          <Button leftIcon={<FaHotel />} colorScheme="teal" variant="solid" size="lg">
            Book Hotels
          </Button>
          <Button leftIcon={<FaCar />} colorScheme="teal" variant="solid" size="lg">
            Rent Cars
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;