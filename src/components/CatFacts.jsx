import { useEffect, useState } from "react";

export default function CatFacts() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://catfact.ninja/facts?limit=5");
        if (!response.ok) {
          throw new Error(`error. Status ${response.status}`);
        }
        const result = await response.json();
        const cats = result.data.map((cat) => ({
          id: crypto.randomUUID(),
          fact: cat.fact,
        }));
        setData(cats);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <h2>
        Did you know?
    </h2>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {data?.map((cat) => (
          <p key={cat.id}>{cat.fact}</p>
        ))}
      </div>
    </>
  );
}
