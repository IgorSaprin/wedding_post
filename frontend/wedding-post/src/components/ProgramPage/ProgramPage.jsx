import texts from "../../data/texts";
import { Box, Center, Stack, Text, Timeline } from "@mantine/core";
import GlassEffect from "../GlassEffect/GlassEffect";

export default function ProgramPage() {
  const { title, items } = texts.program;

    return (
    <Center h="100dvh" w="100%">
      {/* Фиксируем maw и w, чтобы при появлении скролла ничего не дергалось */}
      <Box p="md" maw={430} w="100%" mx="auto">
        <GlassEffect>
          <Stack gap="xl" align="stretch">
            <Text variant="title" ta="center">{title}</Text>
            <Box pos="relative" pl={10}>
              <Box className="vertical-line" pos="absolute" left={80} top={10} bottom={10} w={1} 
              bg={"#bbad7b"}/>
             <Stack gap={25}>
                {items.map((item, index) => (
                  <Box display="flex" w="100%" key={index} style={{alignItems: 'center'}}>
                    <Text variant="time">{item.time}</Text>
                    <Box className="dot" w={10.5} h={10.5} bg="#bbad7b" bdrs="lg" m="0 15px"
                      style={{
                        zIndex: 1,
                        flexShrink: 0,
                      }}
                      />
                    <Text variant="event">{item.event}</Text>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Stack>
        </GlassEffect>
      </Box>
    </Center>
  );
}