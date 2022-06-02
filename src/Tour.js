import { useState } from "react";

export default function Tour({
  id,
  image,
  title,
  price,
  category,
  description,
  removeData
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <header>
        <h4>{category}</h4>
        <img src={image} alt="" className="image" />
      </header>
      <div>
        <h5>{title}</h5>
        <p>
          {show ? description : `${description.substring(0, 50)}...`}
          <button onClick={() => setShow(!show)}>
            {show ? "show less" : "show more"}
          </button>
        </p>
        <p>${price}</p>
        <button onClick={() => removeData(id)}>Buy Item</button>
      </div>
    </div>
  );
}
