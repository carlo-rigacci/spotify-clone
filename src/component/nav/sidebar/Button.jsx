import { Link } from 'react-router-dom';

export default function Button({
  activeButton,
  ActiveSVG,
  InactiveSVG,
  displayText,
  linkTo,
  onClick,
}) {
  return (
    <Link
      to={linkTo}
      onClick={onClick}
      className='text-[#b8b8b8] hover:text-[#f5f5f5] transition-all flex gap-2 text-xl'
    >
      {activeButton === displayText ? <ActiveSVG /> : <InactiveSVG />}
      <span
        className={activeButton === displayText && `text-[#f5f5f5] font-bold`}
      >
        {displayText}
      </span>
    </Link>
  );
}
