import AboutUs from "../Components/AboutUs/AboutUs";
import Banar from "../Components/Banar";
import BrandCards from "../Components/BrandCards/BrandCards";
import ProductRevew from "../Components/ProductRevew/ProductRevew";
import PromoBonus from "../Components/PromoBonus/PromoBonus";
import SectionTitle from "../Components/SectionTitle";

function Home() {
  return (
    <div className="min-h-screen">
      <Banar></Banar>
      <SectionTitle title={"FEATURED CAR"}></SectionTitle>
      <BrandCards></BrandCards>
      <SectionTitle title={"Promo Bonus"} />
      <PromoBonus></PromoBonus>
      <SectionTitle title={"About Us"} />
      <AboutUs></AboutUs>
      <ProductRevew></ProductRevew>
    </div>
  );
}

export default Home;
