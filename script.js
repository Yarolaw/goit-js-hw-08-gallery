import arrayImages from './gallery-items.js';
const ulRef = document.querySelector(".js-gallery")

const createItemGAllary = image => {
 const liRef = document.createElement("li")
    liRef.classList.add("gallery__item")

 const linkRef = document.createElement("a")
    linkRef.classList.add("gallery__link")
    linkRef.setAttribute("href", image.original)

 const imgRef = document.createElement("img")
    imgRef.classList.add("gallery__image")
    imgRef.setAttribute("src", image.preview)
    imgRef.setAttribute("data-sourse", image.original)
    imgRef.setAttribute("alt",image.description)
    
    linkRef.appendChild(imgRef)
    liRef.appendChild(linkRef)
    
 return liRef
}

const createGallary = arrayImages.map(image => createItemGAllary(image))
ulRef.append(...createGallary)


const modalWindowRef = document.querySelector("div.lightbox")
const bigImgRef = document.querySelector(".lightbox__image")

const ulEventTarget = (event) => {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") {
        return
    }
    const funcImageRef = event.target
    const imageSource = funcImageRef.dataset.sourse
    
    setlargeImgURL(imageSource)
    modalWindowRef.classList.add('is-open')

}

function setlargeImgURL (url)  {
    bigImgRef.setAttribute("src", url)
}

ulRef.addEventListener("click", ulEventTarget)

const closeBtnRef = document.querySelector(".lightbox__button")
const closeModal = () => {
    modalWindowRef.classList.remove("is-open")
    bigImgRef.setAttribute("src", "")
}

closeBtnRef.addEventListener('click', closeModal)