"use client";
import React from "react";
import { Banner } from "../types";
import { FiEdit } from 'react-icons/fi';

interface BannerImageCompProps {
  banner: Banner; // Banner object containing the data to be displayed
  onEdit: (banner: Banner) => void; // Function to trigger editing the banner
}

const BannerImageComp: React.FC<BannerImageCompProps> = ({ banner, onEdit }) => {
  return (
    <div
      className="relative w-full p-4 mb-4 text-white shadow-lg rounded-lg"
      style={{
        backgroundImage: `url(${banner.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10" style={{ color: banner.colorScheme.text }}>
        <div className="absolute top-1 right-2 cursor-pointer bg-white p-2 rounded-full" onClick={() => onEdit(banner)}>
          <FiEdit  className="text-gray-400 hover:text-gray-500" size={20} />
        </div>
        <h2 className="text-xl font-bold mb-2">{banner.title}</h2>
        <p className="mb-2">{banner.description}</p>
        <button
          style={{ backgroundColor: banner.colorScheme.button }}
          className=" text-white py-1 px-4 rounded mb-6 cursor-pointer"
        >
          {banner.cta}
        </button>
        <img src={banner.image} alt={banner.title} className="w-full h-auto rounded-lg shadow-lg object-cover" />
      </div>
    </div>
  );
};

export default BannerImageComp;
