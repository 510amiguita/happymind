// var limit=3;
// $('input.single-checkbox').on('change', function(evt) {
//   if($(this).siblings(':checked').length >= limit){
//     this.checked = false;
//   }
// })


$(document).ready(function(){

  $(".hiddenfirst-checkbox").hide();
  $(".hiddensecond-checkbox").hide();
  $(".hiddenthird-checkbox").hide();
  $(".hiddenfourth-checkbox").hide();
  $(".hiddenfifth-checkbox").hide();
  $(".hiddensixth-checkbox").hide();
  $(".hiddenseventh-checkbox").hide();
  // $(".hiddeneighth-checkbox").hide();
  // $(".hiddenninth-checkbox").hide();
  // $(".hiddententh-checkbox").hide();
  // $(".hidden11-checkbox").hide();
  // $(".hidden12-checkbox").hide();
  // $(".hidden13-checkbox").hide();
  // $(".hidden14-checkbox").hide();
  // $(".hidden15-checkbox").hide();
  if(document.getElementById('yes').checked) {
      $("happy feelings").show();
  } else {
      $("happy feelings").hide();
  }









});

function showOrHide(id, subclass) {
  var checked = document.getElementById(id).checked;
  if(checked) {
    $(subclass).show();
  }
  else {
    $(subclass).hide()
  }

}

function showfirsthiddencheckboxes(){
  showOrHide("afraid", ".hiddenfirst-checkbox");
};




function showsecondhiddencheckboxes(){
  showOrHide("confused", ".hiddensecond-checkbox");
};




function showthirdhiddencheckboxes(){
  showOrHide("helpless", ".hiddenthird-checkbox");
};



function showfourthhiddencheckboxes(){
  showOrHide("angry", ".hiddenfourth-checkbox");
};




function showfifthhiddencheckboxes(){
  showOrHide("indifferent", ".hiddenfifth-checkbox");
};



function showsixthhiddencheckboxes(){
  showOrHide("upset", ".hiddensixth-checkbox");
};




function showseventhhiddencheckboxes(){
  showOrHide("hurt", ".hiddenseventh-checkbox");

};




// function showeighthhiddencheckboxes(){
//   $(".hiddeneighth-checkbox").show();
// };
//
//
//
//
// function showninthhiddencheckboxes(){
//   $(".hiddenninth-checkbox").show();
// };
//
//
//
// function showtenthhiddencheckboxes(){
//   $(".hiddententh-checkbox").show();
// };
//
//
//
//
// function show11hiddencheckboxes(){
//   $(".hidden11-checkbox").show();
// };
//
//
//
//
// function show12hiddencheckboxes(){
//   $(".hidden12-checkbox").show();
// };
//
//
//
//
// function show13hiddencheckboxes(){
//   $(".hidden13-checkbox").show();
// };
//
//
//
//
// function show14hiddencheckboxes(){
//   $(".hidden14-checkbox").show();
// };
//
//
//
// function show15hiddencheckboxes(){
//   $(".hidden15-checkbox").show();
// };
//
//
// // function onclick("yes"(){
// //   if onclick("yes")
// // })
//






// var answer = confirm("Do you want to save what you imputed this session? For review purposes of course.");
// if (yes) {
//     .show
// }
// else {
//     .hide
// }
