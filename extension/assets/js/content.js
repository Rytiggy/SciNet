// content.js


// logs URL of the first external link on the page
var firstHref = $("a[href^='http']").eq(0).attr("href");

chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  // console.log(response.farewell);
  // console.log(response.url);

  	//JSON array of acceptable sites to parse
  	//http://science.sciencemag.org/
  	//document.location.hostname
  	obj = [
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
      if(document.location.hostname == site){
      	

      	//Toggle stats tell them we are running]
      	$( ".stats" ).find('span').addClass( ".text-success" );


      	$('div.pane-content>div').each(function(){ 
      		
      		aAuthor = $( "ol.contributor-list" ).find( "span" ).text().replace(/\s+/g, " ");
      		aData =$( ".meta-line" ).text().replace(/\s+/g, " ");
      		splitData = aData.split(':');
      		aSummary = $( "div.summary-view" ).find( "p" ).text().replace(/\s+/g, " ");
      		aName = $( "div.highwire-cite-title" ).text().replace(/\s+/g, " ");



      	});



      	var jsonValue ={ site :{
      		 "text": [
      			 {"author": aAuthor},
      			 {"data": [
      			 	{"date": splitData[0]},
      			 	{"vol": splitData[1]},
      			 	{"doi": splitData[2]}
      			 ]},
      			 {"paperName": aName},
      			 {"summary": aSummary}
      		 ]}
      		};

      	console.log(JSON.stringify(jsonValue));




      }
  	}catch(err){
  	  //console.log("Error code 0 dont worry about this" + err);

  	}

}








  // if (response.url.includes("google")) {
  //   // look for citations to parse :~)
  //   console.log("looking for citations...");
  // }
});


// Okay, so what's required here?
// Specifications:
// 1. The extension recognizes when it's on a publisher's page
	 //what makes a publisher's page a publisher's page
// 2. The extension, when on a page with citations, scrapes those citations.
	//gets the entire body
	//var html = document.body.innerHTML;

// 3. The extension takes those scraped citations and sends them to a backend server.