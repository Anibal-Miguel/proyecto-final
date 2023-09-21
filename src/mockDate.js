import vinos from "./imagen/vinos.jpg"
import cervezas from "./imagen/cervezas.jpg"
import comidasespeciales from "./imagen/ComidaEspeciales.jpg"
import comidasaludable from "./imagen/ComidaSaludable.jpg"
import postres from "./imagen/Postres.jpg"
import carnes from "./imagen/carnes.jpg"
import pescado from "./imagen/Pescado.jpg"
import comidaniños from "./imagen/comidaniños.jpg"


const mockData = [
    {
        src: vinos,
        title:" Vinos de Bodega ",
        description: "Contamos con una variedad de vinos de bodegas Salteñas, Mendocinas, Sanjuaninas y de exportacion",
        cat: "Bebidas",
        price: 500-30000,
        stock: 100,
        notAvailablestart: new Date(2023,3,10).getTime(),
        notAvailableend: new Date(2023,3,10).getTime(),
    },
    {
        src: cervezas,
        title: " Cervezas",
        description: "Contamos con una variedad de cervezas",
        cat: "Bebidas",
        price: 1500,
        stock: 20,
        notAvailablestart: new Date(2023,3,10).getTime(),
        notAvailableend: new Date(2023,3,10).getTime(),
    },
    {
        src: comidasespeciales,
        title: " Comidas Especiales ",
        description: " Contamos un Chef que preparan Platos de otras Localidades ",
        cat: "Comida",
        price: 8000,
        stock: 20,
        notAvailablestart: new Date(2023,3,10).getTime(),
        notAvailableend: new Date(2023,3,10).getTime(),
    },
    {
        src: comidasaludable,
        title:"Salud",
        description:" Tenemos Chef que preparan comidas sanas ",
        cat: "Comida",
        price: 7000,
        stock: 20,
        notAvailablestart: new Date(2023,3,10).getTime(),
        notAvailableend: new Date(2023,3,10).getTime(),
    },
    {
        src: postres,
        title: "Postres",
        description: "Contamos con una varidad de 20 postres especiales",
        cat: "comida",
        price: 2000,
        stock: 10,
        notAvailablestart: new Date(2023,3,10).getTime(),
        notAvailableend: new Date(2023,3,10).getTime(),
    },
    {
        src: carnes,
        title: "Carnes",
        description: "Contamos con una variedad de Cortes de Carnes ",
        cat: "comida",
        price: 1000-10000,
        stock: 100,
        notAvailablestart: new Date(2023,3,10).getTime(),
        notAvailableend: new Date(2023,3,10).getTime(),
    },
    {
        src: pescado,
        title: "Pescados",
        description: "Contamos con una gran varidad de peces de mar",
        cat: "comida",
        price: 1000-200000,
        stock: 200,
        notAvailablestart: new Date(2023,3,10).getTime(),
        notAvailableend: new Date(2023,3,10).getTime(),
    },
    {
        src: comidaniños,
        title: "Comidas Para Niños",
        description: "Contamos con varidad de comida para niños",
        cat: "comida",
        price: 800-5000,
        stock: 50,
        notAvailablestart: new Date(2023,3,10).getTime(),
        notAvailableend: new Date(2023,3,10).getTime(),
    },

];

export const chips= [
    {Key:0, label:"Cancellation Flexibility"},
    {Key:1, label:"Standard rooms"},
    {Key:2, label:"Executive rooms"},
    {Key:3, label:"Access to lounge"},
    {Key:4, label:"more filters"},
];

export default mockData;