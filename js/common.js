$('.first-worth-type').appear();
$('.second-worth-type').appear();


$('.first-worth-type').on('appear', function(event, $all_appeared_elements) {
	$(this).addClass('animation fade-in-up delay-0.1s');
});
$('.second-worth-type').on('appear', function(event, $all_appeared_elements) {
	$(this).addClass('animation fade-in-up delay-0.1s');
});
//calculator
function calc()
{
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var discountA;
    var discountB;
    if (a < 2) 
    {
        discountA = 0;
    }
    else if (a < 3) 
    {
        discountA = 0.05;
    }
    else if (a < 4) 
    {
        discountA = 0.1;
    }
    else if (a < 5) 
    {
        discountA = 0.15;
    }
    else  
    {
        discountA = 0.2;
    }
    if (b < 90) 
    {
        discountB = 0;
    }
    else if (b < 180) 
    {
        discountB = 0.05;
    }
    else if (b < 360) 
    {
        discountB = 0.1;
    }
    else
    {
        discountB = 0.2;
    }
    var summdicc = discountA+discountB;
    var discount = 1-summdicc;
    var summ = parseFloat(a) * parseInt(b) * 7 * discount;
    document.getElementById('summary').innerHTML = Math.ceil(summ) + "грн";
};
// UI SLIDER
(function($){
$(document).ready(function(){
 $(".calс_tab_slider").each(function(){
 var insert_val=$(this).closest(".calс_tab").find(".calс_tab_p_input_val");
 
 var curr_slide=$(this).slider({
 min:parseInt($(this).attr("data-min")),
 max:parseInt($(this).attr("data-max")),
 step:parseFloat($(this).attr("data-step")),
 value:parseInt($(this).attr("data-val")),
 stop: function(event, ui) {
 insert_val.val(curr_slide.slider("value"));
 },
 slide: function(event, ui){
 setTimeout(function(){
 insert_val.val(curr_slide.slider("value"));
 },30);
 }
 });
 
 insert_val.on("change",function(){
 var this_val=$(this).val();
 
 var tmp_1=curr_slide.slider("value");
 var tmp_2=this_val;
 
 if(tmp_1!=tmp_2){
 curr_slide.slider("value",tmp_2);
 }
 });
 
 insert_val.val($(this).attr("data-val")).trigger("change");
 
 });
});
})(jQuery)
$(document).ready(function() {
   $(".calс_tab_slider").slider({
   range:'min'});
});
// google map
    $(function() {
    $("#map").googleMap({
      zoom: 17, // Initial zoom level (optional)
      coords: [49.970427, 36.235072], // Map center (optional)
      position: [49.970427, 36.235072],
      type: "ROADMAP" // Map type (optional)
    });
    $("#map").addMarker({
      coords: [49.970427, 36.235072]
    });
  })
// ajax mailer
$(document).ready(function() {
            $("#sendm").submit(function(){
                var form = $(this);
                var error = false;
                form.find('input, button').each( function(){
                    if ($(this).val() == '') {
                        alert('Зaпoлнитe пoлe "'+$(this).attr('placeholder')+'"!');
                        error = true;
                    }
                });
                if (!error) {
                    var data = form.serialize();
                    $.ajax({
                        type: 'POST',
                        url: 'mail.php',
                        data: data,
                        beforeSend: function(data) {
                            form.find('button[type="submit"]').attr('disabled', 'disabled');
                        },
                        success: function(data){
                            if (data['error']) {
                                alert(data['error']);
                            } else {
                                alert('Письмo oтврaвлeнo!');
                            }
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        },
                        complete: function(data) {
                            form.find('button[type="submit"]').prop('disabled', false);
                        }

                    });
                }
                return false;
            });
        });