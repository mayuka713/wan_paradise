import React from "react";
import "./Section.css";

interface SectionProps {
  title: string;
  image: string;
  alt: string;

}

const Section: React.FC<SectionProps> = ({ title,image,alt }) => {
  return (
    <div className="section">
      <h2 className="section-title">{title}</h2>
      <div className="section-image-container">
        <img src={image} alt={alt} className="section-image" />
      </div>
    </div>
  );
};

export default Section;