import { Text, Box, Stack, Center, Group, Tooltip } from "@mantine/core";
import texts from "../../data/texts";
import GlassEffect from "../GlassEffect/GlassEffect";
import RsvpBlock from "../RsvpBlock/RsvpBlock.";

export default function DressCodeAndWish() {
  const { title, details } = texts.wishes;

  return (
    <Center>
      <Box p="md" maw="500px" mx="auto">
				<Stack ta="center">
					<GlassEffect>
						<Text variant="title">{title}</Text>
            {details?.map((item, index) => (
              <Box key={index} gap="xs">
                <Text variant="label" fz="1.1rem" mt={4}>{item.subtitle}</Text>
                <Text variant="message" fz="0.95rem">{item.text}</Text>
              </Box>
            ))}
					</GlassEffect>
					<RsvpBlock />
				</Stack>
      </Box>
    </Center>
  );
}
