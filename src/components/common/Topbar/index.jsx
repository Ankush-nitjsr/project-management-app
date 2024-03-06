import { useContext, useEffect } from "react";
import "./style.css";
import { FiSearch } from "react-icons/fi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { MdOutlineSettings } from "react-icons/md";
import { DataContext } from "../../../contexts/dataContext";

function Topbar({ title }) {
  // Save search term using context hook
  const { setSearchBrand } = useContext(DataContext);

  // get searched term
  const { searchBrand } = useContext(DataContext);

  // to handle all project data
  const { mainData } = useContext(DataContext);
  const { allData } = useContext(DataContext);
  const { setAllData } = useContext(DataContext);

  // useEffect to reapply the filter when minPrice or maxPrice changes
  useEffect(() => {
    handleSearch();
  }, [searchBrand]);

  const handleSearch = () => {
    console.log("searching by", searchBrand);
    const filteredData = allData.filter(
      (project) => project.name.toLowerCase() === searchBrand.toLowerCase()
    );
    if (filteredData.length > 0) {
      setAllData(filteredData);
    } else {
      setAllData(mainData);
    }
  };

  return (
    <div className="topbar">
      <h1>{title}</h1>
      <div className="search-section">
        <FiSearch className="search-icon" />
        <input
          placeholder="Search for brand"
          className="search-input"
          onChange={(e) => setSearchBrand(e.target.value)}
        />
        <button className="chat-btn">
          <HiOutlineChatBubbleLeftRight />
        </button>
        <button className="settings-btn">
          <MdOutlineSettings />
        </button>
      </div>
    </div>
  );
}

export default Topbar;
