import refs from "./refs";
import stringHandler from "./templateString"


export function onSubmit(event) {
    event.preventDefault();
    const value = refs.input.value;

    refs.list.insertAdjacentHTML('beforeend', stringHandler(value));

    const localData = JSON.parse(localStorage.getItem("listNotes"));

    localData.push(value);

    localStorage.setItem("listNotes", JSON.stringify(localData));

    refs.input.value = "";

}