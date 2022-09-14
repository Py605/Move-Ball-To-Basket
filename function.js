var colors=['#55efc4', 'blue', 'red', '#ef5777', '#05c46b', '#81ecec', '#fd79a8', '#fdcb6e', '#74b9ff', '#7d5fff', 'saddlebrown', '#0fbcf9', '#ff5e57', '#a29bfe', '#e17055'];
var box = $("#basket");

$(".add-button").click(function() {
    box.append('<div class="ball" style="background-color: ' + colors[Math.floor(Math.random()*15)] + '"></div>');
});
