import React, { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setHardwares } from '../redux/ducks/data';
import { setModels } from '../redux/ducks/models';
import hardwares from '../utils/data';
import getHardwaresNames from '../utils/getHardwaresNames';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  const dispatch = useDispatch();

  // asyncronously set hardwares data in global state (redux) ** this runs only 1 time. **
  useEffect(() => {
    dispatch(setHardwares(hardwares));

    // if there is selectedModels in localstorage, pushing them to global state.
    const localModels = window.localStorage.getItem('selectedModels');
    if (localModels && localModels.length > 0)
      dispatch(setModels(JSON.parse(localModels)));

    /* ** Si j'avais eu à fetch la data depuis une API:
    fetch('API')
      .then((response) => response.json())
      .then((hardwares) => dispatch(setHardwares(hardwares)));
    */
  }, []);

  // get the hardwares names for the dynamic nav links
  const hardwaresNames = getHardwaresNames(hardwares);

  return (
    <div className="px-4 mx-auto my-20 max-w-screen-2xl">
      <header>
        <nav className="mb-10 text-xl text-white">
          <Link to="/">Home</Link> {/* dynamic nav links */}
          {hardwaresNames.map(name => (
            <span key={name}>
              {' '}
              |{' '}
              <Link to={`/${name.toLowerCase()}`}>
                <a>{name}</a>
              </Link>
            </span>
          ))}
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
