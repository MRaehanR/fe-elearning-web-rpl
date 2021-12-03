import React from "react";
import './Pelajaran.css'
import CardPelajaranList from "../../components/CardPelajaran/CardPelajaranList";
import foto from "../../assets/BukuPelajaran.svg";
import NavbarComp from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Pelajaran() {
  return (

    <div className="pelajaran-component">
    <NavbarComp/>
    <div className={`d-flex flex-column align-items-center`}>
      <div>
        <div className="mt-5 mb-5">
          <img src={foto} className="d-inline " />
          <h2 className="d-inline ms-4">Apa yang akan dipelajari ?</h2>
        </div>

        <div className="pb-5">
          <CardPelajaranList />
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Pelajaran;
