import React from "react";
import CardMateri from "./CardMateri";
import LogikaDasar from "../../assets/LogikaDasar.svg";
import PemrogramanDasar from "../../assets/PemrogrammanDasar.svg";
import MobileProgramming from "../../assets/MobileProgramming.svg";
import GameProgramming from "../../assets/GameProgramming.svg";

const data = [
  {
    id: 1,
    title: "Mobile Programming",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium fermentum felis id condimentum.",
    img: LogikaDasar,
    href: "/logika-dasar",
  },
  {
    id: 2,
    title: "Web Programming",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium fermentum felis id condimentum.",
    img: PemrogramanDasar,
    href: "/pemrogramman-dasar",
    style: "pt-md-4",
  },
  {
    id: 3,
    title: "Game Programming",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium fermentum felis id condimentum.",
    img: MobileProgramming,
    href: "/mobile-programming",
  },
  {
    id: 4,
    title: "Game Programming",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium fermentum felis id condimentum.",
    img: GameProgramming,
    href: "/game-programming",
    style: "pt-md-4",
  },
];

function CardMateriList() {
  return (
    <div className="d-md-flex justify-content-center text-center">
      {data.map((d) => {
        return (
          <div className={d.style}>
            <CardMateri
              key={d.id}
              title={d.title}
              desc={d.desc}
              img={d.img}
              href={d.href}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CardMateriList;
