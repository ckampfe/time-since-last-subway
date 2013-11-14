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

  Subwaytime.prototype.resetTime = function() { totalSeconds = 0; }

  function Fun() {}

  Fun.prototype.hornPlay = function() {
    document.getElementsByTagName("audio")[0].play();
  }

  Fun.prototype.sandwich = function() {
    $( "#sandwich" ).show("scale", "percent: 500", 4000, null);
  }

  $( ".digit").on( "click", function() {
    if ( !fun ) {
      var fun = new Fun();
    }
    fun.hornPlay();
    fun.sandwich();
    subTime.resetTime();
  });

  $( "#sandwich" ).click(function() { $( "#sandwich" ).hide(); });

  var subTime = new Subwaytime();
  setInterval(subTime.setTime, 1000);
});
