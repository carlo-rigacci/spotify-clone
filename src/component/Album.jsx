export default function Album({ img, title, desc }) {
  return (
    <div>
      <img src={img.src} alt={img.alt} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
