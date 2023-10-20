import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Pages/Footer/Footer";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react"; // Import useCallback
import axios from "axios";
import { AuthContext } from "../FireBase/AuthProvider";
export const CarsContext = createContext(null);
export const ThemeContext = createContext(null);

function MainLayout() {
  const [carsData, setCarsData] = useState([]);
  const [itemOnCartData, setitemOnCartData] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  const currentUserId = user?.providerData[0]?.uid;

  const fetchCarsData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/cars");
      setCarsData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Wrap fetchItemOnCartData in useCallback to memoize it
  const fetchItemOnCartData = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/itemOnCart/${currentUserId}`
      );
      setitemOnCartData(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [currentUserId]);

  useEffect(() => {
    fetchCarsData();
    fetchItemOnCartData();
  }, [currentUserId, fetchItemOnCartData]); // Include fetchItemOnCartData in the dependencies

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  console.log(itemOnCartData);

  const contextInfo = {
    carsData,
    fetchCarsData,
    fetchItemOnCartData,
    itemOnCartData,
    setitemOnCartData,
  };
  const themeContext = {
    setTheme,
    theme,
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      <CarsContext.Provider value={contextInfo}>
        <div className="mx-auto max-w-7xl">
          <NavBar></NavBar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </CarsContext.Provider>
    </ThemeContext.Provider>
  );
}

export default MainLayout;
