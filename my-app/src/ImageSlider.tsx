import React, { useState } from "react";
import "./ImageSlider.css";
import e from "express";

interface ImagesSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImagesSliderProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 左の矢印
  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      console.log("New Prev Index:", newIndex); // 状態更新後のインデックスを確認
      return newIndex;
    });
  };

  // 右の矢印
  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      console.log("New Next Index:", newIndex); // 状態更新後のインデックスを確認
      return newIndex;
    });
  };

  return (
    <div className="image-slider-container-dogrun">
      <button onClick={handlePrev} className="arrow-button">
        &lt;
      </button>

      <button onClick={handleNext} className="arrow-button">
        &gt;
      </button>

      {/* 画像表示 */}
      <div className="image-dogrun">
        {images.map((img, index) => {
          console.log("Image URL:", img); // 画像URLを確認
          return (
            <img
              key={index}
              src={img}
              alt={`Image ${index + 1}`}
              className={`slider-image ${
                currentImageIndex === index ? "active" : ""
              }`}
            />
          );
        })}
      </div>
      {/* 右の矢印 */}
      <button onClick={handleNext} className="arrow-button">
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
