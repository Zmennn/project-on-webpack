import { onSubmit } from "./js/hendler"
import refs from "./js/refs"
import defData from "./data/default-data"
import stringHandler from "./js/templateString"
//подключаем стили
import "./styles/style.css";

const localStorageItems = JSON.parse(localStorage.getItem("listNotes"));

const items = localStorageItems ? localStorageItems : defData;


const markup = items.map((item) => stringHandler(item)).join("")

console.log("rr", markup);
refs.list.insertAdjacentHTML('beforeend', markup);
refs.form.addEventListener('submit', onSubmit)