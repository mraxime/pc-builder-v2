import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { removeModel } from '../redux/ducks/models';
import { Model } from '../utils/data';
import ModelCard from './ModelCard';

type Props = {
  hardwareName: string;
  hardwareModel?: Model;
};

const BuilderSection = ({ hardwareName, hardwareModel }: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex justify-between">
        <h3 className="mb-2 font-bold text-white">{hardwareName}</h3>
        {/* Change & Delete buttons */}
        {hardwareModel && (
          <div className="flex space-x-5">
            <button
              className="text-sm text-gray-300"
              onClick={() => history.push(`/${hardwareName.toLowerCase()}`)}
            >
              change
            </button>
            <button
              className="text-sm text-red-600"
              onClick={() => dispatch(removeModel(hardwareModel))}
            >
              delete
            </button>
          </div>
        )}
      </div>
      {hardwareModel ? (
        <ModelCard model={hardwareModel} />
      ) : (
        // If there's no model in the props, render a "ADD COMPONENT" button
        <Link to={`/${hardwareName.toLowerCase()}`}>
          <a className="flex items-center max-w-xs px-4 py-2 text-sm font-semibold bg-white rounded">
            <FaPlus className="mr-2" />
            ADD Component
          </a>
        </Link>
      )}
    </div>
  );
};

export default BuilderSection;
