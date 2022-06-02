import Tour from "./Tour";

export default function Tours({ container, removeData }) {
  return (
    <div>
      {container.map((item) => {
        return <Tour key={item.id} {...item} removeData={removeData} />;
      })}
    </div>
  );
}
