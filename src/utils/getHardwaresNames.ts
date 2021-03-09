// this function simply returns all the hardwares names from the data
// example output: ['processor', 'motherboard', 'power supply', ...]

import { Hardware } from './data';

const getHardwaresNames = (hardwares: Hardware[]) => {
  return hardwares.map(({ name }) => name);
};

export default getHardwaresNames;
