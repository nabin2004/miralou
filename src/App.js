import { Route, Routes } from "react-router-dom";
import { Navbar } from "./component/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import { useEffect, useState } from "react";
import { CategoryCard } from "./pages/Home/CategoryCard";

function App() {
  const [data, setData] = useState({
    categories: [],
    new_arrivals: [],
  });

  useEffect(() => {
    fetch('https://miralou-api.sagarlama.com/api/home')
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <div>
        {data?.categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default App;
