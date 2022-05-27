

var myList = localStorage.getItem('basket');
if(myList == null)
{
	myList = [];
}
else
{
	myList = JSON.parse(myList);
}
function addToBasket(element)
{
	
	if(myList[element.value] != undefined)
	{
		myList[element.value] = myList[element.value] + 1;
	}
	else
	{
		myList[element.value] = 1;
	}
	
	for(let elements of Object.keys(myList))
	{
		console.log("id:" + elements + " nombre:" + myList[elements]);
	}
	
    //utilise le localstorage (bdd interne au navigateur) pour stocker l'id des pieces du paniers
    localStorage.setItem('basket', JSON.stringify(myList));
    console.log("added carpart id : " + element.value)
}

function clearBasket()
{
	localStorage.removeItem("basket");
	myList = [];
	localStorage.setItem("basket", JSON.stringify(myList));
	console.log("basket cleared.");
}