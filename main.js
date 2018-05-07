$('path').on("click", function() {
    var n = $(this).attr("class");

    if(n == "clicked") {
    	$(this).attr("class", "");
    }
    else {
    	$(this).attr("class", "clicked");
    }
});

$("path").hover(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).attr('name'));
});
$("path").mouseleave(function(e) {
  $('#info-box').css('display','none');
  // $('#info-box').html(<div></div>);
});
// $(document).mousemove(function(e) {
//   $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
//   $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
// }).mouseover();
