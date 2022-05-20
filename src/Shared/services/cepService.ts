import handleError from './config/handleError';
import axios from './config/request';

const fetch = async (cep: string) => {
  try {
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    const data = await axios.get(`https://viacep.com.br/ws/${cep}/json/`, {});
    return data.data;
  } catch (error) {
    return handleError('Opss, algo deu errado');
  }
};

export default {
  fetch,
};
