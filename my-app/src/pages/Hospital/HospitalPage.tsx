import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HospitalPage.module.css"; 
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
            <div className="dogrun-page-container">
                <button onClick={handleClick} className={styles.searchHospital}> 
                    全国の病院を探す
                </button>
                <div>
                    <img src={HospitalImage} alt="Hospital-img" className={styles.hospitalImg} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HospitalPage;
