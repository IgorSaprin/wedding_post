import { Text, Box, BackgroundImage} from "@mantine/core"
import CountdownTimer from "../Countdown/CountdownTimer";
import texts from "../../data/texts"
import classes from "./HeroPage.module.css"
import GlassEffect from "../GlassEffect/GlassEffect";

function formatWeddingDate(dateString) {
  const date = new Date(dateString);
  const optionsDate = { day: "numeric", month: "long", year: "numeric" };
  const optionsTime = { hour: "2-digit", minute: "2-digit" };
  const datePart = new Intl.DateTimeFormat("ru-RU", optionsDate).format(date);
  const timePart = new Intl.DateTimeFormat("ru-RU", optionsTime).format(date);
  return { datePart, timePart };
}

function HeroPage() {
  const { man, girl, weddingDate, location, locationPoint, photo } = texts.hero;
  const { datePart, timePart } = formatWeddingDate(weddingDate)

    return (
        <Box w="100%" maw={500}>
          <BackgroundImage className={classes.heroBackground} src={photo} h="100dvh">
            <Box className="heroHeader" ta="center">
              <Text fz="60px" ff="Great Vibes" fw="400" c="#442d25">{ man } и { girl }</Text>
              <Text variant="hero-date" >{ datePart }</Text>
              <Text variant="hero-time" >{ timePart }</Text>
            </Box>  
            <Box className={classes.heroFooter}>
              <GlassEffect p="1vh 2vw">   
                  <Text variant="location">{ location }</Text>
                  <Text variant="location">{ locationPoint }</Text>
              </GlassEffect > 
              <GlassEffect p="1vh 2vw">
                <CountdownTimer weddingDate={weddingDate} />
              </GlassEffect>
              {/* Анимированная стрелка */}
              <div className={classes.scrollIndicator}>
                <span>Листайте вверх</span>
              <div className={classes.arrow}></div>
              </div>
            </Box>
          </ BackgroundImage >
        </Box>
    )
}

export default HeroPage