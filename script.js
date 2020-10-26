$(".Meme-Submit").click(function() {
    let MemesADay = Number($(".Memes-A-Day").val());
    let DeathYear = Number($(".Death-Year").val());
    $(".Meme-Result").append(` By the year you die, you will have seen ${MemesADay * 365 * (DeathYear - 2020)} memes!`);
});