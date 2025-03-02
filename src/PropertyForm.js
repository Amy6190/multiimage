import React, { useState } from "react";
import axios from "axios";

const PropertyForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    images.forEach((image) => formData.append("images", image));

    try {
      const res = await axios.post("http://localhost:5000/api/properties", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(res.data.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Upload Property</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Property Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="file" multiple onChange={handleImageChange} accept="image/*" />
        <button type="submit">Upload Property</button>
      </form>
      <div>
        {previewImages.map((src, index) => (
          <img key={index} src={src} alt="Preview" style={{ width: "100px", height: "100px", margin: "10px" }} />
        ))}
      </div>
    </div>
  );
};

export default PropertyForm;
