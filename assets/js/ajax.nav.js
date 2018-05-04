
jQuery(document).ready(function(){
  $(".collection a ").click(function(){
    $(".spinner").show();
      page=$(this).attr("href");
      $.ajax({
        url: "views/"+page,
        cache: false,
        success: function(html){
          afficher(html);
        },
        error:function(XMLHttpRequest,textStatus, errorThrown){
            alert("Errore 404, page introuvabe !!");
                //alert(textStatus);
        }
      })

    return false;
  });
});

function afficher(data){
    $(".spinner").show();
    $(".main-content").fadeOut(500,function(){
    $(".main-content").empty();
    $(".main-content").append(data);
    $(".main-content").fadeIn(500);
    $(".content-ajax").fadeOut(1000);
    $(".spinner").hide();

})

}
