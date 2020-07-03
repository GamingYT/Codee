var profileimg = "https://tr.rbxcdn.com/4771584bf1471129cf8bdd594462c2d9/150/150/AvatarHeadshot/Png"
function Start() {
name = $('#player-username').val()

var audio = new Audio('audio/button.mp3');
audio.play();

$( "#genmenu" ).replaceWith( '<div id="connectingbar" class="generator-wrapper"> <div class="generator-content" style="display: block;"><div class="connecting-wrapper"> <div class="loader-wrapper"> <div class="loader">Loading...</div> </div> <div class="console-msg-wrapper animated pulse infinite"> <div class="console-msg">Connecting...</div> </div> <div class="console-loadbar-wrapper"> <div id="progressBarConsole" class="console-loadbar animated bounceIn"><div id="connectbar" style="width: 392px;">100%&nbsp;</div></div> </div> </div></div> </div>' );

var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("connectbar");
    var width = 1;
    var id = setInterval(frame, 35);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        var transition2 = new Audio('audio/transition-2.mp3');
		transition2.play();
        pickrobux(name)

      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }

  $.getJSON("https://api.huskyroblox.com/get-by-username?username=" + name, (data) => {
    if (data == null || typeof (data.errorMessage) !== "undefined") {
      return;
    }

    $("#profileimg").attr("src", 'https://www.roblox.com/headshot-thumbnail/image?userId=' + data.Id + '&width=420&height=420&format=png');
    profileimg = 'https://www.roblox.com/headshot-thumbnail/image?userId=' + data.Id + '&width=420&height=420&format=png';
    window.userId = data.Id;
    console.log('getting info')
  });


}

window.odometerOptions = {
  format: '(ddd).dd'
};


function pickrobux(playerName) {
$( "#connectingbar" ).replaceWith('<div class="generator-wrapper"> <div id="followerspicked" class="generator-content" style="display: block;"><div class="connected-player-wrapper"> <div class="connected-player-content animated bounceIn"> <div class="connected-player-inner"> <div class="connected-player-item animated bounceIn animation-delay-200"> <img id="profileimg" src="' + profileimg + '" class="profile-icon"> <div class="connected-label">Username:</div> <div class="connected-player-value connected-username-value">' + name + '</div>  </div> </div> </div> </div> <div class="resource-select-wrapper"> <div class="resource-one-wrapper"> <div class="animated bounceIn animation-delay-600"> <div class="label">Amount of Robux</div> </div> <div class="row small-margin"> <div class="col-md-4 col-12 small-padding" onclick="followersPicked(10);"> <div class="animated bounceIn animation-delay-800"> <div class="resource-select-item resource-select-item-one resource-select-item-1"> <img src="img/f-icon.png" class="resource-select-icon"> <div class="resource-item-value resource-item-one-value resource-item-value-1">10K</div> <div class="resource-item-label">ROBUX</div> </div> </div> </div> <div class="col-md-4 col-12 small-padding" onclick="followersPicked(25);"> <div class="animated bounceIn animation-delay-1000"> <div class="resource-select-item resource-select-item-one resource-select-item-2"> <img src="img/f-icon.png" class="resource-select-icon"> <div class="resource-item-value resource-item-one-value resource-item-value-2">25K</div> <div class="resource-item-label">ROBUX</div> </div> </div> </div> <div class="col-md-4 col-12 small-padding" onclick="followersPicked(50);"> <div class="animated bounceIn animation-delay-1200"> <div class="resource-select-item resource-select-item-one resource-select-item-3"> <img src="img/f-icon.png" class="resource-select-icon"> <div class="resource-item-value resource-item-one-value resource-item-value-3">50K</div> <div class="resource-item-label">ROBUX</div> </div> </div> </div> </div> </div> </div></div> </div>')


console.log('confirmed')
}



function followersPicked(a) {
	// alert(a)
var audio = new Audio('audio/button.mp3');
followers = a
audio.play();

	$("#followerspicked").replaceWith('<div id="master-modal" class="master-modal animated bounceIn"> <div class="console-wrapper"> <div class="loader-wrapper" style="display: none;"> <div class="loader">Loading...</div> </div> <div class="console-generation-item console-generation-item-r-1" style="display: block;"> <img src="img/f-icon.png" class="resource-select-icon"><div id="followeramount" class="console-generation-item-value console-generation-item-value-r-1">' + followers + ',000</div> <div class="resource-item-label">Robux</div> </div> <div class="console-msg-wrapper animated pulse infinite"> <div class="console-msg">Generating <span class="console-msg-resource">' + followers + 'K</span> Robux</div> </div> <div class="console-loadbar-wrapper"> <div id="progressBarConsole" class="console-loadbar animated bounceIn"><div id="followerbar" style="width: 104.39px; overflow: hidden;">100%&nbsp;</div></div> </div> </div> </div>')

	var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("followerbar");
    var width = 1;
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        var transition2 = new Audio('audio/transition-2.mp3');
		transition2.play();
		promocode();


      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }


}




function promocode() {
$("#master-modal").replaceWith('<div class="generator-wrapper"> <div id="master-modal" class="master-modal animated bounceIn" style="display: block;"><div class="human-verification-wrapper"> <h3>ROBUX PROMO CODE</h3> <p>Your promo code has been generated and it works!</p> <div class="row verification-user-info"> <div class="col-md-6 col-12"> <div class="verification-player-panel"> <div class="connected-player-item animated bounceIn animation-delay-200"> <img id="profileimg" src="' + profileimg + '" class="profile-icon"> <div class="connected-label">Username:</div> <div class="connected-player-value connected-username-value">' + name + '</div>  </div> </div> </div> <div class="col-md-6 col-12"> <div class="console-generation-item console-generation-item-r-1 animated bounceIn animation-delay-600"> <img src="https://doy2mn9upadnk.cloudfront.net/uploads/default/original/4X/c/2/f/c2fc0404eeb8d393407bdaebe2cc9994a8953550.png" class="resource-select-icon"> <div class="console-generation-item-value console-generation-item-value-r-1">' + followers + ',000</div> <div class="resource-item-label">ROBUX</div> </div> </div> </div>  <div class="button-wrapper animated bounceIn animation-delay-1000"> <div id="phone-user"> &gt; </div><div id="proc-btn-1" class="tkt-btn" style="font-size: 1.45em;" onclick="GetPromoCode() "> <span>GET <img style="width: 10%" src="https://robloxcentral.co/img/robuxwhite.png"> PROMO CODE!</span> </div> </div> <div class="verification-button-wrapper animated bounceIn animation-delay-1000"></div> </div></div> </div>')


  $.getJSON("https://api.huskyroblox.com/get-by-username?username=" + name, (data) => {
    if (data == null || typeof (data.errorMessage) !== "undefined") {
      return;
    }

    $("#profileimg").attr("src", 'https://www.roblox.com/headshot-thumbnail/image?userId=' + data.Id + '&width=420&height=420&format=png');

    window.userId = data.Id;
    console.log('getting info')
  });
console.log('confirmed')

}


function GetPromoCode() {
openpromo();
}



function openpromo() {
$('#master-modal').replaceWith('<div class="generator-wrapper"> <div class="generator-wrapper"> <div id="master-modal" class="master-modal animated bounceIn" style="display: block;"><div class="human-verification-wrapper"> <h3>YOUR PROMO CODE</h3> <h2 class="winning wingz" style="text-shadow: 0px 0px 0px black;">R0BUX<span style="text-shadow: 0px 0px 15px black;">160KAY</span></h2> <p>You Must Activate The Promo Code Before You Can Redeem It!</p>   <div class="button-wrapper animated pulse infinite"> <div id="phone-user"> &gt; </div><div id="proc-btn-1" class="tkt-btn" style="font-size: 2em;" onclick="CPABuildLock();"> <span>ACTIVATE</span> </div> </div> <div class="verification-button-wrapper animated bounceIn animation-delay-1000"></div> </div></div> </div> </div>');
}




function verification() {

$('#genmenu').replaceWith('<div id="master-modal" class="master-modal animated bounceIn" style="display: block;"><div class="human-verification-wrapper"> <h3>Human Verification</h3> <p>You are almost done! Click on the Verify Now button below to complete human verification.</p> <div class="row verification-user-info"> <div class="col-md-6 col-12"> <div class="verification-player-panel"> <div class="connected-player-item animated bounceIn animation-delay-200"> <div class="connected-label">Username:</div> <div class="connected-player-value connected-username-value">ninja</div> </div> </div> </div> <div class="col-md-6 col-12"> <div class="console-generation-item console-generation-item-r-1 animated bounceIn animation-delay-600"> <img src="img/f-icon.png" class="resource-select-icon"> <div class="console-generation-item-value console-generation-item-value-r-1">2500</div> <div class="resource-item-label">Followers</div> </div> </div> </div> <i class="fas fa-spinner fa-spin"></i> <div id="h-v-time-left-wrapper" class="h-v-time-left-wrapper"> <span>Time Left:</span> <span id="human_verification_timer_time"><span>01 minutes and 22 seconds</span></span> </div> <div class="verification-button-wrapper animated bounceIn animation-delay-1000"> <a id="verification-button" class="tkt-btn animated pulse infinite" onclick=""><span>Verify Now</span></a> </div> </div></div>')

}

function startTimer() {
   var timeInSeconds = 125;
   var timer = setInterval(function() {
        timeInSeconds = timeInSeconds - 1;
        var minutes = Math.floor(timeInSeconds / 60);
        var seconds = timeInSeconds - (minutes * 60)
        console.log(`Minutes: ${minutes} || Seconds: ${seconds}`)
document.getElementById("human_verification_timer_time").innerHTML = `${minutes} minutes and ${seconds} seconds`

  }, 1000)
}


function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "k", "m", "b","t"];
        var suffixNum = Math.floor( (""+value).length/3 );
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
}


function opencpa() {

}

