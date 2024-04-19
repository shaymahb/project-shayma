
$('.images').hide();

$('.button').on('click',function(){
    $('.images').show();
    $('.cacher').hide();
     $('.bouttons').hide();
})



document.getElementById("searchButton").addEventListener("click", function() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    if (searchTerm === "solder") {
        document.getElementById("solder").style.display = "block"; 
        
    } 
});
