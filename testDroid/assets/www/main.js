//Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){              

document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
    
    	var options = new ContactFindOptions();
        options.filter=""; 
        options.multiple=true;
        var fields = ["displayName", "name", "phoneNumbers"];
        navigator.contacts.find(fields, onSuccess, onError, options);
			$("#connect").on("click", checkConnection);
			$("#notice").on("click", showAlert);
			
    }
    
    function onSuccess(contacts) {
           alert("CONTACTS FOUND" + '\n' +
           '\n' +
           contacts[0].displayName + ": " + contacts[0].phoneNumbers[0].value + '\n' +
           '\n' +
           contacts[1].displayName + ": " + contacts[1].phoneNumbers[0].value + '\n' +
           '\n' +
           contacts[2].displayName + ": " + contacts[2].phoneNumbers[0].value);
    }

    function onError(contactError) {
        alert('onError!');
    }
    
    
    function alertDismissed() {
        console.log("Notification functions.");
    }

    function showAlert() {
        navigator.notification.alert(
            'My future app will be for social and entertainment purposes.',  
            alertDismissed,         
            '*Future Application Thought*',            
            'Cool!'                  
        );
    }
    
    function checkConnection() {
        var whatNetwork = navigator.network.connection.type;

        var connects = {};
        connects[Connection.UNKNOWN]  = 'a connect that I have not seen.';
        connects[Connection.ETHERNET] = 'wonderful ethernet connection.';
        connects[Connection.WIFI]     = 'WiFi! Way to go!';
        connects[Connection.CELL_2G]  = '2G connection. Use WiFi for better speed.';
        connects[Connection.CELL_3G]  = '3G connection. Good speed.';
        connects[Connection.CELL_4G]  = '4G connection. Super!';
        connects[Connection.NONE]     = 'no network connection. Get connected :-)';

        alert('You have ' + connects[whatNetwork]);
    }


                        
                        
                        
var twitterSearch = function () {
$.ajax({
		type: "GET",
		url: "http://search.twitter.com/search.json?q=vh1",
		dataType: "json",
		success: function (twi) {

                for ( var i = 0, len = twi.results.length; i < len; i++ ) {
                    var item = twi.results[i];

                    $( ' ' + 
					'<div class="tweetsIn">' +
					'<ul>' +
					'<p><li><img src="'+ item.profile_image_url + '" id="tweetImg"/></li>' +
					'<li> User ID: ' + item.from_user_id + '</li>' +
					'<li> Screen Name: ' + item.from_user_name + '</li>' +
					'<li> Full Name: ' + item.from_user + '</li></p>' +
					'<li> Tweet Created: ' + item.created_at + '</li>' +					
					'<li> Tweet: ' + item.text + '</li></p>' +
					'</ul>' +
					'<br>' +
					'</div>'
					).appendTo("#thisTwitter");
                }
            }
})
		};
	$("#twitterBtn").on("click", twitterSearch);
	


var tvSearch = function () {
$.ajax({
		type: "GET",
		url: "http://api.trakt.tv/calendar/shows.json/e72b9f73212db9cf43ea905bbcbc3054",
		dataType: "json",
		success: function (tv) {

					for ( var i = 0, len = tv[i].episodes.length; i < len; i++ ) {
                    var item = tv[0].episodes[i]
            $(' ' +
            	'<div class="tvIn">' +
            	'<ul>' +
            	'<p><li><img src="' + item.show.images.poster +'" id="showImg"/></li>'+
            	'<li> Name of Show: ' + item.show.title +'</li>'+
            	'<li> Network Channel: ' + item.show.network +'</li>'+
            	'<li> Show Website: ' + item.show.url +'</li></p>'+
            	'<p><li> Country: ' + item.show.country +'</li>'+
            	'<li> Day of Show: ' + item.show.air_day +'</li>'+
            	'<li> Time of Show: ' + item.show.air_time +'</li></p>'+
            	'<p><li> Overview: ' + item.show.overview +'</li></p>'+
            	'</ul>' +
            	'<br>' +
            	'</div>'
            	).appendTo("#thisTV");
            }
        }       
})
		};
	$("#tvBtn").on("click", tvSearch);
	
});



