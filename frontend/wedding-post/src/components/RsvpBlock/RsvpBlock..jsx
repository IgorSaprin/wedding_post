import { useState } from "react";
import { Button, Text, Stack, Group, Box } from "@mantine/core";
import GlassEffect from "../GlassEffect/GlassEffect";

export default function RsvpBlock() {
  const [status, setStatus] = useState(null);

  return (
      <GlassEffect p="sm">
        <Stack gap="md" align="center">
          {!status ? (
            <Group grow w="100%" gap="md">
              <Button
                variant="filled"
                color="#442d25" // Основной цвет темы
                radius="md"
                h={45}
                ff="Cormorant Infant"
                onClick={() => setStatus("accepted")}
              >
                Принять
              </Button>
              <Button
                variant="outline"
                color="#442d25"
                radius="md"
                h={45}
                ff="Cormorant Infant"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
                onClick={() => setStatus("declined")}
              >
                Отклонить
              </Button>
            </Group>
          ) : (
            <Stack align="center" gap="xs">
              <Text variant="message" fz="1rem" ta="center">
                {status === "accepted"
                  ? "Рады, что вы будете с нами! Пожалуйста, пройдите опрос, это поможет нам в организации"
                  : "Жаль, что не получится встретиться."}
              </Text>
              
              {status === "accepted" && (
                <Button
                  component="a"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeU-3dmUDC4v0SSRRq2tkp1RViOFGQvCKo4BvcF8BxdhvEM4A/viewform"
                  target="_blank"
                  rel="noreferrer"
                  variant="filled"
                  color="#442d25"
                  radius="md"
                  mt="sm"
                  ff="Cormorant Infant"
                >
                  Пройти опрос
                </Button>
              )}
              
              {status === "declined" && (
                <Button 
                  variant="subtle" 
                  color="gray" 
                  size="xs" 
                  onClick={() => setStatus(null)}
                >
                  Изменить решение
                </Button>
              )}
            </Stack>
          )}
        </Stack>
      </GlassEffect>
  );
}