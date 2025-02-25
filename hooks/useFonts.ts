import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

const useFonts = async () => {
  await Font.loadAsync({
    'Hum521Rm': require('../assets/fonts/Hum521Rm.ttf'),
    'Hum521Bd': require('../assets/fonts/Hum521Bd.ttf'),
    'Hum521Lt': require('../assets/fonts/Hum521Lt.ttf'),
    'Humanist521BoldItalicBt': require('../assets/fonts/Humanist521BoldItalicBt.ttf'),

    'Titillium-Regular': require('../assets/fonts/Titillium-Regular.otf'),
    'Titillium-Bold': require('../assets/fonts/Titillium-Bold.otf'),
    'Titillium-Light': require('../assets/fonts/Titillium-Light.otf'),
    'Titillium-SemiBold': require('../assets/fonts/Titillium-SemiBold.otf'),
    'Titillium-Black': require('../assets/fonts/Titillium-Black.otf'),
    'Titillium-Thin': require('../assets/fonts/Titillium-Thin.otf'),
    
  });
};

export default useFonts;