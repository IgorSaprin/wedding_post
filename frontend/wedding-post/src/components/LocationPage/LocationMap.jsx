import { useState } from "react";
import { Button, Box, Stack, Center } from "@mantine/core";
import classes from "./Location.module.css";


export default function LocationMap({ mapSrc, navigateUrl }) {
  const [isMapVisible, setIsMapVisible] = useState(false);

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
          onClick={() => setIsMapVisible(!isMapVisible)}
        >
          {isMapVisible ? "Скрыть карту" : "Показать на карте"}
        </Button>

      {isMapVisible && (
        <Box className={`${classes.mapContainer} ${classes.fadeIn}`}>
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            title="Карта проезда"
          ></iframe>
        </Box>
      )}
      </Stack>
    </Box>
  );
}
