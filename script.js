const item = document.querySelector(".item")
const deleteIt = document.querySelector("#delete")
const name = document.querySelector(".name")
const showModal = document.querySelector("#show-modal")
const modalContainer = document.querySelector(".modal-container")
const form = document.querySelector("#bookmark-form")
const bookmarksContainer = document.querySelector("#bookmarks-container")
const overlay = document.querySelector(".overlay")
const closeM = document.querySelector("#close-modal")
let save = document.querySelector("#save")
let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")


function deleteBookmark() {
    item.remove("name")
}

function addBookmark(e) {
    e.preventDefault()
    let div1 = document.createElement("div")
    div1.classList.add("item")
    bookmarksContainer.appendChild(div1)

    let div2 = document.createElement("div")
    div2.classList.add("name")
    div1.appendChild(div2)

    let image = document.createElement("img")
    image.src="favicon.png"
    div2.appendChild(image)

    let link = document.createElement("a")
    link.innerText = input1.value
    link.href = input2.value
    localStorage.setItem('link', input1.value)
    localStorage.setItem('linkhref', input2.value)
    let title = input1.value
    let address = input2.value
    if(!address.includes('https://', 'http://')) {
        link.href =  `https://${address}`
    }
    link.style.color = "var(--primary-color)"
    div2.appendChild(link)

    let fontIcon = document.createElement("i")
    fontIcon.classList.add("fa-solid")
    fontIcon.classList.add("fa-delete-left")
    
    div2.appendChild(fontIcon)
    fontIcon.addEventListener("click", e => {
       bookmarksContainer.removeChild(div1)
    })
}

function modalShow() {
    
    overlay.hidden = false
    modalContainer.hidden = false
    modalContainer.classList.add("active")

}

function closeModal() {
    overlay.hidden = true
    modalContainer.hidden = true
    modalContainer.classList.remove("active")
}

function restoreBookmark() {
    if(localStorage.getItem('link') && localStorage.getItem('linkhref')) {
        localStorage.getItem('link')
        localStorage.getItem('linkhref')
    }


}

function saveBookmark() {
    localStorage.setItem('link', input1.value)
    localStorage.setItem('linkhref', input2.value)
}

restoreBookmark()
deleteIt.addEventListener('click', deleteBookmark)
showModal.addEventListener('click', modalShow)
closeM.addEventListener('click', closeModal)
form.addEventListener('submit', addBookmark)
save.addEventListener('click', saveBookmark)