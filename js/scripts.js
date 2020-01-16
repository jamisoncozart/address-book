$(document).ready(function(){
  $("#input").submit(function(){
    var name = $("#name").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var address = $("#address").val();
    $("#nameList").append("<ul id='nameUl'><span id='nameHidden'>" + name + "</span><li>" + phone + "</li><li>" + email + "</li><li>" + address + "</li></ul>");
    $("#nameUl").click(function(){
      $(this).find("li").show();
    });
    event.preventDefault();  
  });
});