"use client";
import React, { useState } from "react";
import { Banner } from "../types";
import { FiX } from "react-icons/fi";
import BannerImageComp from "./BannerImageComp";

const imageList = [
  "https://media.istockphoto.com/id/921504204/photo/women-are-shopping-in-the-summer-she-is-using-a-credit-card-and-enjoys-shopping.jpg?s=2048x2048&w=is&k=20&c=WZxs8DWyc9uKXoU2TGS_ziFH4dyttE3StJmNwMx9lPE=",
  "https://media.istockphoto.com/id/1350399117/photo/two-beautiful-young-women-enjoying-shopping-in-the-city-street-happy-and-smiling-sisters.jpg?s=2048x2048&w=is&k=20&c=7mDRKEeDngoJtd9Di91mhzLkBfcVZUgYxYEBDs8qYY8=",
  "https://media.istockphoto.com/id/1221319911/photo/girl-make-up-with-a-large-cosmetics-bag.jpg?s=2048x2048&w=is&k=20&c=JErsy2axpOxrYLiX_VJ7pH9zqGj-JMM3yaX9kxzoL78=",
  "https://media.istockphoto.com/id/1257160146/photo/beautiful-excited-happy-young-shopaholic-asian-woman-wearing-sungalsses-and-floppy-hat-posing.jpg?s=2048x2048&w=is&k=20&c=ZB26GZwPc3UOwqcRKrcIFowClb3m0tvQvWgv4Uexvig=",
  "https://media.istockphoto.com/id/1169378197/photo/stylish-shopaholic-with-purchases.jpg?s=2048x2048&w=is&k=20&c=ggG8QLFfzzIgNECne4F5z99qT7f2K4Ar-aOUQunAV7s=",
  "https://media.istockphoto.com/id/1352427885/photo/full-length-profile-photo-of-carefree-charming-girl-look-empty-space-jumping-isolated-on.jpg?s=2048x2048&w=is&k=20&c=nB9HQpABppwIRmM-RInsrZ9q3cplRPGxSLq4BwlVZeM=",
  "https://media.istockphoto.com/id/675267902/photo/brunette-girl-near-wooden-wall-with-red-backpack.jpg?s=1024x1024&w=is&k=20&c=gdlNHA7OgIzT7j2oSFH8X1xKVG3R0s2Y8GhYFcQo7dA=",
  "https://media.istockphoto.com/id/1210054184/photo/joyful-pretty-asian-girl-carrying-shopping-bags-with-summer-dress-and-enjoys-shopping.jpg?s=1024x1024&w=is&k=20&c=u4eml1fdzl8OCWv0b2FI5yDSWyBttOPUOHy9hTcFPEA=",
];

interface EditBannerTemplateBsProps {
  banner: Banner; // Current banner being edited
  onSave: (updatedBanner: Banner) => void; // Function to save the updated banner
  onClose: () => void; // Function to close the edit modal
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({
  banner,
  onSave,
  onClose,
}) => {
  // Local state for form fields, initialized with the values from the current banner
  const [title, setTitle] = useState(banner.title);
  const [description, setDescription] = useState(banner.description);
  const [image, setImage] = useState(banner.image);

  // Function to handle saving the updated banner
  const handleSave = () => {
    // Create an updated banner object with the new values
    const updatedBanner: Banner = {
      ...banner,
      title,
      description,
      image,
    };
    // Call onSave with the updated banner
    onSave(updatedBanner);
  };

  return (
    // Modal container with fixed positioning
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="relative bg-white w-full md:w-1/2 p-4 rounded-lg">
        {/* Close button to exit the modal */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <FiX size={24} />
        </button>

        {/* Form fields for editing banner details */}
        <div className="flex justify-center">
          <div className="relative  my-4 w-60 ">
            <img
              src={image}
              alt={title}
              className="w-full h-auto rounded-lg object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 rounded-lg p-4">
              <h2 className="text-white text-lg font-bold mb-2">{title}</h2>
              <p className="text-white text-sm">{description}</p>
              <button className="bg-slate-950 mt-2 text-sm text-white py-1 px-4 rounded mb-6 cursor-pointer">
                Explore
              </button>
            </div>
          </div>
        </div>

        <div className="block mb-4">
          <span className="text-gray-500 block mb-2">Select Image</span>
          <div className="overflow-x-auto flex space-x-2 pb-2 w-full">
            {imageList.map((img) => (
              <div
                key={img}
                onClick={() => setImage(img)}
                className={`flex-shrink-0 w-20 h-20 bg-cover bg-center rounded-full cursor-pointer border-2 ${
                  image === img ? "border-blue-500" : "border-transparent"
                }`}
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            ))}
          </div>
        </div>

        <label className="block mb-2">
          <span className="text-gray-500">Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </label>

        <label className="block mb-2">
          <span className="text-gray-500"> Description</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded resize-none"
          ></textarea>
        </label>

        {/* Buttons for cancelling or saving the changes */}
        <div className="flex flex-col gap-4 md:flex-row justify-end space-x-2 mt-4">
          <button
            onClick={handleSave}
            className="bg-slate-600 hover:bg-slate-700 transition duration-300 ease-in-out text-white py-1 px-4 rounded"
          >
            Done
          </button>
          <a
            href={image} 
            download={`banner_${title}.jpg`} 
            className="bg-transparent text-slate-600 hover:text-slate-800 transition duration-300 ease-in-out py-2 px-4 rounded w-full text-center flex items-center justify-center"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
