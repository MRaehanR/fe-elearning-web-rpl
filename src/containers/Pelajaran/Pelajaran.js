import React from "react";
import CardPelajaranList from "../../components/CardPelajaran/CardPelajaranList";
import foto from "../../assets/BukuPelajaran.svg";

function Pelajaran() {
  return (
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
  );
}

export default Pelajaran;
