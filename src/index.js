import { onSubmit } from "./js/hendler"
import refs from "./js/refs"
import defData from "./data/default-data"
import stringHandler from "./js/templateString"
//подключаем стили
import "./styles/style.css";

console.log(defData);
console.log(JSON.stringify(defData));

if (!localStorage.getItem("listNotes")) {
    localStorage.setItem("listNotes", JSON.stringify(defData))
};

const localStorageItems = JSON.parse(localStorage.getItem("listNotes"));

const markup = localStorageItems.map((item) => stringHandler(item)).join("")

refs.list.insertAdjacentHTML('beforeend', markup);
refs.form.addEventListener('submit', onSubmit)