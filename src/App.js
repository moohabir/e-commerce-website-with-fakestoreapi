import { useEffect, useState } from "react";
import Loading from "./Loading";
import "./styles.css";
import Tours from "./Tours";

const url = "https://fakestoreapi.com/products";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [container, setContainer] = useState([]);

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
  return (
    <main>
      <Tours container={container} />
    </main>
  );
}
