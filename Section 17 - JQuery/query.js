$("h1").addClass("big-title margin");
$("button").addClass("button-group");
$("a").attr("href","https://claude.ai/new");
$("button").click(function() {
    $("h1").css("color","#A1EEBD");
    });

$("button").on("mouseover",function() {
    $("h1").fadeIn().slideUp().slideDown().animate({opacity:0.5}); 
}); 
