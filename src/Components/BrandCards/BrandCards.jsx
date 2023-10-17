import axios from "axios";
import { useEffect, useState } from "react";

function BrandCards() {
  const [cardOfBrand, setCardOfBrand] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cardofBrandFetch = async () => {
      try {
        const response = await axios.get("carBrands.json");
        setCardOfBrand(response.data.carBrands);
        setLoading(false); // Mark loading as complete
      } catch (err) {
        setLoading(false); // Mark loading as complete even in case of an error
      }
    };
    cardofBrandFetch();
  }, []);
  console.log(cardOfBrand);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>card</p>
        </div>
      )}
    </>
  );
}

export default BrandCards;
