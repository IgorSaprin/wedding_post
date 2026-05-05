import { Text, Box, Stack, Image, Center } from "@mantine/core";
import texts from "../../data/texts";
import GlassEffect from "../GlassEffect/GlassEffect";

export default function WeddingMessagePage() {
  const { message, photo, names } = texts.weddingMessage;

  return (
    <Center h="100dvh">
      <Box p="md" maw="500px" mx="auto">
        <GlassEffect>
          <Stack gap="md">
            <Text variant="title" ta="center">
                Дорогие гости!
            </Text>
            <Text variant="message" ta="center" lh={1.6}>
                {message}
            </Text>
            <Box 
                w="100%" 
                maw={400} 
                style={{ 
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
                  overflow: 'hidden'
                }}>
              <Image src={photo} alt={names} h={250} fit="cover" />
            </Box>
            <Text variant="subtitle" ta="center">
              {names}
            </Text>
          </Stack>
        </GlassEffect>
      </Box>
    </Center>
  );
}