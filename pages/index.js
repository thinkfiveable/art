import Card from "../components/Card";

import Meta from "../components/Meta";
import Link from "next/link";
import Masonry from "react-masonry-css";
import {
  Box,
  Heading,
  Text,
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
} from "@chakra-ui/react";

import styles from "../styles/Home.module.css";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Meta />
      <main>
        <Box mx={[8, 14, 24]} py={24}>
          <Heading as="heading" fontSize="5xl">
            Fiveable
          </Heading>
          <Text>Art Collective</Text>
          <Text>For creatives and artists to make and break.</Text>
          <ButtonGroup>
            <Button onClick={onOpen}>Learn more</Button>
            <Button>Submit</Button>
          </ButtonGroup>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Fiveable Art Showcase</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                🚨 Calling all artists 🎨 , writers 📝 , and anyone who wants to
                exhibit their creativity 🎭!
                <br />
                Would you like to create something special for the Fiveable
                Community? We present to you Fiveable&apos;s Scenic Showcase ✨
                , a space for you to showcase your brilliant talent!
                <br />
                To make things interesting, we want you to follow the Rule of
                Fives, an ideology that embodies a place for everything and
                everything in its place 🤔 . This month&apos;s theme will be Pop
                :boom: . Using bright, flamboyant colors 🌈 , create a piece
                around a remarkable object, activity, or event. We&apos;d love
                to get submissions in every artistic category: visual arts,
                writing, theater, public speaking, and dance! You&apos;re
                welcome to submit videos, paintings, graphics, and all other
                mediums through which you can represent the theme!
                <br />
                Submit your artwork here: https://forms.gle/zwY27gKGV6Bro68W8.
                The last day to submit your piece is June 18. We will be
                featuring your work on open.fiveable.me, Fiveable&apos;s Open
                Source Website, a place for all students to view your amazing
                talent. 🥳
                <br />
                Reach out to community@fiveable.me if you have any questions
                about the Showcase!
                <br />
                We can&apos;t wait to see your spectacular submissions!
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button variant="solid" bg="orange" mx={2}>
                Submit to the gallery
              </Button>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Tabs variant="soft-rounded" colorScheme="gray">
          <TabList mx={14}>
            <Tab>All</Tab>
            <Tab>Visual Art</Tab>
            <Tab>Digital Media</Tab>
            <Tab>Music</Tab>
            <Tab>Dance</Tab>
          </TabList>
          <TabPanels>
            <TabPanel id="all">
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
                <Card />
                <Card />
              </Masonry>
            </TabPanel>
            <TabPanel id="visualArt">
              <p>visual art</p>
            </TabPanel>
            <TabPanel id="music">
              <p>moosic</p>
            </TabPanel>
            <TabPanel id="media">
              <p>meeeedia</p>
            </TabPanel>
            <TabPanel id="dance">
              <p>dance</p>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <section>
          {/* <Masonry
            breakpointCols={{
              default: 3,
              1024: 3,
              640: 2,
              480: 1,
            }}
            className={styles.masonry}
            columnClassName=""
          >
            <Card />
            <Card />
          </Masonry> */}
        </section>
      </main>
    </div>
  );
}
