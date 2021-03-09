import { Model } from './data';

// this function simply returns all brands from an array of models

const getBrandsFromModels = (models: Model[]) => {
  const brands: string[] = [];

  models.some(({ brand }) => {
    if (!brands.includes(brand)) {
      brands.push(brand);
    }
  });
  return brands;
};

export default getBrandsFromModels;
