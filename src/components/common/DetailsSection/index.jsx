import React, { useContext } from "react";
import Table from "../Table";
import { BsFileWordFill } from "react-icons/bs";
import { SiShopify, SiMailchimp, SiPaypal } from "react-icons/si";
import Footerbar from "../Footerbar";
import { DataContext } from "../../../contexts/dataContext";

function DetailsSection() {
  const { allData } = useContext(DataContext);

  return (
    <div className="details-section">
      <Table data={allData} />
      <Footerbar />
    </div>
  );
}

export default DetailsSection;
