
function createArray(length, value){
  var x = []; //We have created a new array and put it in variable x
  for(i = 0; i < length; i++) { //This is telling us how many times to itterate through the forloop, which is on the following line, also i++ mean i=i+1
    x.push(value);
  }
  return x;
}

function equalsArray(arr1, arr2){
  if(arr1.length == arr2.length){
    for (i = 0; i < arr1.length; i++){
      if (arr1[i] != arr2[i]){
        return false;
      }
    }
    return true;
  }
  return false;
}


//Functtion to run on scroll:
var menu = $('.static-bar');
var origOffsetY = menu.offset().top;
// function scroll() {
//     if ($(window).scrollTop() >= origOffsetY) {
//       if($('.info-box').css('display') === 'none') {
//         $('.static-bar').addClass('sticky');
//         $('.map').addClass('less-menu-padding');
//           } else {
//             $('.static-bar').addClass('sticky');
//             $('.map').addClass('menu-padding'); //Prevents sudden jump followed by animation
//             // $('.map').addClass('less-menu-padding', 200); //Smooth transition upon scroll below limit
//             // $('.info-box').hide(200); //Hid the infobox on scroll
//     }} else {
//         if($('.info-box').css('display') === 'none') {
//           $('.static-bar').removeClass('sticky');
//           $('.map').removeClass('less-menu-padding');
//           $('.map').removeClass('menu-padding');
//         } else {
//             $('.static-bar').removeClass('sticky');
//             $('.map').removeClass('less-menu-padding');
//             $('.map').removeClass('menu-padding');
//     }};
//
//    }

   function hideBar() {
      $('.draggers').removeClass("highlight");
      $('.info-text').hide(200);
      $('.info-box').hide(200);
      connectionUpdate(1, 200);
      hintClear();
      if ($(window).scrollTop() >= origOffsetY) {
        $('.map').addClass('less-menu-padding', 200);
        $('.map').removeClass('menu-padding', 200);

      } else {

      }
   }

   function showBar() {
     hintClear();
     $('.draggers').removeClass("highlight");
     $(this).addClass("highlight");
     var k = "#d" + noStr($(this)) + "p1";
     if ($(k).css("display") == "none") {
       $('.info-text').hide(200),
       $('.info-box').show(200),
       $("#d" + noStr($(this)) + "p1").show(200),
       connectionUpdate (1, 200);
       if ($(window).scrollTop() >= origOffsetY) {
         $('.map').addClass('menu-padding', 200);
         $('.map').removeClass('less-menu-padding', 200);
       } else {}
     } else {
       hideBar()
     }
   }

   function showCustomBar (t) {
     var k = "#d" + t + "p1";
     if ($(k).css("display") == "none") {
       $('.info-text').hide(200),
       $('.info-box').show(200),
       $(k).show(200),
       connectionUpdate (1, 200);
       if ($(window).scrollTop() >= origOffsetY) {
         $('.map').addClass('menu-padding', 200);
         $('.map').removeClass('less-menu-padding', 200);
       } else {}
     } else {}
   }

//function to change menu padding value

// A function to remive the string and turn into an interger.
function noStr(a){
  var draggerNoStr = a.attr('id').slice(7);
  return draggerNoStr
  };

  function noStrCustom (a, b, c) {
    var draggerNoStr = a.attr('id').slice(b, c);
    return draggerNoStr
  }


//A function for hiding and showing info-text
function infoText() {
  $('.draggers').click(showBar);
  $('.up-button').click(hideBar)

}

//A function to update conenctions
function connectionUpdate (i, d) {
var timesRun = 0;
var interval = setInterval (function() {
  $('.anchor').connections('update'), i;
  timesRun +=1;
  if(timesRun === d) {
    clearInterval(interval); }
  });
};

// function correctTest (droppersArray, droppersCount, dnaDraggerOne) {
//   console.log(droppersArray);
//   $('#print').text(droppersArray);
//   var correct = ["dragger01", "dragger02", "dragger03", "dragger04", "dragger05", "dragger06"];
//   if (equalsArray(correct, droppersArray)) {} else {}
// };

function phaseSelect (droppersArray, droppersCount, dd01, dd02, dd03, dd04, dd05) {
  var phase1 = ["dragger01", "dragger02", "dragger03", "dragger04", "dragger05", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  if (equalsArray(phase1, droppersArray)) {
    phaseOne() } else {}

  var phase2 = ["dragger01", "dragger02", "dragger03", "dragger04", "dragger05", "dragger06", "dragger07", "dragger08", "dragger09", 0, 0, 0, 0, 0, 0, 0];
  if ((equalsArray(phase2, droppersArray))) {
    phaseTwo() } else {}

  var phase3 = ["dragger01", "dragger02", "dragger03", "dragger04", "dragger05", "dragger06", "dragger07", "dragger08", "dragger09", "dragger10", "dragger11", "dragger12", "dragger13", "dragger14", "dragger15", "dragger16"];
  if ((equalsArray(phase3, droppersArray))) {
    phaseThree() } else {}
  };

function phaseOne () {
  $('.phaseOne').fadeIn(200);
  $('.phaseOneH').fadeIn(200);
  $('.phaseZeroH').fadeOut(50);
  $('.phaseZeroD').draggable();
  $('.phaseZeroD').draggable('disable');
  makeConnections ();

};

function phaseTwo () {
  $('.phaseTwo').fadeIn(200);
  $('.phaseTwoH').fadeIn(200);
  $('.phaseOneH').fadeOut(50);
  $('.phaseOneD').draggable();
  $('.phaseOneD').draggable('disable');
  makeConnections ();
};

function phaseThree () {
  $('.phaseThree').fadeIn(200);
  $('.phaseThreeH').fadeIn(200);
  $('.phaseTwoH').fadeOut(50);
  $('.phaseTwoD').draggable();
  $('.phaseTwoD').draggable('disable');
  makeConnections ();
};

function hint (thisManNoString) {
  var k = ("#dropper" + thisManNoString);
  $(k).addClass("hintfilter");
};

function hintClear () {
  $('.dropper').removeClass("hintfilter");
};

function makeConnections () {
  $('#anchor1, #anchor2').connections({
  });
  $('#anchor2, #anchor4').connections({
  });
  $('#anchor4, #anchor3').connections({
    'class': 'tester'
  });
  $('#anchor4, #anchor5').connections({
  });
  $('#anchor4, #anchor6').connections({
  });
};

function init(){

infoText()
makeConnections ()

  // jQuery('#parent').connections({ to: '.child' });










  $(window).resize(function(){
    $('.anchor').connections('update');
  });

  console.log($('#dragger2').css("vertical-align"));

  var draggers = $('.draggers'); //This variable is storing a list of the dragger object
  var droppers = $('.dropper'); //This variable is storing a list of the dropper object
  var holders = $('.holders');
  var droppersCount = droppers.length; //This variable is storting the number of droppers we have on the page
  var droppersArray = createArray(droppersCount, 0);
  var posOneTop
  var posOneLeft
  var dd01 = false;
  var dd02 = false;
  var dd03 = false;
  var dd04 = false;
  var dd05 = false;
  console.log(dd01);

  draggers.draggable({
    start: function (event, ui) {
      $(this).css('visibility','hidden');
      $(ui.helper).css("z-index", "40000");
      $(ui.helper).addClass("shadowfilterclone");
    },
    stop: function (event, ui) {
        $(this).css('visibility','visible');
    },
    helper: "clone",
    appendTo: 'body',
    revert: 'invalid',
    drag: function (event, ui) {
      posOneTop = $(ui.helper).offset().top;
      posOneLeft = $(ui.helper).offset().left;
    },
  });



 $('.dna-dropper').droppable({
     drop: function (event, ui) {
       posTwoTop = $(this).offset().top;
       posTwoLeft = $(this).offset().left;
       $(this).append(ui.draggable);
       $(ui.draggable).css("z-index", "1");
       $(ui.draggable).css("position", "relative");
       $(ui.draggable).css({left: posOneLeft - posTwoLeft });
       $(this).droppable('option', 'accept', ui.draggable);
       $(ui.draggable).css("vertical-align", "middle");
       if(($(this).attr("id") == "dna-dropper1") && ($(ui.draggable).attr("id") == "d4-dna-dragger2") && (posOneLeft - posTwoLeft) > 550 && (posOneLeft - posTwoLeft) < 600) {
         dd01 = true;
       } else {
         dd01 = false;
       };
       if(($(this).attr("id") == "dna-dropper2") && ($(ui.draggable).attr("id") == "d4-dna-dragger4") && (posOneLeft - posTwoLeft) > 400 && (posOneLeft - posTwoLeft) < 460) {
       dd02 = true;
       } else {
       dd02 = false;
     };
       if(($(this).attr("id") == "dna-dropper3") && ($(ui.draggable).attr("id") == "d4-dna-dragger3") && (posOneLeft - posTwoLeft) > 270 && (posOneLeft - posTwoLeft) < 340) {
       dd03 = true;
       } else {
       dd03 = false;

     };
      //  correctTest(droppersArray, droppersCount, dnaDraggerOne)
       phaseSelect (droppersArray, droppersCount, dd01, dd02, dd03, dd04, dd05)
   },
   out: function(event, ui) {
       $(this).droppable('option', 'accept', draggers);
       $(this).css("background-color", "grey");
     },
   accept: $('.dna-dragger')
 })

  droppers.droppable({  //All droppers made dropabble
    drop: function(event, ui) {  //Fires when draggable object dropped inside
      posTwoTop = $(this).offset().top;
      posTwoLeft = $(this).offset().left;
      $(this).append(ui.draggable);
      $(ui.draggable).css("z-index", "1");
      $(ui.draggable).css("position", "relative");
      $(ui.draggable).css({top: posOneTop - posTwoTop, left: posOneLeft - posTwoLeft });
      $(this).droppable('option', 'accept', ui.draggable);
      $(ui.draggable).position({  //I did this all by myself!! it moves the objects to the center
        my: "center",
        at: "center",
        of: $(this),
        using: function(pos) {
          $(this).animate(pos, 100, "linear");
        }
      });
      $(this).removeClass("droppershadow");


    //makes it so you can't drag something elses into the dropper if it it already full

      var dropperNoStr = $(this).attr('id').slice(7); //Gets ID of dropper and removes the string "dropper" from the ID
      var dropperNoIndex = parseInt(dropperNoStr) - 1; //Turns string (e.g. "1") into integer and takes away 1.
      droppersArray[dropperNoIndex] = ui.draggable.attr('id');
      // correctTest(droppersArray, droppersCount, dd01)
      phaseSelect (droppersArray, droppersCount, dd01, dd02, dd03, dd04, dd05) },

    out: function(event, ui) {
        $(this).droppable('option', 'accept', draggers);
        var dropperNoStr = $(this).attr('id').slice(7); //Gets ID of dropper and removes the string "dropper" from the ID
        var dropperNoIndex = parseInt(dropperNoStr) - 1; //Turns string (e.g. "1") into integer and takes away 1.
        droppersArray[dropperNoIndex] = 0;
        $(this).removeClass("droppershadow");



       //Fires when draggable object is dropped outside
      // if (!$(this).find($('.draggers')).length) {
      //   console.log("true");
      //   $(this).droppable('option', 'accept', droppers);
      // } else {console.log("false");}; //makes it so you can't drag something elses into the dropper if it it already full

    },
    tolerance: "intersect",
    accept: $('.draggers-normal'),
    over: function (event, ui) {
      $(this).addClass("droppershadow");
    }
  });

  $('.static-bar').droppable({
    drop: function(event, ui) {  //Fires when draggable object dropped inside
      if ($(ui.draggable).hasClass("draggers-normal")){
      posTwoTop = $("#holder" + noStr(ui.draggable)).offset().top;
      posTwoLeft = $("#holder" + noStr(ui.draggable)).offset().left;
      $("#holder" + noStr(ui.draggable)).append(ui.draggable);
      $(ui.draggable).css("z-index", "3000");
      $(ui.draggable).css({top: posOneTop - posTwoTop, left: posOneLeft - posTwoLeft });
      $(ui.draggable).position({
           my: "top",
           at: "top",
           of: "#holder" + noStr(ui.draggable),
           using: function(pos) {
             $(this).animate(pos, 200, "linear");
           }
    })
  } else {
    posTwoTop = $("#d" + noStrCustom(ui.draggable, 1, 3) + "dna-holder" + noStrCustom(ui.draggable, 14, 15)).offset().top;
    posTwoLeft = $("#d" + noStrCustom(ui.draggable, 1, 3) + "dna-holder" + noStrCustom(ui.draggable, 14, 15)).offset().left;
    $("#d" + noStrCustom(ui.draggable, 1, 3) + "dna-holder" + noStrCustom(ui.draggable, 14, 15)).append(ui.draggable);
    showCustomBar((noStrCustom(ui.draggable, 1, 2)));
    $(ui.draggable).css("z-index", "3000");
    $(ui.draggable).css({top: posOneTop - posTwoTop, left: posOneLeft - posTwoLeft });
    $(ui.draggable).addClass("moveMe");
    $(ui.draggable).position({
         my: "top",
         at: "top",
         of: "#d" + noStrCustom(ui.draggable, 1, 3) + "dna-holder" + noStrCustom(ui.draggable, 14, 15),
         using: function(pos) {
           $(this).animate(pos, 200, "linear");
         }
  })
};
},

  greedy: true
  })

$('.hint').click( function() {
  console.log(((($(this).parent()).parent()).parent()));
  var thisMan = ((($(this).parent()).parent()).parent())
  var thisManNoString = noStrCustom(thisMan, 1, 3);
  console.log(thisManNoString);
  hint(thisManNoString);
  })




  // $("body").droppable({
  //   drop: function (event, ui) {
  //     $(ui.draggable).css("position", "relative");
  //     $(this).append(ui.draggable);
  //     $(ui.draggable).css("z-index", "1");
  //

  // }
  // });
//
//
// Below we are making the mark button work
    // $('#mark').click(
    //   function() {
    //     console.log(droppersArray);
    //     $('#print').text(droppersArray);
    //     var correct = ["dragger01", "dragger02", "dragger03", "dragger04", "dragger05"];
    //     if (equalsArray(correct, droppersArray)){
    //       $('#correct').text("Correct");
    //       $('.command').fadeIn(200);
    //       $('#anchor4, #anchor6').connections({
    //         class: 'command-line'
    //       });
    //     } else {
    //       $('#correct').text("Incorrect");
    //     }
    //   });

//       var scrolling = moveScroller();
}

// This is run when the page is loaded
inDroppers = []
// document.onscroll = scroll;
$(document).ready(init);
