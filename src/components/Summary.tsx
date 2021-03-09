import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StoreState } from '../redux/configueStore';
import { Model } from '../utils/data';
import findOneEquivalentID from '../utils/findOneEquivalentID';
import ModelCard from './ModelCard';

const Summary = () => {
  const selectedModels = useSelector(
    (state: StoreState) => state.models.selectedModels
  );
  const hardwares = useSelector((state: StoreState) => state.data.hardwares);
  if (!hardwares || hardwares.length < 1) return null;

  // calculate the total price
  const total = selectedModels.reduce((acc, { price }) => acc + price, 0);

  return (
    <div className="w-full max-w-xl p-5 mt-10 rounded-lg lg:ml-10 lg:mt-0 bg-gray-lightest">
      {/* heading */}
      <h2 className="pb-6 text-3xl font-semibold text-center text-gray-800">
        Summary
      </h2>
      {/* selected hardwares cards */}
      <div className="space-y-5">
        {hardwares.map(hardware => {
          // this function will simply return the first "selectedModel" that match an ID inside any hardwares models
          const model: Model = findOneEquivalentID(
            hardware.models,
            selectedModels
          );

          return (
            // Summary card
            <div key={hardware.id}>
              <h3 className="pb-1 text-lg text-black">{hardware.name}</h3>
              {model ? (
                <ModelCard
                  className="text-white bg-gray-dark"
                  model={model}
                  hideSpecs
                />
              ) : (
                // if no model
                <div className="flex justify-between p-3 text-lg text-white bg-gray-dark">
                  Empty...
                  <Link to={`/${hardware.name.toLowerCase()}`}>
                    <a className="text-gray-400 hover:text-gray-300">
                      select one
                    </a>
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* price total */}
      <div className="inline-block px-5 py-2 mt-10 ml-auto text-lg font-semibold text-white bg-pink-800 bg-opacity-75 rounded min-w-1/3">
        {total.toFixed(2)} $
      </div>
    </div>
  );
};

export default Summary;
