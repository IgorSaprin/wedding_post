import '@mantine/core/styles.css';
import { motion } from "framer-motion";
import { BackgroundImage, MantineProvider, Box } from '@mantine/core';

import backgroundImage from "./images/background1.jpg";
import HeroPage from './components/HeroPage/HeroPage';
import WeddingMessagePage from './components/WeddingMessagePage/WeddingMessagePage';
import ProgramPage from './components/ProgramPage/ProgramPage'
import LocationPage from './components/LocationPage/LocationPage';
import DressCodeAndWish from './components/DressCodePage/DressCodePage';
import WishPage from './components/WishPage/WishPage'


const bounceTransition = {
  // Начальное состояние: карточка сжата (scale 0.9) и опущена
  initial: {
    opacity: 0,
    scale: 0.8, // Эффект сжатия
    y: 50,
  },
  // Состояние во вьюпорте: карточка восстанавливается до нормального размера
  whileInView: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  viewport: { once: false, amount: 0.2 },
  transition: {
    type: "spring",
    stiffness: 100, // Пониженная жесткость для плавности
    damping: 18, // Среднее затухание для мягкого отскока
    mass: 0.5, // Малая масса делает "сжатие" более отзывчивым
  },
};


const App = () => {

  return (
    <Box >
      <BackgroundImage 
        src={backgroundImage} 
        pos="fixed" 
        top={0} 
        left={0} 
        w="100%" 
        h="100dvh"
        style={{ zIndex: -1}}
      />
      <Box className="app-snap-container" style={{ zIndex: 1 }}>
          <section className="snap-section">
          <HeroPage />
          </section>
          {[
            { component: <WeddingMessagePage />, id: "msg" },
            { component: <ProgramPage />, id: "prog" },
            { component: <LocationPage />, id: "loc" },
            { component: <DressCodeAndWish />, id: "dresscod" },
            { component: <WishPage />, id: "wish" },
          ].map((item) => (
            <section key={item.id} className="snap-section">
              <motion.div {...bounceTransition} className="motion-wrapper">
                {item.component}
              </motion.div>
            </section>
          ))}
      </Box>
    </Box>
  )
}

export default App
