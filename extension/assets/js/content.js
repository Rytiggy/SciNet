// content.js



//usage:



// logs URL of the first external link on the page
var firstHref = $("a[href^='http']").eq(0).attr("href");

chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  // console.log(response.farewell);
  // console.log(response.url);

  	//JSON array of acceptable sites to parse
  	//http://science.sciencemag.org/
  	//document.location.hostname
  var obj = [
	  	{
			"site": "science.sciencemag.org"
		}, 
		{
			"site": "ryanmasonline.com"
		}
	]
var jsonBLOB = null;

for (var i = 0; i <= obj.length; i++)
{
	try{ 
      var site = obj[i].site;
      var aAuthor,aDate,aName,aSummary,splitData;

      //Should I run on this site?
      if(document.location.hostname == site && window.location.pathname != "/"){
      	

      	//Toggle stats tell them we are running]
      	$( ".stats" ).find('span').addClass( ".text-success" );


      	$('div.pane-content>div').each(function(){ 
      		
      		aAuthor = $( "ol.contributor-list" ).find( "span" ).text().replace(/\s+/g, " ");
      		aData =$( ".meta-line" ).text().replace(/\s+/g, " ");
      		splitData = aData.split(':');
      		aSummary = $( "div.summary-view" ).find( "p" ).text().replace(/\s+/g, " ");
      		aName = $( "div.highwire-cite-title" ).text().replace(/\s+/g, " ");



      	});



   //    	var data ={
			//     "data": {
			//         "type": "citations",
			//         "id": null,
			//         "attributes": {
			//             "name": aName,
			//             "authors": aAuthor,
			//             "datepublished": splitData[0],
			//             "doi": splitData[2],
			//             "summary": aSummary
			//         }
			//     }
			// };






$(document).ready(function() {

		var aCitation = {
            "name": "somename",
            "authors": "someguy",
            "datepublished": "day",
            "doi": "n/a",
            "summary": "somesummary"
		    }





	        //console.log('data BEFORE SEND',JSON.stringify(aCitation));

        $.ajax({
        	url: "http://127.0.0.1:8000/api/citations",
            type: "POST",
            data: "name=dude&authors=bda&datepublished=1.1.2&doi=fvdb&summary=aglaaen",
             success: function(data, textStatus, xhr) {
			    console.log(xhr.status, data,textStatus);
			  },
			  complete: function(xhr, textStatus) {
			    console.log(xhr.status, textStatus);
			  },
			 error: function (jqXHR, status, err) {
			   console.log("Local error callback." , status, jqXHR, err);
			 },
        });




});



     }//end of if 
  	}catch(err){
  	  console.log("Error code 0 dont worry about this" + err);

  	}

}






  // if (response.url.includes("google")) {
  //   // look for citations to parse :~)
  //   console.log("looking for citations...");
  // }
});


// Okay, so what's required here?
// Specifications:
// 1. The extension recognizes when it's on a publisher's page DONE
	 //what makes a publisher's page a publisher's page DONE
// 2. The extension, when on a page with citations, scrapes those citations. DONE 
	//gets the entire body
	//var html = document.body.innerHTML;

// 3. The extension takes those scraped citations and sends them to a backend server.