import Card from "../components/Card";

import Meta from "../components/Meta";
import Link from "next/link";
import Masonry from "react-masonry-css";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  ButtonGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
} from "@chakra-ui/react";

import styles from "../styles/Home.module.css";
import fetch from "isomorphic-unfetch";
import { orderBy } from "lodash";

export default function Home(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Meta />
      <main>
        <Image
          src="/scribbles-dots.svg"
          alt="scribble doodles"
          width={150}
          height={150}
          pos="absolute"
          right="165"
          top="400"
          display={["none", "none", "inherit"]}
        />
        <Image
          src="/scribbles-spots.svg"
          alt="scribble doodles"
          width={150}
          height={150}
          pos="absolute"
          left={0}
          top={50}
        />
        <Image
          src="/scribbles-loop.svg"
          alt="scribble doodles"
          width={150}
          height={150}
          pos="absolute"
          right="50"
          top="50"
        />
        <Box py={48} px={[8, 24, 48]}>
          <Heading as="heading" fontSize="6xl" fontWeight="bold">
            Fiveable
          </Heading>
          <Text
            fontSize="6xl"
            mt="-36px"
            mb="-20px"
            style={{ fontFamily: "Palmer Lake Print" }}
          >
            Art Collective
          </Text>
          <Text fontSize="xl" pb={4}>
            For creatives and artists to make and break.
          </Text>
          <ButtonGroup>
            <Button
              onClick={onOpen}
              bg="orange"
              textColor="white"
              _hover={{ bg: "orange", transform: "scale(1.06)" }}
            >
              Learn more
            </Button>
            <Link href="/">
              <a>
                <Button
                  bg="black"
                  textColor="white"
                  _hover={{ bg: "black", transform: "scale(1.06)" }}
                >
                  Submit to the gallery
                </Button>
              </a>
            </Link>
          </ButtonGroup>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Fiveable Art Showcase</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing="24px">
                <Text>
                  🚨 Calling all artists 🎨 , writers 📝 , and anyone who wants
                  to exhibit their creativity 🎭!
                </Text>
                <Text>
                  Would you like to create something special for the Fiveable
                  Community? We present to you Fiveable&apos;s Scenic Showcase
                  ✨ , a space for you to showcase your brilliant talent!
                </Text>
                <Text>
                  To make things interesting, we want you to follow the Rule of
                  Fives, an ideology that embodies a place for everything and
                  everything in its place 🤔 . This month&apos;s theme will be
                  Pop :boom: . Using bright, flamboyant colors 🌈 , create a
                  piece around a remarkable object, activity, or event.
                  We&apos;d love to get submissions in every artistic category:
                  visual arts, writing, theater, public speaking, and dance!
                  You&apos;re welcome to submit videos, paintings, graphics, and
                  all other mediums through which you can represent the theme!
                </Text>{" "}
                <Text>
                  Submit your work to the Airtable form linked below to get it
                  featured in the gallery. Reach out to community@fiveable.me if
                  you have any questions about the Showcase.
                </Text>
                <Text>
                  We can&apos;t wait to see your spectacular submissions!
                </Text>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Link href="/">
                <a>
                  <Button
                    variant="solid"
                    bg="orange"
                    textColor="white"
                    mx={2}
                    _hover={{ bg: "orange" }}
                  >
                    Submit to the gallery
                  </Button>
                </a>
              </Link>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Tabs variant="soft-rounded" colorScheme="blackAlpha">
          <TabList mx={14} display="flex" flexWrap="wrap">
            <Tab fontWeight="medium">All</Tab>
            <Tab fontWeight="medium">Visual Art</Tab>
            <Tab fontWeight="medium">Writing</Tab>
            <Tab fontWeight="medium">Theater</Tab>
            <Tab fontWeight="medium">Dance</Tab>
          </TabList>
          <TabPanels>
            <TabPanel id="all">
              <Heading mx={14}>All projects</Heading>
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
                {props.posts.map(({ file, title, creator, url, id }) => (
                  <div key={id}>
                    <Card
                      projectThumbnail={file}
                      projectName={title}
                      studentName={creator}
                      projectUrl={url}
                    />
                  </div>
                ))}
              </Masonry>
            </TabPanel>
            <TabPanel id="visualArt">
              <Heading mx={14}>Visual Art</Heading>
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
                {props.posts.map(({ file, title, creator, url, id }) => (
                  <div key={id}>
                    <Card
                      projectThumbnail={file}
                      projectName={title}
                      studentName={creator}
                      projectUrl={url}
                    />
                  </div>
                ))}
              </Masonry>
            </TabPanel>
            <TabPanel id="writing">
              <Heading mx={14}>Writing</Heading>
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
                {props.posts.map(({ file, title, creator, url, id }) => (
                  <div key={id}>
                    <Card
                      projectThumbnail={file}
                      projectName={title}
                      studentName={creator}
                      projectUrl={url}
                    />
                  </div>
                ))}
              </Masonry>
            </TabPanel>
            <TabPanel id="theater">
              <Heading mx={14}>Theater</Heading>
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
                {props.posts.map(({ file, title, creator, url, id }) => (
                  <div key={id}>
                    <Card
                      projectThumbnail={file}
                      projectName={title}
                      studentName={creator}
                      projectUrl={url}
                    />
                  </div>
                ))}
              </Masonry>
            </TabPanel>
            <TabPanel id="dance">
              <Heading mx={14}>Dance</Heading>
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
                {props.posts.map(({ file, title, creator, url, id }) => (
                  <div key={id}>
                    <Card
                      projectThumbnail={file}
                      projectName={title}
                      studentName={creator}
                      projectUrl={url}
                    />
                  </div>
                ))}
              </Masonry>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </main>
      <Box style={{ fontFamily: "Palmer Lake Print" }}>
        <Text fontSize="4xl" textAlign="center">
          Presented by Fiveable students.
        </Text>
        <Text fontSize="4xl" textAlign="center" mt="-24px">
          This project is{" "}
          <a
            href="https://github.com/thinkfiveable/art"
            style={{ color: "#F36D01", textDecoration: "underline" }}
          >
            open source
          </a>
          !
        </Text>
      </Box>
    </div>
  );
}

export const getServerSideProps = async () => {
  const posts = await fetch(`http://localhost:3000/api/getProjects`)
    .then((res) => res.json())
    .then((posts) =>
      posts.map(({ id, fields }) => ({
        id,
        title: fields.projectName,
        file: fields.attachments[0].url,
        creator: fields.creator,
        url: fields.projectUrl,
        type: fields.category,
      }))
    )
    .then((posts) => orderBy(posts, "title"));
  console.log(posts);
  return { props: { posts } };
};
