const expect =require('chai').expect;
const fetch=require('node-fetch');
describe('Check link test',function(){
	it('should check the links under Dubai Apartments are functioning correctly ',async function(){
		await browser.url('https://www.bayut.com/')
	var CheckedLinks = document.querySelectorAll('.892154cd _6c5bbfd9 _97cf2f2e > a');//return results with all inks under 'Dubai Apartments', from 'To-Rent'
	for (var i = 0; i < CheckedLinks.length; i++) {//loop throgh all the links selected before
    CheckedLinks[i].click(function()//function on click event for the link that check that the link is functioning properly 
	{
		browser.url(CheckedLinks[i].getAttribute("href"));//get the URL from the link clicked
		var interval = setInterval(function() {//calls the below function at specified interval
    if(document.readyState === 'complete') {//checked the page is loaded
        clearInterval(interval);//clears the timer set
        done();//test for asynchronous code
    }    
}, 100);
	})
}
)
)
		const requests=urls.map(url=>fetch(url));//fetch multiple requests for the URLs at the same time
		const responses=await Promise.all(requests);//fetch multiple requests for the URLs at the same time
		const StatusCodes=responses.map(response=>response.status);//get the status for the responses for the requests
		StatusCodes.forEach(StatusCodes=>{
			expect(StatusCodes).to.be.below(400);//expect status for the response to be 400
		})
	})
})
