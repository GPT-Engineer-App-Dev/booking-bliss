import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, Select, Box, Text } from "@chakra-ui/react";

const FlightSearch = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Mock search results
    const mockResults = [
      { id: 1, flight: "Flight 101", from: departure, to: arrival, date: departureDate, price: "$200" },
      { id: 2, flight: "Flight 202", from: departure, to: arrival, date: departureDate, price: "$250" },
    ];
    setResults(mockResults);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} width="100%">
        <Heading as="h1" size="xl">Search Flights</Heading>
        <FormControl id="departure">
          <FormLabel>Departure Location</FormLabel>
          <Input type="text" value={departure} onChange={(e) => setDeparture(e.target.value)} />
        </FormControl>
        <FormControl id="arrival">
          <FormLabel>Arrival Location</FormLabel>
          <Input type="text" value={arrival} onChange={(e) => setArrival(e.target.value)} />
        </FormControl>
        <FormControl id="departure-date">
          <FormLabel>Departure Date</FormLabel>
          <Input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
        </FormControl>
        <FormControl id="return-date">
          <FormLabel>Return Date</FormLabel>
          <Input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        </FormControl>
        <FormControl id="passengers">
          <FormLabel>Number of Passengers</FormLabel>
          <Select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </Select>
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleSearch}>
          Search Flights
        </Button>
        <Box width="100%" mt={8}>
          {results.length > 0 && (
            <VStack spacing={4}>
              {results.map((result) => (
                <Box key={result.id} p={4} borderWidth="1px" borderRadius="lg" width="100%">
                  <Text fontSize="lg" fontWeight="bold">{result.flight}</Text>
                  <Text>From: {result.from}</Text>
                  <Text>To: {result.to}</Text>
                  <Text>Date: {result.date}</Text>
                  <Text>Price: {result.price}</Text>
                </Box>
              ))}
            </VStack>
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default FlightSearch;