import { Box } from "@mantine/core";
import classes from "./GlassEffect.module.css";

const GlassEffect = ({ children, p = "xs" }) => {
  return (
    <Box className={classes.glass} p={p}>
      {children}
    </Box>
  );
};

export default GlassEffect;