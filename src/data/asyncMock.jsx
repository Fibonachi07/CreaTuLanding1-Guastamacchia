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
      img: "../src/assets/roma.jpg"
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
    {
      id: 6,
      nombre: "TOKYO",
      precio: 27200,
      categoria: "Billeteras",
      stock: 5,
      descripcion:
        "Billetera 100% Eco cuero",
      img: "../src/assets/billetera.webp",
    },
    {
      id: 7,
      nombre: "MILÁN",
      precio: 55900,
      categoria: "Bolsos",
      stock: 5,
      descripcion:
        "100% Cuero Negro",
      img: "../src/assets/milan.webp"
    },
    {
      id: 8,
      nombre: "GENOVA",
      precio: 53100,
      categoria: "Cartera",
      stock: 0,
      descripcion:
        "100% Cuero Negro",
      img: "../src/assets/genova.webp"
    }

  ];
  

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}

export const getProductsByCategory = (categoria) => {
  return new Promise ((resolve) => {
    const filterProducts = productos.filter((prod) => prod.categoria === categoria)
    setTimeout(() => {
      resolve(filterProducts), 
      1500
    })

  })
}

export const getProductsById = (id) => {
  return new Promise ((resolve) => {
    const productById = productos.find((prod) => prod.id === parseInt(id))
    setTimeout(() => {
      resolve(productById)
    }, 2000)
  })
}