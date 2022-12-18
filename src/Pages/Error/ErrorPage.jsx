import { Box, Heading, Text } from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';

export default function ErrorPage() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <WarningTwoIcon boxSize={'50px'} color={'orange.300'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        404 Not Found
      </Heading>
      <Text color={'gray.500'} textAlign={"center"}>
        Server Error. Could not serve your request
      </Text>
      <Text color={'gray.700'} textAlign={"center"}>
        Please try again in sometime.  
      </Text>
    </Box>
  );
}