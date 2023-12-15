import { useState } from 'react';
import SvgPrimo from './SvgPrimo';
import SvgSecondo from './SvgSecondo';

const SvgSwitcher = () => {
  const [mostraSvgPrimo, setMostraSvgPrimo] = useState(true);

  const ilCambio = () => {
    setMostraSvgPrimo(!mostraSvgPrimo);
  };

  return (
    <div>
      {mostraSvgPrimo ? (
        <SvgPrimo onClick={ilCambio} /> 
      )  : (
        <SvgSecondo onClick={ilCambio} />
      )}
    </div>
  );
};

export default SvgSwitcher;