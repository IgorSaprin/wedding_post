import { Text, Box, Stack, Image, Center } from "@mantine/core";
import texts from "../../data/texts";
import GlassEffect from "../GlassEffect/GlassEffect";
import RsvpBlock from "../RsvpBlock/RsvpBlock.";

export default function DressCodeAndWish() {
  const { dressCode, wishes } = texts;

  return (
    <Center h="100dvh">
      <Box p="md" maw="500px" mx="auto">
        <Stack p="xs" ta="center">
            <GlassEffect>
                <Text variant="title">{dressCode.title}</Text>
                <Text variant="message">{dressCode.description}</Text>
            </GlassEffect>
            <GlassEffect>
                <Text variant="title">{wishes.title}</Text>
                <Text variant="message">{wishes.description}</Text>
            </GlassEffect>
            <RsvpBlock />
        </Stack>
      </Box>
    </Center>
  );
}