import { useState } from 'react';
import { Nav } from './nav';
import { Sec } from './Sec';
import { Kotak } from './Kotak';
import { SecTwo } from './SecTwo';
import { SecTheree } from './SecTheree';
import { SecKotakThree } from './SecKotakThree';
import { SecFour } from './SecFour';
import { SecFive } from './SecFive';
import { Footer } from './Footer';
import { Arrow } from './Arrow';

function App() {
  return (
    <>
      <div className="bg-[#0B2447] relative px-1 sm:px-[20px] pb-0">
        <Nav />
        <Sec />
        <Kotak />
        <SecTwo />
        <SecKotakThree />
        <SecTheree />
        <SecFour />
        <SecFive />
        <Arrow />
        <Footer />
      </div>{' '}
    </>
  );
}

export default App;
