import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import OracionDelDia from './components/ui/OracionDelDia';

const loadFonts = () => {
  return Font.loadAsync({
    'Titillium-Regular': require('./assets/fonts/Titillium-Regular.otf'),
    'Titillium-Bold': require('./assets/fonts/Titillium-Bold.otf'),
    'Titillium-Semibold': require('./assets/fonts/Titillium-Semibold.otf'),
    'Humans-Roman': require('./assets/fonts/Hum521Rm.ttf'),
    'Humans-Bold': require('./assets/fonts/Hum521Bd.ttf'),
    // Add more fonts here as needed
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <OracionDelDia />;
}