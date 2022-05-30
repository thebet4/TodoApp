import * as Constants from 'expo-constants';

const base_url = Constants?.default?.manifest2?.extra?.expoClient?.extra?.base_url;

export const HOME_SETTINGS_URL = `${base_url}/setting?type=HOME&tag=INFO`;
