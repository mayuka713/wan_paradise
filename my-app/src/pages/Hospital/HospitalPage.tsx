import React from "react";
import { useNavigate } from "react-router-dom";
import "./HospitalPage.css";
import HospitalImage from "../assets/images/Hospital/hospital.png";

const HospitalPage: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/hospitalregionsList");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>wan paradise</h1>
            <p onClick={handleClick} style={{ cursor: "pointer", fontSize: "18px" }}>
                全国の病院を探す
            </p>
            <div>
                <img src={HospitalImage} alt="Hospital"/>
            </div>
        </div>
    );
};

export default HospitalPage;
