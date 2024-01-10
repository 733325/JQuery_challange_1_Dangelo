$(document).ready(() => {

$('.hint-box').on('click', () => {
    $('.hint').slideToggle(450);
})

$('.wrong-answer-one').on('click', () => {
    $('.wrong-text-one').fadeOut(600);
    $('.frown').show();
})
$('.wrong-answer-two').on('click', () => {
    $('.wrong-text-two').fadeOut(600);
    $('.frown').show();
})
$('.wrong-answer-three').on('click', () => {
    $('.wrong-text-three').fadeOut(600);
    $('.frown').show();
})
$('.correct-answer').on('click', () => {
    $('.frown').hide();
    $('.smiley').show(350);
    $('.wrong-answer-one').hide(250);
    $('.wrong-answer-two').hide(250);
    $('.wrong-answer-three').hide(250);
})


});
