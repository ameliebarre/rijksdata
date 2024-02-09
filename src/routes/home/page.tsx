import Header from "../../components/Header/Header";
import HomeGallery from "../../components/HomeGallery/HomeGallery";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./page.css";

const Homepage = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <HomeGallery />
    </>
  );
};

export default Homepage;
