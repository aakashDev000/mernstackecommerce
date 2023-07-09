import { BehaviorSubject } from "rxjs";
import img1 from "../imgutils/products/img1.jpg";
import img2 from "../imgutils/products/img2.jpg";
import img3 from "../imgutils/products/img3.jpg";
import img4 from "../imgutils/products/img4.jpg";
import img5 from "../imgutils/products/img5.jpg";
import img6 from "../imgutils/products/img6.jpg";
import img7 from "../imgutils/products/img7.jpg";
import img8 from "../imgutils/products/img8.jpg";
import * as uuid from "uuid";

const createRandomNumber = () => Math.floor(Math.random() * 50);
const createRandomNumberWithParams = (max: number) =>
  Math.floor(Math.random() * max);

export const ecommerceStoreInitialState = {
  sellingItemList: [
    {
      img: img1,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      prize: `$${createRandomNumberWithParams(500)}`,
      count: createRandomNumber(),
      uniqId: uuid.v4(),
    },
    {
      img: img2,
      name: "Apple Watch Ultra [GPS + Cellular 49 mm] Smart Watch",
      prize: `$${createRandomNumberWithParams(500)}`,
      count: createRandomNumber(),
      uniqId: uuid.v4(),
    },
    {
      img: img3,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      prize: `$${createRandomNumberWithParams(500)}`,
      count: createRandomNumber(),
      uniqId: uuid.v4(),
    },
    {
      img: img4,
      name: "Samsung Galaxy M14 5G (Berry Blue, 6GB, 128GB Storage) ",
      prize: `$${createRandomNumberWithParams(500)}`,
      count: createRandomNumber(),
      uniqId: uuid.v4(),
    },
    {
      img: img5,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      prize: `$${createRandomNumberWithParams(500)}`,
      count: createRandomNumber(),
      uniqId: uuid.v4(),
    },
    {
      img: img6,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      prize: `$${createRandomNumberWithParams(500)}`,
      count: createRandomNumber(),
      uniqId: uuid.v4(),
    },
    {
      img: img7,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      prize: `$${createRandomNumberWithParams(500)}`,
      count: createRandomNumber(),
      uniqId: uuid.v4(),
    },
    {
      img: img8,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      prize: `$${createRandomNumberWithParams(500)}`,
      count: createRandomNumber(),
      uniqId: uuid.v4(),
    },
    {
      img: img8,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      prize: `$${createRandomNumberWithParams(500)}`,
      count: createRandomNumber(),
      uniqId: uuid.v4(),
    },
    {
      img: img8,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      prize: `$${createRandomNumberWithParams(500)}`,
      count: createRandomNumber(),
      uniqId: uuid.v4(),
    },
    {
      img: img8,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      prize: `$${createRandomNumberWithParams(500)}`,
      count: createRandomNumber(),
      uniqId: uuid.v4(),
    },
    {
      img: img8,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      prize: `$${createRandomNumberWithParams(500)}`,
      count: createRandomNumber(),
      uniqId: uuid.v4(),
    },
  ],
  cartItemList: [],
};

export const ecommercSubscription = new BehaviorSubject(
  ecommerceStoreInitialState
);

export const ecommercSubscription$ = () => ecommercSubscription.asObservable();
