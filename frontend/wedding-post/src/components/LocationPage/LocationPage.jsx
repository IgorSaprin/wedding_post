import texts from "../../data/texts";
import locationPointImage from "../../images/locationPoint.jpg";
import LocationMap from "./LocationMap";
import HowToGet from "./HowToGet";
import { Box, Center, Image, Stack, Text } from "@mantine/core";
import GlassEffect from "../GlassEffect/GlassEffect";
import classes from "./Location.module.css";

export default function LocationPage() {
  const { location, howToGet } = texts;
  const { title, address, locationPoint, mapSrc } = location;

  return (
    <Center h="100dvh" className={classes.locationWrapper}>
      <Box p="md" maw="500px" mx="auto" className={classes.locationSection}>
        <GlassEffect>
          <Stack gap="xs">
            <Text variant="title" ta="center">
              {title}
            </Text>
            <Text fz="1.1rem" c="#555" ta="center" lh={1.6}>
              {locationPoint}
            </Text>
            <Box 
                w="100%" 
                maw={400} 
                style={{ 
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  boxShadow: '0 4px 15px 0 rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden'
                }}>
                  <Image src={locationPointImage} alt={locationPoint} h={200} fit="cover"/>
            </Box>
            <Text fz="1.1rem" c="#555" ta="center" lh={1.6}>
              {address}
            </Text>
            <LocationMap mapSrc={mapSrc} />
            <HowToGet data={howToGet} />
          </Stack>
        </GlassEffect>
        </Box>
      </Center>
  );
}
