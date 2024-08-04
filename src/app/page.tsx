"use client";
import React, { useState } from "react";
import bannersData from "./data/banners.json";
import BannerImageComp from "./components/BannerImageComp";
import EditBannerTemplateBs from "./components/EditBannerTemplateBs";
import { Banner } from "./types";

export default function Home() {
  // Initialize state for banners using data from banners.json
  const [banners, setBanners] = useState<Banner[]>(bannersData);

  // State for currently editing banner, initially null
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);

  // Function to handle edit button click, sets the editingBanner state
  const handleEditClick = (banner: Banner) => {
    setEditingBanner(banner);
  };

  // Function to handle save action from the edit modal
  const handleSave = (updatedBanner: Banner) => {
    // Update the banners array with the edited banner
    const updatedBanners = banners.map(b => b.id === updatedBanner.id ? updatedBanner : b);
    setBanners(updatedBanners);
    setEditingBanner(null); // Close the modal
  };

  // Function to handle closing the edit modal without saving
  const handleClose = () => {
    setEditingBanner(null);
  };

  return (
    <main className="p-4">
      <div className="max-w-[1170px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {banners.map(banner => (
          // Render BannerImageComp for each banner
          <BannerImageComp key={banner.id} banner={banner} onEdit={handleEditClick} />
        ))}
      </div>
      {editingBanner && (
        // Render EditBannerTemplateBs modal if a banner is being edited
        <EditBannerTemplateBs
          banner={editingBanner}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </main>
  );
}
