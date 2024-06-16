export const productos = [
    {
      id: 1,
      nombre: "CAGLIARI",
      precio: 8500,
      categoria: "Bolsos",
      stock: 5,
      descripcion:
        "100% Cuero Negro",
      img: "../src/assets/caligari.jpg",
    },
    {
      id: 2,
      nombre: "ROMA",
      precio: 13000,
      categoria: "Bolsos",
      stock: 5,
      descripcion:
        "100% Cuero Negro",
      img: "../src/assets/roma.jpg",
    },
    {
      id: 3,
      nombre: "AMALFI",
      precio: 8900,
      categoria: "Carteras",
      stock: 5,
      descripcion:
        "100% Cuero. Ideal para guardar tu celular, billetera y documentación",
      img: "../src/assets/amalfi.jpg",
    },
    {
      id: 4,
      nombre: "TURIN",
      precio: 9900,
      categoria: "Carteras",
      stock: 5,
      descripcion:
        "100% Cuero. Ideal para guardar tu celular, billetera y documentación",
      img: "../src/assets/turin.jpg",
    },
    {
      id: 5,
      nombre: "LETINO",
      precio: 14900,
      categoria: "Billeteras",
      stock: 5,
      descripcion:
        "Billetera con tarjetero",
      img: "../src/assets/letino.jpg",
    },
  ];
  

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}