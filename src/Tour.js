export default function Tour({
  id,
  image,
  title,
  price,
  category,
  description
}) {
  return (
    <div>
      <header>
        <h4>{category}</h4>
        <img src={image} alt="" className="image" />
      </header>
      <div>
        <h5>{title}</h5>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    </div>
  );
}
