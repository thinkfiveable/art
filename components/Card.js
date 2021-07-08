import Link from "next/link";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Card({
  projectThumbnail,
  projectName,
  studentName,
  projectUrl,
}) {
  return (
    <div>
      <Box borderRadius="xl" overflow="hidden" borderWidth="1px" m={[1, 2, 4]}>
        <Image src={projectThumbnail} alt="image" w="full" bg="gray.400" />
        <Box px={4} py={6} bg="white">
          <Text fontSize="2xl" fontWeight="bold">
            {projectName}
          </Text>
          <Text>by {studentName}</Text>
          <Link href={projectUrl}>
            <a target="_blank" rel="noreferrer">
              <Button variant="solid" rightIcon={<ExternalLinkIcon />} mt={2}>
                See more
              </Button>
            </a>
          </Link>
        </Box>
      </Box>
    </div>
  );
}
