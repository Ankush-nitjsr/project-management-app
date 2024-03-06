import { createContext, useState } from "react";
import { BsFileWordFill } from "react-icons/bs";
import { SiShopify, SiMailchimp, SiPaypal } from "react-icons/si";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  // main data
  const mainData = [
    {
      id: 1,
      icon: <BsFileWordFill />,
      name: "Wfx",
      messageIcon: "",
      messageCount: 2,
      description: "Develop a personalized fitness tracker app",
      members: "AM, PK, JM, KK, NM, LK, MM",
      categories: "Automation",
      tags: "#DigitalTransformation",
      nextMeeting: "in 30 minutes",
    },
    {
      id: 2,
      icon: <SiShopify />,
      name: "Shopify",
      messageIcon: "",
      messageCount: 0,
      description:
        "Introduce a cloud-based purchase/sell platform inbuilt in webapp",
      members: "AM, PK, JM, KK, NM, LK, MM",
      categories: "E-commerce, B2B",
      tags: "#OnlineShopping, #ShopFromHome",
      nextMeeting: "Tomorrow",
    },
    {
      id: 3,
      icon: <SiMailchimp />,
      name: "MailChimp",
      messageIcon: "",
      messageCount: 0,
      description: "Develop a mail app aiming for youth",
      members: "AM, PK, JM, KK, NM, LK, MM",
      categories: "SAAS, Mobile",
      tags: "#MailBuddy",
      nextMeeting: "Tomorrow",
    },
    {
      id: 4,
      icon: <SiPaypal />,
      name: "PayPal",
      messageIcon: "",
      messageCount: 7,
      description: "Design a payment ecosystem with PayPal payment option",
      members: "AM, PK, JM, KK, NM, LK, MM",
      categories: "Marketplace",
      tags: "#BuySell, #OnlinePayment",
      nextMeeting: "in 6 hours",
    },
  ];

  // set state for search brand
  const [searchBrand, setSearchBrand] = useState("");
  // all project data to be displayed, saved using use state hook
  const [allData, setAllData] = useState(mainData);

  return (
    <DataContext.Provider
      value={{ mainData, searchBrand, setSearchBrand, allData, setAllData }}
    >
      {children}
    </DataContext.Provider>
  );
}
