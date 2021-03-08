import classNames from 'classnames';
import React from 'react';
import { Model } from '../utils/data';

type Props = {
  model: Model;
  hidePrice?: boolean;
  hideSpecs?: boolean;
  className?: string;
};

const ModelCard = ({ model, hidePrice, hideSpecs, className }: Props) => {
  return (
    <div
      className={classNames(
        'flex p-3 overflow-hidden text-black bg-white rounded shadow-md',
        className,
      )}
    >
      <div className="flex-grow">
        {/* Heading */}
        <div className="flex items-center justify-between">
          {/* model name */}
          <h3 className="text-xl font-bold">{model.name}</h3>
          {/* model price */}
          {!hidePrice && (
            <span className="pl-2 font-bold text-white whitespace-nowrap">
              {model.price} $
            </span>
          )}
        </div>
        {/* model specs */}
        {!hideSpecs && (
          <ul className="flex flex-wrap justify-between mt-1">
            {model.specs.map((spec, i) => (
              <li className="pt-2 min-w-1/3" key={i}>
                <span className="font-semibold">{spec.label}: </span>
                {spec.value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ModelCard;
