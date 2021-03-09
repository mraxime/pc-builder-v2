import React from 'react';
import Builder from '../components/Builder';
import Summary from '../components/Summary';

const IndexPage = () => {
  return (
    <div className="flex flex-col items-center justify-between lg:items-start lg:flex-row">
      <Builder />
      <Summary />
    </div>
  );
};

export default IndexPage;
