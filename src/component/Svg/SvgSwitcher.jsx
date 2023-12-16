import { useState } from 'react';
import SvgPrimo from './SvgPrimo';
import SvgSecondo from './SvgSecondo';

const SvgSwitcher = () => {
  const [mostraSvgPrimo, setMostraSvgPrimo] = useState(true);

  const ilCambio = () => {
    console.log("vedi se cambia qual cosa");
    setMostraSvgPrimo(!mostraSvgPrimo);
  };

  return (
    <div className=' active:text-white active:fill-white'>
      {mostraSvgPrimo ? (
        <SvgPrimo onClick={ilCambio} /> 
      )  : (
        <SvgSecondo onClick={ilCambio} />
      )}
    </div>
  );
};

export default SvgSwitcher;