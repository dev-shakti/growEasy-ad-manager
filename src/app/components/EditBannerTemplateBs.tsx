"use client";
import React, { useState } from 'react';
import { Banner } from "../types";
import { FiX } from 'react-icons/fi';

interface EditBannerTemplateBsProps {
    banner: Banner; // Current banner being edited
    onSave: (updatedBanner: Banner) => void; // Function to save the updated banner
    onClose: () => void; // Function to close the edit modal
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({ banner, onSave, onClose }) => {
  // Local state for form fields, initialized with the values from the current banner
  const [title, setTitle] = useState(banner.title);
  const [description, setDescription] = useState(banner.description);
  const [cta, setCta] = useState(banner.cta);
  const [image, setImage] = useState(banner.image);
  const [background, setBackground] = useState(banner.background);

  // Function to handle saving the updated banner
  const handleSave = () => {
    // Create an updated banner object with the new values
    const updatedBanner: Banner = {
      ...banner,
      title,
      description,
      cta,
      image,
      background
    };
    // Call onSave with the updated banner
    onSave(updatedBanner);
  };

  return (
    // Modal container with fixed positioning
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white w-full md:w-1/2 p-4 rounded-lg">
        {/* Close button to exit the modal */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <FiX size={24} />
        </button>
        <h2 className="text-xl font-bold mb-4">Edit Banner</h2>
        
        {/* Form fields for editing banner details */}
        <label className="block mb-2">
          Title
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="w-full border p-2 rounded" 
          />
        </label>
        
        <label className="block mb-2">
          Description
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="w-full border p-2 rounded"
          ></textarea>
        </label>
        
        <label className="block mb-2">
          CTA (Call to Action)
          <input 
            type="text" 
            value={cta} 
            onChange={(e) => setCta(e.target.value)} 
            className="w-full border p-2 rounded" 
          />
        </label>
        
        <label className="block mb-2">
          Image URL
          <input 
            type="text" 
            value={image} 
            onChange={(e) => setImage(e.target.value)} 
            className="w-full border p-2 rounded" 
          />
        </label>
        
        <label className="block mb-2">
          Background URL
          <input 
            type="text" 
            value={background} 
            onChange={(e) => setBackground(e.target.value)} 
            className="w-full border p-2 rounded" 
          />
        </label>
        
        {/* Buttons for cancelling or saving the changes */}
        <div className="flex justify-end space-x-2 mt-4">
          <button 
            onClick={onClose} 
            className="bg-gray-500 text-white py-1 px-4 rounded"
          >
            Cancel
          </button>
          <button 
            onClick={handleSave} 
            className="bg-blue-500 text-white py-1 px-4 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditBannerTemplateBs;

