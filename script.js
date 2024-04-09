let addBtn = document.querySelector(".btn");
let main = document.querySelector(".main");
let data = [];

const saveNote = () => {
    let text = document.querySelectorAll("#note");
    text.forEach(element => {
        if(!data.includes(element.value)){
            data.push(element.value);
        }
    })
    console.log(data);
     if(data.length == ""){
        localStorage.removeItem("note");
    }else{
        localStorage.setItem("note",JSON.stringify(data));
    }
}

const addNote = (note = "") => {
    let box = document.createElement("div");
    box.classList.add("box");

    box.innerHTML = `
    <div class="option">
        <i class="fa-solid fa-save"></i>
        <i class="fa-solid fa-trash"></i>
    </div>
    <textarea id="note" cols="30" rows="10">${note}</textarea>
    `;

    main.append(box);

    let remove = box.querySelector(".fa-trash");
    remove.addEventListener("click", () => {
        box.remove();
        saveNote();
    })

    let save = box.querySelector(".fa-save");
    save.addEventListener("click", () => saveNote());
}

addBtn.addEventListener("click", () => addNote());

const showNote = () => {
    let isNote = JSON.parse(localStorage.getItem("note"));
        if(isNote === null){
            addNote();
        }else{
            isNote.forEach(note => {
                addNote(note);
            })
        }
}

showNote();
