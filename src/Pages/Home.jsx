import AboutUs from "../Components/AboutUs/AboutUs";
import Banar from "../Components/Banar";
import BrandCards from "../Components/BrandCards/BrandCards";
import PromoBonus from "../Components/PromoBonus/PromoBonus";
import SectionTitle from "../Components/SectionTitle";

function Home() {
  return (
    <div className="min-h-screen">
      <Banar></Banar>
      <SectionTitle title={"FEATURED CAR"}></SectionTitle>
      <BrandCards></BrandCards>
      <PromoBonus></PromoBonus>
      <AboutUs></AboutUs>
    </div>
  );
}

export default Home;
