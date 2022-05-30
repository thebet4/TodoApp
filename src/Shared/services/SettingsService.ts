import handleError from './config/handleError';
import axios from './config/request';
import { HOME_SETTINGS_URL } from './config/constants';

const getHomeSettings = async () => {
  try {
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    const data = await axios.get(HOME_SETTINGS_URL);
    return data.data.setting;
  } catch (error) {
    return handleError('Opss, algo deu errado');
  }
};

export default {
  getHomeSettings,
};
