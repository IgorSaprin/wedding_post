import { Text, Box, Stack, Center, Group, Tooltip } from "@mantine/core";
import texts from "../../data/texts";
import GlassEffect from "../GlassEffect/GlassEffect";
import RsvpBlock from "../RsvpBlock/RsvpBlock.";

export default function DressCode() {
  const { dressCode } = texts;

  return (
    <Center h="100dvh">
      <Box p="md" maw="500px" mx="auto">
        <Stack p="sm" ta="center">
            <GlassEffect>
                <Text variant="title">{dressCode.title}</Text>
                <Text variant="message">{dressCode.description}</Text>
                {/* Сетка цветов дресс-кода */}
                <Group gap="sm" justify="center" mt="md" mb="md">
                  {dressCode.colors.map((item, index) => (
                    <Tooltip key={index} label={item.label} withArrow position="top">
                      <Box w={40} h={40}
                        style={{
                          backgroundColor: item.color,
                          borderRadius: "50%",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                          cursor: "pointer",
                          transition: "transform 0.2s ease"
                        }}
                      />
                    </Tooltip>
                  ))}
                </Group>
                <Text variant="message">{dressCode.postscriptum}</Text>
            </GlassEffect>
        </Stack>
      </Box>
    </Center>
  );
}
