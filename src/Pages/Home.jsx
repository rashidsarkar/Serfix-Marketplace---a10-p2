import Banar from "../Components/Banar";
import BrandCards from "../Components/BrandCards/BrandCards";
import SectionTitle from "../Components/SectionTitle";

function Home() {
  return (
    <div className="min-h-screen">
      <Banar></Banar>
      <SectionTitle title={"FEATURED CAR"}></SectionTitle>
      <BrandCards></BrandCards>
    </div>
  );
}

export default Home;
