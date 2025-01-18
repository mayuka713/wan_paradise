import React from "react";
import { useNavigate } from "react-router-dom";
import  "./HospitalPage.css"; 
import HospitalImage from "../assets/images/Hospital/hospital.png";
import Header from "../Header";
import Footer from "../Footer";

const HospitalPage: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/hospitalregionsList");
    };

    return (
        <>
            <Header />
            <div className="hospital-page-container">
                <p onClick={handleClick} className="search-hospital"> 
                    全国の動物病院を探す
                </p>
                <div>
                    <img src={HospitalImage} alt="hospitalImge" className="hospitalImage"/>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HospitalPage;
