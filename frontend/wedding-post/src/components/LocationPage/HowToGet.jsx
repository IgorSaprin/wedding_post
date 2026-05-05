import { useState } from "react";
import { Button, Box, Stack, Text } from "@mantine/core";
import classes from "./Location.module.css";

export default function HowToGet({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Stack gap="sm">
        <Button
          fullWidth
          variant="default"
          radius="md"
          h={45}
          className={classes.btnText}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            color: "#442d25",
            border: "1px solid rgba(68, 45, 37, 0.2)",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
        {isOpen ? "Скрыть варианты" : "Как добраться?"}
        </Button>

        {isOpen && (
          <Box className={`${classes.howToGetContent} ${classes.fadeIn}`}>
            <Stack gap="sm">
              <Box className="transport-block">
                <Text variant="label" mb={4}>
                    На автомобиле:
                </Text>
                <Text variant="message" fz="0.95rem" ta="left">{data.byCar}</Text>
              </Box>

              <Box className="transport-block">
                <Text variant="label" mb={4}>
                  Общественным транспортом:
                </Text >
                <Stack gap="xs">
                  {data.publicTransport.map((item, index) => (
                    <Box key={index} className={classes.publicTransportItem}>
                      <Text variant="message" fz="0.95rem" ta="left">
                          {item.variant}
                      </Text>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Box>
        )}
      </Stack>
    </Box>
  );
}
