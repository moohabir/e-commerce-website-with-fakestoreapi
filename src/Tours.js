import Tour from "./Tour";

export default function Tours({ container }) {
  return (
    <div>
      {container.map((item) => {
        return <Tour key={item.id} {...item} />;
      })}
    </div>
  );
}
