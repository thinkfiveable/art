import Meta from "../components/Meta";
import Link from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import { useEffect } from "react";
import Masonry from "react-masonry-css";
import styles from "../styles/Home.module.css";
import { Heading, Box, Text, Container, Button, Image } from "@chakra-ui/react";

export default function Anthology() {
  let data = useSWR("/api/anthology", fetcher).data;
  useEffect(() => {
    console.log(data);
  });
  return (
    <div>
      <Meta />
      <main>
        <Container
          pt={8}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Heading textAlign="center" fontSize="6xl">
            Creative Writing Anthology
          </Heading>
        </Container>
        <Masonry
          breakpointCols={{
            default: 3,
            1024: 3,
            640: 2,
            480: 1,
          }}
          className={styles.masonry}
          columnClassName=""
        >
          {data?.map(
            (project) =>
              project.approve && (
                <Card
                  key={project.id}
                  projectThumbnail={project.thumbnail[0].url}
                  projectName={project.title}
                  studentName={project.name}
                  projectUrl={project.link}
                />
              )
          )}
        </Masonry>
      </main>
    </div>
  );
}

function Card({ projectThumbnail, projectName, studentName, projectUrl }) {
  return (
    <div>
      <Box
        borderRadius="xl"
        overflow="hidden"
        borderWidth="2px"
        borderColor="black"
        m={[1, 2, 4]}
      >
        <Image src={projectThumbnail} alt="image" w="full" bg="gray.400" />
        <Box px={4} py={6} mt="-2.5" bg="white" textAlign="center">
          <Text fontStyle="italic">{studentName}</Text>
          <Text fontSize="2xl" fontWeight="bold" textTransform="uppercase">
            {projectName}
          </Text>

          <Link href={projectUrl}>
            <a target="_blank" rel="noreferrer">
              <Button variant="solid" rightIcon={<ExternalLinkIcon />} mt={2}>
                See the piece
              </Button>
            </a>
          </Link>
        </Box>
      </Box>
    </div>
  );
}
