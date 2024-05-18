import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <Box bg="gray.800" color="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>My Website</Box>
        <Flex alignItems="center">
          <RouterLink to="/">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
              Home
            </Link>
          </RouterLink>
          {}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navigation;
