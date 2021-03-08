import Head from 'next/head';
import Link from 'next/link';
import React, { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setHardwares } from '../redux/ducks/data';
import { setModels } from '../redux/ducks/models';
import hardwares from '../utils/data';
import getHardwaresNames from '../utils/getHardwaresNames';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => {
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
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav className="mb-10 text-xl text-white">
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          {/* dynamic nav links */}
          {hardwaresNames.map((name) => (
            <span key={name}>
              {' '}
              |{' '}
              <Link href={`/${name.toLowerCase()}`}>
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
