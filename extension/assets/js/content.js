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

for (var i = 0; i <= obj.length; i++)
{
	try{
      var site = obj[i].site;
      if(document.location.hostname == site){
        console.log(site);	

		//find all blocks of text containing the word abstract   	    
	  	 var foundin = $('div:contains("Abstract")');
	  	 foundin.each(function(){
	        console.log($(this).text());
	     });
      }
  	}catch(err){
  	  console.log("Error code 0 dont worry about this");

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