import { useState } from 'react';
import SidebarButton from './Button';
import Active_HOME from '../../../assets/svg/sidebar/home/Active.jsx';
import Inactive_HOME from '../../../assets/svg/sidebar/home/Inactive.jsx';
import Active_SEARCH from '../../../assets/svg/sidebar/search/Active.jsx';
import Inactive_SEARCH from '../../../assets/svg/sidebar/search/Inactive.jsx';

export default function ButtonsContainer() {
  const [svgState, setSvgState] = useState(true);

  const toggleHandler = () => {
    setSvgState(!svgState);
    console.log('change');
  };

  return (
    <div className='flex'>
      <SidebarButton
        svgState={svgState}
        ActiveSVG={Active_HOME}
        InactiveSVG={Inactive_HOME}
        displayText={'Home'}
        linkTo={'/'}
        toggleHandler={toggleHandler}
      />
      <SidebarButton
        svgState={svgState}
        ActiveSVG={Inactive_SEARCH}
        InactiveSVG={Active_SEARCH}
        displayText={'Search'}
        linkTo={'/searchpage'}
        toggleHandler={toggleHandler}
      />
    </div>
  );
}
