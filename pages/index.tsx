import Head from "next/head";
import { Image } from "@chakra-ui/react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import GradientLayout from "../components/gradientLayout";
import styles from "../styles/Home.module.css";
import prisma from "../lib/prisma";
import { useMe } from "../lib/hooks";


const Home = ({ artists }) => {
  const {user, isLoading} = useMe()
 

  return (
    <GradientLayout
      roundImage
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} public playlists`}
      color="blue"
      image="https://media-exp1.licdn.com/dms/image/C4D03AQH_bk5B5GMMFQ/profile-displayphoto-shrink_800_800/0/1606729253648?e=1660176000&v=beta&t=QwXgD7nIqtEsCKB0TpG8Ej3h6PvPuNX3eXuZi7r7uSg"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top Artists this Month
          </Text>
          <Text fontSize="md">Only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="10px" width="20%">
              <Box background="gray.900" borderRadius="4px" padding="15px">
                <Image
                  src="https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg"
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return {
    props: { artists: JSON.parse(JSON.stringify(artists)) },
  };
};

export default Home;
