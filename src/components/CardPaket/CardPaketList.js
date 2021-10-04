import React from "react";
import CardPaket from "./CardPaket";

const data = [
  {
    id: 1,
    header: "UI/UX Design",
    title: "Belajar Figma UI/UX",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
    diskon: "200.000",
    harga: "100.000",
    href: "/figma",
  },
  {
    id: 2,
    header: "Web Programming",
    title: "Belajar Layout",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium fermentum felis id condimentum.",
    diskon: "120.000",
    harga: "75.000",
    href: "/web",
  },
  {
    id: 3,
    header: "Game Programming",
    title: "Belajar 3D Modelling",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium fermentum felis id condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium fermentum felis id condimentum.",
    diskon: "250.000",
    harga: "130.000",
    href: "/game",
  },
  {
    id: 4,
    header: "Mobile Programming",
    title: "Belajar Recyclerview",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium fermentum felis id condimentum.",
    diskon: "150.000",
    harga: "50.000",
    href: "/android",
  },
];

function CardPaketList() {
  return (
    <div className="d-md-flex justify-content-center text-center">
      {data.map((d) => {
        return (
          <div>
            <CardPaket
              key={d.id}
              header={d.header}
              title={d.title}
              desc={d.desc}
              diskon={d.diskon}
              harga={d.harga}
              href={d.href}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CardPaketList;
