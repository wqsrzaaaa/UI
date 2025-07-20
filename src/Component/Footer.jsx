import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const column1 = [
    "Home",
    "Attorney Profiles",
    "Practice Areas",
    "Legal Disclaimer",
    "Sitemap",
  ];

  const column2 = [
    "Patents",
    "Trademarks",
    "Copyrights",
    "Internet Law",
    "Counseling and Licensing",
  ];

  const column3 = [
    "Office Locations",
    "Contact Us",
    "Diversity",
    "Privacy Policy",
    "Frequently Asked Questions",
  ];

  const renderColumn = (items) =>
    items.map((item, index) => (
      <Link
        key={index}
        to="/"
        className="text-sm text-gray-600 hover:text-red-700 transition"
      >
        {item}
      </Link>
    ));

  return (
    <footer className="w-full text-gray-700 py-10 border-t border-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="flex flex-col gap-2">{renderColumn(column1)}</div>
        <div className="flex flex-col gap-2">{renderColumn(column2)}</div>
        <div className="flex flex-col gap-2">{renderColumn(column3)}</div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Loza & Loza LLP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
