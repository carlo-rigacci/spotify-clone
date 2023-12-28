import { Link } from 'react-router-dom';

export default function Button({
  svgState,
  ActiveSVG,
  InactiveSVG,
  displayText,
  linkTo,
  toggleHandler,
}) {
  return (
    <Link to={linkTo} onClick={toggleHandler}>
      {svgState ? <ActiveSVG /> : <InactiveSVG />}
      {displayText}
    </Link>
  );
}
