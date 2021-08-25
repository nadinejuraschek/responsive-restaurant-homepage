import product1 from "../images/product1.jpg";
import product2 from "../images/product2.jpg";
import product3 from "../images/product3.jpg";
import product4 from "../images/product4.jpg";
import product5 from "../images/product5.jpg";

export interface ProductProps {
  discount?: boolean;
  img: string,
  name: string,
  price: string,
};

export const productsData: ProductProps[] = [
  {
    img: product1,
    name: "Bread",
    price: "$3,99",
  },
  {
    img: product2,
    name: "Croissant",
    price: "$2,99",
  },
  {
    discount: true,
    img: product3,
    name: "Cupcake",
    price: "$1,49",
  },
  {
    img: product4,
    name: "Macchiato",
    price: "$3,99",
  },
  {
    img: product5,
    name: "Hot Chocolate",
    price: "$3,49",
  },
];
