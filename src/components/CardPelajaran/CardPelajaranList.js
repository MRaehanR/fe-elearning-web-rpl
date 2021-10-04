import React from "react";
import CardPelajaran from "./CardPelajaran";
import LogikaDasar from "../../assets/LogikaDasar.svg";
import PemrogramanDasar from "../../assets/PemrogrammanDasar.svg";
import MobileProgramming from "../../assets/MobileProgramming.svg";
import GameProgramming from "../../assets/GameProgramming.svg";

const data = [
  {
    id: 1,
    title: "Logika Dasar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium fermentum felis id condimentum.",
    img: LogikaDasar,
    href: "/logika-dasar",
    percentage: 25,
  },
  {
    id: 2,
    title: "Pemrogramman Dasar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium fermentum felis id condimentum.",
    img: PemrogramanDasar,
    href: "/pemrogramman-dasar",
    percentage: 50,
  },
  {
    id: 3,
    title: "Mobile Programming",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium fermentum felis id condimentum.",
    img: MobileProgramming,
    href: "/mobile-programming",
    percentage: 75,
  },
  {
    id: 4,
    title: "Game Programming",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium fermentum felis id condimentum.",
    img: GameProgramming,
    href: "/game-programming",
    percentage: 100,
  },
];

function CardPelajaranList() {
  return (
    <div className="d-md-flex flex-column align-items-center">
      {data.map((d) => {
        return (
          <a href={d.href} style={{
            display: "inline-block",
            textDecoration: "none",
            marginBottom: "55px"            
          }}>
            <div className={d.style}>
              <CardPelajaran
                key={d.id}
                title={d.title}
                desc={d.desc}
                img={d.img}
                percentage={d.percentage}
              />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default CardPelajaranList;
