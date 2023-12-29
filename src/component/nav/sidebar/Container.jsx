import { useState } from 'react';
import Button from './Button.jsx';
import Active_HOME from '../../../assets/svg/sidebar/home/Active.jsx';
import Inactive_HOME from '../../../assets/svg/sidebar/home/Inactive.jsx';
import Active_SEARCH from '../../../assets/svg/sidebar/search/Active.jsx';
import Inactive_SEARCH from '../../../assets/svg/sidebar/search/Inactive.jsx';

const buttonArray = [
  {
    ActiveSVG: Active_HOME,
    InactiveSVG: Inactive_HOME,
    displayText: 'Home',
    linkTo: '/',
  },
  {
    ActiveSVG: Active_SEARCH,
    InactiveSVG: Inactive_SEARCH,
    displayText: 'Search',
    linkTo: '/searchpage',
  },
];

export default function Container() {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className='flex flex-col gap-3'>
      {buttonArray.map((button, key) => (
        <Button
          key={key}
          activeButton={activeButton}
          ActiveSVG={button.ActiveSVG}
          InactiveSVG={button.InactiveSVG}
          displayText={button.displayText}
          linkTo={button.linkTo}
          onClick={() => setActiveButton(button.displayText)}
        />
      ))}
    </div>
  );
}
