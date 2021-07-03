import Link from "next/link";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Card() {
  return (
    <div>
      <Box borderRadius="lg" borderWidth="1px" m={[1, 2, 4]}>
        <Image
          src="https://citro.tech/zoom/hyper-dino-wave.gif"
          alt="image"
          w="full"
        />
        <Box px={4} py={6}>
          <Text fontSize="2xl" fontWeight="bold">
            Project name
          </Text>
          <Text>by Student Name</Text>
          <Button variant="solid" rightIcon={<ExternalLinkIcon />} mt={2}>
            See more
          </Button>
        </Box>
      </Box>
    </div>
  );
}
