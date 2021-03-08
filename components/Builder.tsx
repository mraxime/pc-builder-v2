import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../redux/configueStore';
import { resetModels, saveModels } from '../redux/ducks/models';
import BuilderSection from './BuilderSection';

const Builder = () => {
  const dispatch = useDispatch();

  // get the hardwares from the global Store (redux)
  const hardwares = useSelector((state: StoreState) => state.data.hardwares);

  // get the selected hardwares models from the global Store (redux)
  const selectedModels = useSelector(
    (state: StoreState) => state.models.selectedModels,
  );

  return (
    <div className="w-full max-w-4xl">
      <div className="grid grid-cols-1 gap-5 p-5 rounded-lg shadow-lg xl:grid-cols-2 bg-gradient-to-br from-gray-dark to-gray-light">
        {hardwares.map((hardware) => {
          // get the hardware model from the "selectedModels" state
          const model = selectedModels.find(
            ({ category }) =>
              category.toLowerCase() === hardware.name.toLowerCase(),
          );
          return (
            <BuilderSection
              hardwareName={hardware.name}
              hardwareModel={model}
              key={hardware.id}
            />
          );
        })}
      </div>
      {/* Save and Reset buttons */}
      <div className="flex mt-3 ml-3 space-x-6 text-lg text-white">
        <button onClick={() => dispatch(saveModels())}>Save</button>
        <button onClick={() => dispatch(resetModels())}>Reset</button>
      </div>
    </div>
  );
};

export default Builder;
