import Section from "../component/Section";
export default function CategoryPage() {
  const getRandomColor = () => {
    const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, ${Math.random() * 0.5 + 0.1})`;
    return color;
  };

  const randomColor = getRandomColor();

  return (
    <div>
      <div className="h-60 flex items-center" style={{ background: randomColor }}>
  <h1 className="p-4 text-black font-extrabold text-4xl">Category name</h1>
</div>
      <Section />
      <Section />
      <Section />
      <Section />
    </div>
  );
}
