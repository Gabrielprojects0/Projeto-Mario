const botaoFecharModal = document.querySelector(".fechar-modal");
const botaoTrailer = (document.querySelector(".botao-trailer"));
console.log(botaoTrailer);
const modal = document.querySelector(".modal"); 
const video = document.getElementById("video")
console.log(video.src);
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}


botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});



botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "")
});












