$(document).ready(function() {
  function Subwaytime() {
    // why does all of this have to be global?
    totalSeconds = 0;
    secondsLabel = document.getElementById("seconds");
    minutesLabel = document.getElementById("minutes");
    hoursLabel   = document.getElementById("hours");
  }

  Subwaytime.prototype.setTime = function() {
    // and this?
    this.totalSeconds++;
    secondsLabel.innerHTML = pad(totalSeconds%60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds/60%60));
    hoursLabel.innerHTML   = pad(parseInt(totalSeconds/3600));

    function pad(val) {
      var valString = val + "";
      if (valString.length < 2) {
         return "0" + valString;
      } else {
         return valString;
      }
    }
  }

  //Subwaytime.prototype.pad = function(val) {
  //  this.val = val;
  //  this.valString = this.val + "";
  //  if (this.valString.length < 2) {
  //     return "0" + this.valString;
  //  } else {
  //     return this.valString;
  //  }
  //}

  Subwaytime.prototype.resetTime = function() {
    this.totalSeconds = 0;
  }

  function Fun() {
    this.horn = document.getElementsByTagName("audio")[0];
  }

  Fun.prototype.hornPlay = function() {
    this.horn.play();
  }

  Fun.prototype.sandwich = function() {
    $( "#sandwich" ).show("scale", "percent: 500", 4000, null);
  }

  $( ".digit").on( "click", function() {
    if ( !fun ) {
      var fun = new Fun();
    }
    fun.hornPlay();
    subTime.resetTime();
  });

  var subTime = new Subwaytime();
  setInterval(subTime.setTime, 1000);
});
