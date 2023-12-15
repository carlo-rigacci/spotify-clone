import { useState } from 'react';
import SvgPrimo from './SvgPrimo';
import SvgSecondo from './SvgSecondo';

const SvgSwitcher = () => {
  const [showSvgPrimo, setShowSvgPrimo] = useState(true);

  const ilCambio = () => {
    setShowSvgPrimo(!showSvgPrimo);
  };

  return (
    <div className='bg-slate-600 h-screen'>
      {showSvgPrimo ? (
        <SvgPrimo onClick={ilCambio} />
      ) : (
        <SvgSecondo onClick={ilCambio} />
      )}
    </div>
  );
};

export default SvgSwitcher;