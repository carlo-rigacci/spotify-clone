import { useState } from "react";
import SvgPrimo from "./SvgPrimo";
import SvgSecondo from "./SvgSecondo";

const SvgSwitcher = () => {
  const [mostraSvgPrimo, setMostraSvgPrimo] = useState(true);
  console.log(mostraSvgPrimo);

  const ilCambio = () => {
    // console.log("vedi se cambia qual cosa");
    setMostraSvgPrimo(!mostraSvgPrimo);
    // console.log(mostraSvgPrimo);
  };

  return (
    <div className=''>
      {mostraSvgPrimo ? (
        
        <SvgPrimo onClick={ilCambio} />
      )  : (
        <SvgSecondo onClick={ilCambio} />
      )} 
      {/* {mostraSvgPrimo && <SvgPrimo onClick={ilCambio} />}
      {!mostraSvgPrimo && <SvgSecondo onClick={ilCambio} />} */}
    </div>
  );
};
export default SvgSwitcher;

// export default function UseState() {
//   const [mostraSvgPrimo, setMostraSvgPrimo] = useState(true);

//   function cambioBottone() {
//     setMostraSvgPrimo(false);
//   }

//   return (
//     <label htmlFor="primoBottoneSvg" onClick={onClick}>
//       <button className=" mr-4" disabled={mostraSvgPrimo}>
//         {mostraSvgPrimo ? (
//           <span className="">
//             <svg
//               className=" outline-none"
//               tabIndex="0"
//               viewBox="0 0 24 24"
//               fill="white"
//               height={20}
//             >
//               <path d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 0 1-2.077 5.816l4.344 4.344a1 1 0 0 1-1.414 1.414l-4.353-4.353a9.454 9.454 0 0 1-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"></path>
//             </svg>
//           </span>
//         ) : (
//           <span className="">
//             <svg
//               className=" outline-none"
//               tabIndex="0"
//               viewBox="0 0 24 24"
//               fill="white"
//               height={20}
//             >
//               {/* <path d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"></path> */}
//               <path d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 0 1-2.077 5.816l4.344 4.344a1 1 0 0 1-1.414 1.414l-4.353-4.353a9.454 9.454 0 0 1-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"></path>
//             </svg>
//           </span>
//         )}
//       </button>
//       Search
//     </label>
//   );
// }
