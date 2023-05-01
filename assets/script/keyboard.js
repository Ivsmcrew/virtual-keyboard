import * as CONST from "../script/constants.js"
import { Button } from "../script/button.js"

export { Keyboard } 

class Keyboard {
    constructor() {
        this.createKeyBoard();
    }
 
    createKeyBoard() {
        let main = document.createElement("main");
        main.className = "main";
        document.body.prepend(main);

        let header = document.createElement("h1");
        header.className = "header";
        header.innerText = "RSS virtual keyboard";
        document.querySelector(".main").append(header);

        let textarea = document.createElement("textarea");
        textarea.className = "textarea";
        textarea.id = "textarea";
        textarea.name = "textarea";
        textarea.rows = "33";
        textarea.cols = "100";
        document.querySelector(".main").append(textarea);

        let sectionKeyboard = document.createElement("section");
        sectionKeyboard.className = "keyboard";
        document.querySelector(".main").append(sectionKeyboard);

        let paragraph = document.createElement("p");
        paragraph.className = "about";
        paragraph.insertAdjacentHTML("afterbegin", "Клавиатура создана в операционной системе Windows<br>Для переключения языка комбинация: левыe ctrl + alt");
        document.querySelector(".main").append(paragraph);
    }
}