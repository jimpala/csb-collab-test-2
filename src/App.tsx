import React from "react";
import { Flex, Heading, Box } from "@chakra-ui/react";

const App: React.FunctionComponent = () => {
  return (
    <Flex
      w="100%"
      h="100vh"
      flexDir="column"
      justify="center"
      align="center"
      backgroundColor="blue.800"
    >
      <Box backgroundColor="black" borderRadius="lg" p="6">
        <Heading color="white" fontWeight="light">
          Let's get building...
        </Heading>
      </Box>
    </Flex>
  );
};

export default App;
