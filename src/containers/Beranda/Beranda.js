import React from "react";
import gambar from "../../assets/illustratitionLandingPage.svg";
import panah from "../../assets/Arrow.svg";
import "./Beranda.css";
import CardMateriList from "../../components/CardMateri/CardMateriList";
// import CardPaketList from "../../components/CardPaket/CardPaketList";
import NavbarComp from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Beranda() {
  return (
    <div className="beranda-component">
      <NavbarComp />
      <div className="beranda-container d-flex flex-column px-5 ms-5 h-25">
        <div className="beranda-title">
          <h1 className="beranda-h1 ">E-LEARNING</h1>
        </div>
        <p className="beranda-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          pretium
        </p>
        <button type="button" className="beranda-btn btn btn-warning mt-3 ms-4">
          Belajar Sekarang !
        </button>
      </div>
      <div className="beranda-dipelajari">
        <div className="container">
          <div className="beranda-jarak4"></div>
          <div className="beranda-garis"> </div>
          <p className="beranda-titlekecil">Apa yang akan dipelajari ? </p>
          <div className="beranda-jarak2"> </div>
          <div className="row ">
            {/* <div className="col ">
              <a
                className="beranda-selengkapnya text-end"
                href="/"
                target="_self"
              >
                <img src={panah} className="beranda-panah float-end" alt="panah"/>
                Selengkapnya
              </a>
              <div className="beranda-jarak"> </div>
            </div> */}
          </div>
          <div className="beranda-containers">
            <div className="container">
              {/* <h1 className="beranda-headers text-center ">Pelajaran</h1> */}
              <CardMateriList />

              <div className="beranda-jarak"> </div>
            </div>
          </div>
          <div className="beranda-containers">
            {/* <div className="beranda-container container">
              <h1 className="beranda-headers text-center">Paket</h1>
              <div className="beranda-garis"> </div>
              <CardPaketList />
              <div className="beranda-jarak"> </div>
            </div> */}
          </div>
        </div>
      <Footer />
      </div>
    </div>
  );
}
export default Beranda;
