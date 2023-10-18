import { Link } from "react-router-dom";
import Banar from "../../Components/Banar";
import { useContext } from "react";
import { CarsContext } from "../../MainLayout/MainLayout";
import ItemCard from "./ItemCard";
import SectionTitle from "../../Components/SectionTitle";
import swal from "sweetalert";
import axios from "axios";

function MyCart() {
  const { fetchCarsData, carsData, fetchItemOnCartData, itemOnCartData } =
    useContext(CarsContext);

  return (
    <div>
      <Banar
        image={`https://i.ibb.co/QfLbhW7/pexels-hyundai-motor-group-11194874.jpg`}
        title={`Your Dream Car Awaits`}
        decpt={`Explore and find the perfect car for your needs.`}
      ></Banar>
      <div>
        <SectionTitle title={"Browse Your Selection"}></SectionTitle>

        {itemOnCartData.map((item) => (
          // <Card key={item.id} item={item} onDelete={handleDelete} />
          <ItemCard key={item._id} item={item}></ItemCard>
        ))}
      </div>
    </div>
  );
}

export default MyCart;
