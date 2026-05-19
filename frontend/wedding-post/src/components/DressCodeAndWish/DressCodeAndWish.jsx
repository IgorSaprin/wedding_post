import { Text, Box, Stack, Center, Group, Tooltip } from "@mantine/core";
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
            </GlassEffect>
            <GlassEffect>
                <Text variant="title">{wishes.title}</Text>
                <Text variant="message">{wishes.description}</Text>
                <Text variant="label" mt={10}>{wishes.details?.[0]?.title}</Text>                
                <Text variant="message" style={{ whiteSpace: 'pre-line' }}>{wishes.details?.[0]?.text}</Text>
            </GlassEffect>
            <RsvpBlock />
        </Stack>
      </Box>
    </Center>
  );
}
