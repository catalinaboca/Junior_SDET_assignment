
describe("FirstTest", async () => {
  it("Checks if all the displayed properties contains the specified location", async () => {
    await browser.url('https://www.bayut.com/to-rent/1-bedroom-property/dubai/dubai-marina/?price_min=20000')//oad the URL of the browser
const LocationFilter = document.querySelectorAll("._7afabd84");//return all the results for search on page(class _7afabd84)
const SelectedLocation=document.querySelectorAll("._3a42e70b.c7f047fa");//get the element for location filter  (class ._3a42e70b.c7f047fa)
const FilteredElements=[];
const boolean ok=true;
const int max=LocationFilter.length;
const contor=0;
//for (var i=0, max=LocationFilter.length; i < max; i++) 
while((ok===true) && (contor<max) )
{
	if (!(SelectedLocation.getAttribute("value").includes(LocationFilter[i].getAttribute("value"))))//for every element in the reslts list check if the location filter matches the choosen location filter.
	{
		ok=false;//if a location in result is not the one selected ok variable turns false 
	}
	i++;
}
if(ok===true) 
{
	console.log("All displayed properties contain the selected location");//display  message if all the displayed properties contain the selected location
}
else 
{
	console.log("Not all displayed properties contain the selected location");//display  message if not all the displayed properties contain the selected location
}
  })
})

