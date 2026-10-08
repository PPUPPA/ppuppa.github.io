$(function(){
  //calendar_expand
  $('.btn_schedule_more').click(function(){
    $('.prev_schedule').addClass('is_open');
  });

  //form custom
  //placeholder
  $.fn.placeHolder = function() {
    return this.each(function() {
      var $obj = $(this),
      $input = $obj.find('.inp_txt'),
      $placeholderTxt = $obj.find('.placeholder');

      $input.each(function() {
        if ($(this).val().length) {
          $(this).addClass('focus');
        }
      });

      $input.on({
        focus: function() {
          $(this).addClass('focus');
        },
        blur: function() {
          if ($(this).val().length) {
            $(this).addClass('focus');
          } else {
            $(this).removeClass('focus');
          }
        }
      });

      $placeholderTxt.on({
        click: function() {
          $(this).next($input).addClass('focus').focus();
        }
      });
    });
  };

  $("input,textarea").keyup(function() {
    if($(this).val().length) {
      $(this).prev("span.placeholder").hide();
    } else {
      $(this).prev("span.placeholder").show();
    }
  });

  //custom select
  var select = $("select");
  select.change(function(){
    var select_name = $(this).children("option:selected").text();
    $(this).siblings("label").text(select_name);
  });
  select.focusin(function(){
    $(this).siblings("label").addClass("focus");
  });
  select.focusout(function(){
    $(this).siblings("label").removeClass("focus");
  });

  $('.inp_txt_wrap').placeHolder();
  $(".txtarea_wrap").find(".txtarea").focusin(function(){
    $(this).addClass("focus").focus();
  });
  $(".txtarea_wrap").find(".txtarea").focusout(function(){
    if($(this).val().length){
    }else{
      $(this).removeClass("focus").blur();
    }
  });

  //checkbox all select
  $(function(){
    $(".input_check_wrap #select_all").click(function(){
      if($(".input_check_wrap #select_all").is(":checked")){
        $(".input_check_wrap input[type='checkbox']").prop("checked",true);
        //하나 선택 취소 시 전체 선택 체크 해제
        $(".input_check_wrap input[type='checkbox']").click(function(){
          if($(".input_check_wrap #select_all").is(":checked")){
            if($(this).attr("id")!=="select_all"){
              $(".input_check_wrap #select_all").prop("checked",false);
            }
          }
        });
      }else{
        $(".input_check_wrap input[type='checkbox']").prop("checked",false);
      }
    });
  });
  
});