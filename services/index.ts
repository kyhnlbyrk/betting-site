import axios from 'axios';

const API = axios.create({ baseURL: process.env.NEXT_PUBLIC_CORE_API });

export const getBets = async () => {
  const homepage = await API.get('bets');
 
  return homepage;
};
