// The words Ready, Set & Go appear in succession
var ml2 = {};
ml2.opacityIn = [0,1];
ml2.scaleIn = [0.2, 1];
ml2.scaleOut = 3;
ml2.durationIn = 800;
ml2.durationOut = 600;
ml2.delay = 500;
  
anime.timeline({loop: true})
.add({
    targets: '.ml2 .letters-1',
    opacity: ml2.opacityIn,
    scale: ml2.scaleIn,
    duration: ml2.durationIn
}).add({
    targets: '.ml2 .letters-1',
    opacity: 0,
    scale: ml2.scaleOut,
    duration: ml2.durationOut,
    easing: "easeInExpo",
    delay: ml2.delay
}).add({
    targets: '.ml2 .letters-2',
    opacity: ml2.opacityIn,
    scale: ml2.scaleIn,
    duration: ml2.durationIn
}).add({
    targets: '.ml2 .letters-2',
    opacity: 0,
    scale: ml2.scaleOut,
    duration: ml2.durationOut,
    easing: "easeInExpo",
    delay: ml2.delay
}).add({
    targets: '.ml2 .letters-3',
    opacity: ml2.opacityIn,
    scale: ml2.scaleIn,
    duration: ml2.durationIn
}).add({
    targets: '.ml2 .letters-3',
    opacity: 0,
    scale: ml2.scaleOut,
    duration: ml2.durationOut,
    easing: "easeInExpo",
    delay: ml2.delay
}).add({
    targets: '.ml2',
    opacity: 0,
    duration: 500,
    delay: 500
});