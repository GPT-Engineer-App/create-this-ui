import { Container, Text, VStack, Box, Image, Flex, RadioGroup, Radio, Stack, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Button, Tabs, TabList, Tab, TabPanels, TabPanel, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [deliveryFee, setDeliveryFee] = useState(3);

  return (
    <Container maxW="container.xl" p={4}>
      {/* Header Section */}
      <Flex justify="space-between" align="center" mb={4}>
        <Image src="/images/logo.png" alt="Logo" boxSize="100px" />
        <Image src="/images/profile.png" alt="Profile" boxSize="50px" borderRadius="full" />
      </Flex>

      <Flex>
        {/* Filter Sidebar */}
        <Box w="20%" p={4} bg="gray.100" borderRadius="md">
          <Text fontSize="xl" mb={4}>Popular near you</Text>
          <RadioGroup defaultValue="1">
            <Stack direction="column">
              <Radio value="1">Picked for you (default)</Radio>
              <Radio value="2">Most Popular</Radio>
              <Radio value="3">Rating</Radio>
              <Radio value="4">Delivery time</Radio>
            </Stack>
          </RadioGroup>

          <Text fontSize="xl" mt={6} mb={4}>Price Range</Text>
          <Stack direction="row" spacing={4}>
            <Button>$</Button>
            <Button>$$</Button>
            <Button>$$$</Button>
            <Button>$$$$</Button>
          </Stack>

          <Text fontSize="xl" mt={6} mb={4}>Max Delivery Fee</Text>
          <Slider defaultValue={3} min={1} max={5} step={1} onChange={(val) => setDeliveryFee(val)}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6}>
              <Box color="tomato" />
            </SliderThumb>
          </Slider>
          <Text mt={2}>${deliveryFee}</Text>

          <Text fontSize="xl" mt={6} mb={4}>Dietary</Text>
          <Stack direction="row" spacing={4}>
            <Button>Vegetarian</Button>
            <Button>Vegan</Button>
            <Button>Gluten-free</Button>
            <Button>Halal</Button>
          </Stack>
        </Box>

        {/* Main Content Area */}
        <Box w="80%" p={4}>
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList>
              <Tab>Delivery</Tab>
              <Tab>Pickup</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Flex justify="space-between" align="center" mb={4}>
                  <Text fontSize="xl">Auckland, New Zealand... Now</Text>
                  <Button>Change</Button>
                </Flex>

                <Text fontSize="2xl" mb={4}>Popular near you</Text>
                <SimpleGrid columns={3} spacing={4}>
                  <Box>
                    <Image src="https://via.placeholder.com/150" alt="Popular Place 1" borderRadius="md" />
                    <Text>The Café Club (Stoddard Road)</Text>
                    <Text>$4.99 Delivery Fee</Text>
                  </Box>
                  <Box>
                    <Image src="https://via.placeholder.com/150" alt="Popular Place 2" borderRadius="md" />
                    <Text>Mcdonald's (Dominion Rd)</Text>
                    <Text>$2.99 Delivery Fee</Text>
                  </Box>
                  <Box>
                    <Image src="https://via.placeholder.com/150" alt="Popular Place 3" borderRadius="md" />
                    <Text>Always Urban Thai</Text>
                    <Text>$1.99 Delivery Fee</Text>
                  </Box>
                </SimpleGrid>

                <Text fontSize="2xl" mt={6} mb={4}>Explore by category</Text>
                <SimpleGrid columns={3} spacing={4}>
                  <Button>Breakfast and Brunch</Button>
                  <Button>Fast Food</Button>
                  <Button>Coffee and Tea</Button>
                  <Button>Latest Deals</Button>
                  <Button>Highest Rated</Button>
                  <Button>Japanese</Button>
                </SimpleGrid>

                <Text fontSize="2xl" mt={6} mb={4}>Recently Ordered</Text>
                <SimpleGrid columns={3} spacing={4}>
                  <Box>
                    <Image src="https://via.placeholder.com/150" alt="Recently Ordered 1" borderRadius="md" />
                    <Text>Item 1</Text>
                  </Box>
                  <Box>
                    <Image src="https://via.placeholder.com/150" alt="Recently Ordered 2" borderRadius="md" />
                    <Text>Item 2</Text>
                  </Box>
                  <Box>
                    <Image src="https://via.placeholder.com/150" alt="Recently Ordered 3" borderRadius="md" />
                    <Text>Item 3</Text>
                  </Box>
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <Text>Pickup content goes here...</Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;