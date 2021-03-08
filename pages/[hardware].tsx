import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckBox from '../components/CheckBox';
import ModelCard from '../components/ModelCard';
import SearchBox from '../components/SearchBox';
import { StoreState } from '../redux/configueStore';
import { addModel } from '../redux/ducks/models';
import { Model } from '../utils/data';
import getBrandsFromModels from '../utils/getBrandsFromModels';

const HardwarePage = () => {
  const router = useRouter();
  // get the dynamic hardware from the url
  const { hardware } = router.query;
  // ** if the url is "/processor", then the hardware variable will be "processor"

  // hooks
  const dispatch = useDispatch();

  const [searchField, setSearchField] = useState('');
  const [brandsFilter, setBrandsFilter] = useState<Array<string>>([]);

  // actions
  const handleAddModel = (model: Model) => {
    dispatch(addModel(model));
    router.push('/');
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value);
  };

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const name = target.name;
    const checked = target.checked;

    checked
      ? setBrandsFilter([...brandsFilter, name])
      : setBrandsFilter(brandsFilter.filter((brand) => brand !== name));
  };

  // get all hardwares from the data global state
  const hardwares = useSelector((state: StoreState) => state.data.hardwares);

  // get all models from the hardwares name
  const models = hardwares.find(({ name }) => name.toLowerCase() === hardware)
    ?.models;

  // return if no models
  if (!models || models.length < 1) return 'no models available';

  // get all brands from the models
  const brands = getBrandsFromModels(models);

  // FILTERS **

  // filter the models to match the brands state
  const filterByBrands = (models: Model[]) => {
    if (brandsFilter.length < 1) return models;
    return models.filter((model) =>
      brandsFilter.some(
        (brand) => model.brand.toLowerCase() === brand.toLowerCase(),
      ),
    );
  };

  // filter the models to match the search input
  const filterByName = (models: Model[]) => {
    return models.filter((model) => {
      return model.name.toLowerCase().includes(searchField.toLowerCase());
    });
  };

  // Applying both filters
  const filteredModels = filterByBrands(filterByName(models));

  return (
    <div>
      {/* filters inputs */}
      <div className="flex items-center mb-6">
        {/* search */}
        <SearchBox value={searchField} onChange={handleSearchChange} />
        {/* brand checkboxes */}
        <ul className="flex items-center ml-10 space-x-10">
          {brands.map((brand) => (
            <li key={brand}>
              <CheckBox value={brand} onChange={handleCheckBoxChange} />
            </li>
          ))}
        </ul>
      </div>
      {/* models list */}
      <div className="space-y-6">
        {filteredModels.map((model) => (
          <div
            onClick={() => handleAddModel(model)}
            className="duration-500 ease-out transform cursor-pointer hover:scale-102"
            key={model.id}
          >
            <ModelCard model={model} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HardwarePage;
