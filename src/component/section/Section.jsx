import Container from "../container/Container";
import { Link } from "react-router-dom";
export default function Section({ sectionName }) {
  

  return (
    <div className=" h-fit p-4 text-white " style={{ backgroundColor: "rgba(18,18,18,0.7)" }}>
      <h1 className="font-bold text-2xl p-3">Section name</h1>
      <div className=" flex grid-cols-4 gap-6">
        <Container/>
        <Container />
        <Container />
        <Container />
        <Container />
      </div>
    </div>
  );
}
