import { createTheme } from '@mantine/core';

export const theme = createTheme({
  // Глобальный шрифт проекта
  fontFamily: 'Cormorant Infant, serif',
  components: {
    Text: {
      // Настраиваем варианты, которые можно использовать через <Text variant="...">
      styles: (theme, props) => {
        if (props.variant === 'hero-date') {
          return {
            root: {
              color: '#442d25',
              fontWeight: 'bolder',
              fontSize: '1.3rem',
            },
          };
        }
        if (props.variant === 'hero-time') {
          return {
            root: {
              color: '#442d25',
              fontWeight: 'bolder',
              fontSize: '3rem',
            },
          };
        }
        if (props.variant === 'location') {
          return {
            root: {
              color: '#ffffff',
              fontSize: '1.5rem',
            },
          };
        }
        if (props.variant === 'title') {
          return {
            root: {
              color: '#442d25',
              fontWeight: 700,
              fontSize: '2.2rem'
            },
          };
        }
        if (props.variant === 'message') {
          return {
            root: {
              color: '#555',
              fontSize: '1.1rem'
            },
          };
        }
        if (props.variant === 'subtitle') {
          return {
            root: {
              color: '#442d25',
              fontWeight: 500,
              fontSize: '1.5rem'
            },
          };
        }
        if (props.variant === 'time') {
          return {
            root: {
              color: '#442d25',
              fontWeight: 700,
              width: '50px',
              minWidth: '50px',
              textAlign: 'right',
              flexShrink: 0,
              fontSize: '1.2rem'
            },
          };
        }
        if (props.variant === 'event') {
          return {
            root: {
              color: '#555',
              textAlign: 'left',
              flex: 1,
              lineHeight: '1.2',
              fontSize: '1.2rem'
            },
          };
        }
        if (props.variant === 'label') {
          return {
            root: {
              color: '#442d25',
              fontWeight: 700,
              fontSize: '1.1rem'
            },
          };
        }
      },
    },
  },
});