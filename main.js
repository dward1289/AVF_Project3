//Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){
	
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