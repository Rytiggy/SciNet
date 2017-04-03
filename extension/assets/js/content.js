// content.js



//usage:



// logs URL of the first external link on the page
var firstHref = $("a[href^='http']").eq(0).attr("href");

chrome.runtime.sendMessage({greeting: "hello"}, function(response) {

  //JSON array of acceptable sites to parse
  var obj = [
	  	{
			"site": "science.sciencemag.org"
		}, 
		{
			"site": "ryanmasonline.com"
		}
	]

for (var i = 0; i <= obj.length; i++)
{
	try{ 
      var site = obj[i].site;
      var aAuthor,aDate,aName,aSummary,splitData;

      //checks if it should run on this site from a list 
      if(document.location.hostname == site && window.location.pathname != "/"){
      	

      	//Toggle stats tell them we are running
      	$( ".stats" ).find('span').addClass( ".text-success" );


      	$('div.pane-content>div').each(function(){ 
      		
      		aAuthor = $( "ol.contributor-list" ).find( "span" ).text().replace(/\s+/g, " ");
      		aData =$( ".meta-line" ).text().replace(/\s+/g, " ");
      		splitData = aData.split(':');
      		aSummary = $( "div.summary-view" ).find( "p" ).text().replace(/\s+/g, " ");
      		aName = $( "div.highwire-cite-title" ).text().replace(/\s+/g, " ");



      	});


$(document).ready(function() {

        $.ajax({
        	url: "http://127.0.0.1:8000/api/citations",
            type: "POST",
            data: "name="+aName+"&authors="+aAuthor+"&datepublished="+splitData[0]+"&doi="+splitData[2]+"&summary="+aSummary,
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

});


// Okay, so what's required here?
// Specifications:
// 1. The extension recognizes when it's on a publisher's page DONE
	 //what makes a publisher's page a publisher's page DONE
// 2. The extension, when on a page with citations, scrapes those citations. DONE 
	//gets the entire body
	//var html = document.body.innerHTML;

// 3. The extension takes those scraped citations and sends them to a backend server.