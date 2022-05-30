import { loadAsync } from 'expo-font';

export default function loadFonts() {
  return loadAsync({
    'Inter-Bold': require('../../assets/Fonts/Inter-Bold.ttf'),
    'Inter-Regular': require('../../assets/Fonts/Inter-Regular.ttf'),
  });
}
