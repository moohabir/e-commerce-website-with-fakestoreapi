import { useEffect, useState } from "react";
import Loading from "./Loading";
import "./styles.css";
import Tours from "./Tours";

const url = "https://fakestoreapi.com/products";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [container, setContainer] = useState([]);

  function removeData(id) {
    const newData = container.filter((element) => element.id !== id);
    setContainer(newData);
  }

  const fetchdata = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setContainer(data);
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (container.length === 0) {
    return (
      <div>
        <h4>All Items sold</h4>
        <button onClick={fetchdata}>Refresh</button>
      </div>
    );
  }
  return (
    <main>
      <Tours container={container} removeData={removeData} />
    </main>
  );
}
