import { Link } from "react-router-dom";
import Banar from "../../Components/Banar";
import { useContext } from "react";
import { CarsContext } from "../../MainLayout/MainLayout";
import ItemCard from "./ItemCard";
import SectionTitle from "../../Components/SectionTitle";

function MyCart() {
  const { fetchCarsData, carsData } = useContext(CarsContext);
  // const contex = useContext(CarsContext);
  const handleDelete = (itemId) => {
    // Implement your delete logic here
    // You can use this function to remove items from the cart
  };

  return (
    <div>
      <Banar
        image={`https://i.ibb.co/QfLbhW7/pexels-hyundai-motor-group-11194874.jpg`}
        title={`Your Dream Car Awaits`}
        decpt={`Explore and find the perfect car for your needs.`}
      ></Banar>
      <div>
        <SectionTitle title={"Browse Your Selection"}></SectionTitle>

        {carsData.map((item) => (
          // <Card key={item.id} item={item} onDelete={handleDelete} />
          <ItemCard
            key={item.id}
            item={item}
            onDelete={handleDelete}
          ></ItemCard>
        ))}
      </div>
    </div>
  );
}

export default MyCart;
