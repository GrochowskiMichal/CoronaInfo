// ******** MAIN
import Welcome from "../screens/Welcome";
import Explore from "../screens/Explore";
import Browse from "../screens/Browse";
import Product from "../screens/Product";
import Contact from "../screens/Contact";
import Linki from "../screens/Linki";
import Artykul2 from "../screens/Artykul2";
// ******** SZYBKIE REAGOWANIE
import StartScreen from "../screens/szybkie-reagowanie/StartScreen";
import NewScreen from "../screens/szybkie-reagowanie/NewScreen";
import Bliscy from "../screens/szybkie-reagowanie/Bliscy";
import Higiena from "../screens/szybkie-reagowanie/Higiena";
import Kraj from "../screens/szybkie-reagowanie/Kraj";
import Kwarantanna from "../screens/szybkie-reagowanie/Kwarantanna";
import Maska from "../screens/szybkie-reagowanie/Maska";
import Objawami from "../screens/szybkie-reagowanie/Objawami";
import Objawy from "../screens/szybkie-reagowanie/Objawy";
import Obserwuj from "../screens/szybkie-reagowanie/Obserwuj";
import Ochrona from "../screens/szybkie-reagowanie/Ochrona";
import Podejrzenie from "../screens/szybkie-reagowanie/Podejrzenie";
import Podstawowe from "../screens/szybkie-reagowanie/Podstawowe";
import Reaction from "../screens/szybkie-reagowanie/Reaction";
import Srodki from "../screens/szybkie-reagowanie/Srodki";
import Telefon from "../screens/szybkie-reagowanie/Telefon";
import Zachowaj from "../screens/szybkie-reagowanie/Zachowaj";
import Zarazony from "../screens/szybkie-reagowanie/Zarazony";


const screensArray = [
    {
        id: "welcome",
        name: "Welcome",
        data: Welcome,
    },
    {
        id: "explore",
        name: "Explore",
        data: Explore,
    },
    {
        id: "browse",
        name: "Browse",
        data: Browse,
    },
    {
        id: "product",
        name: "Product",
        data: Product,
    },
    {
        id: "startscreen",
        name: "StartScreen",
        data: StartScreen,
    },
    {
        id: "newscreen",
        name: "NewScreen",
        data: NewScreen,
    },
    {
        id: "bliscy",
        name: "Bliscy",
        data: Bliscy,
    },
    {
        id: "higiena",
        name: "Higiena",
        data: Higiena,
    },
    {
        id: "kraj",
        name: "Kraj",
        data: Kraj,
    },
    {
        id: "kwarantanna",
        name: "Kwarantanna",
        data: Kwarantanna,
    },
    {
        id: "maska",
        name: "Maska",
        data: Maska,
    },
    {
        id: "objawami",
        name: "Objawami",
        data: Objawami,
    },
    {
        id: "objawy",
        name: "Objawy",
        data: Objawy,
    },
    {
        id: "obserwuj",
        name: "Obserwuj",
        data: Obserwuj,
    },
    {
        id: "ochrona",
        name: "Ochrona",
        data: Ochrona,
    },
    {
        id: "podejrzenie",
        name: "Podejrzenie",
        data: Podejrzenie,
    },
    {
        id: "podstawowe",
        name: "Podstawowe",
        data: Podstawowe,
    },
    {
        id: "reaction",
        name: "Reaction",
        data: Reaction,
    },
    {
        id: "srodki",
        name: "Środki",
        data: Srodki,
    },
    {
        id: "telefon",
        name: "Telefon",
        data: Telefon,
    },
    {
        id: "zachowaj",
        name: "Zachowaj",
        data: Zachowaj,
    },
    {
        id: "zarazony",
        name: "Zarażony",
        data: Zarazony,
    },
    {
        id: "contact",
        name: "Contact",
        data: Contact,
    },
    {
        id: "linki",
        name: "Linki",
        data: Linki,
    },
    {
        id: "artykul2",
        name: "Artykul2",
        data: Artykul2,
    },
];


export { screensArray };