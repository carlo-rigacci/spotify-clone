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
    <Link to={linkTo} onClick={onClick}>
      {activeButton === displayText ? <ActiveSVG /> : <InactiveSVG />}
      {displayText}
    </Link>
  );
}
