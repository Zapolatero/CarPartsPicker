

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
	let basket = document.getElementById("basketDropDownContent");
	basket.innerHTML = " The cart is empty";
	localStorage.removeItem("basket");
	myList = [];
	localStorage.setItem("basket", JSON.stringify(myList));
	console.log("basket cleared.");
}

function addEvents()
{
	let basket = document.getElementById("dropDownMouseOver");
	basket.addEventListener("mouseenter", function(event)
	{
		askBasketContent();
	},false);
	
}
function askBasketContent()
{
	var url = "/SpringRestHibernate/getBasketItems"
	
	if(myList.length == 0)
	{
		let basket = document.getElementById("basketDropDownContent");
		basket.innerHTML = "basket is empty";
		return null;
	}
	
	var args = "";
	for(let element of Object.keys(myList))
	{
		if(myList[element] != null)
		{
			console.log(element + ";");
			args += element + ";";
		}
		
	}
	
	httpRequest = new XMLHttpRequest();
	httpRequest.open('GET', url + "?concatenatedIds=" + args);
	httpRequest.onreadystatechange = fillBasket;
	
    httpRequest.send();
    console.log(httpRequest); 
    
    function fillBasket()
	{
		console.log("réponse bien recu");
		let basket = document.getElementById("basketDropDownContent");
		basket.innerHTML = "";
		if(httpRequest.status != 200)
		{
			return httpRequest.status;
		}
		
		response = JSON.parse(httpRequest.responseText);
		var newDiv = "";
		var newDiv = document.createElement("div");
		newDiv.className = "basketDiv";
		newDiv.setAttribute("class", "menubasketDiv");
		var totalPrice = 0;
		
		var articleDiv = document.createElement("div");
		articleDiv.setAttribute("class", "basketArticleDiv");
		
		var basketEmptyDiv = document.createElement("div");
		basketEmptyDiv.setAttribute("class", "basketImage");
		
		var basketNameDiv = document.createElement("div");
		basketNameDiv.setAttribute("class", "menuNameDiv");
		var basketNameNode = document.createTextNode("name");
		basketNameDiv.append(basketNameNode)
		
		
		var basketNumberDiv = document.createElement("div");
		basketNumberDiv.setAttribute("class", "menuNumberDiv");
		var basketNumberNode = document.createTextNode("amount");
		basketNumberDiv.append(basketNumberNode)
		
		var basketPriceDiv = document.createElement("div");
		basketPriceDiv.setAttribute("class", "menuPriceDiv");
		var basketPriceNode = document.createTextNode("price");
		basketPriceDiv.append(basketPriceNode)
		
		
		articleDiv.append(basketEmptyDiv);
		articleDiv.append(basketNameDiv);
		articleDiv.append(basketNumberDiv);
		articleDiv.append(basketPriceDiv);
		newDiv.append(articleDiv);
			
			
		for(let element of response)
		{
			var URL = element.imageUrl;
			var name = element.name;
			var number = myList[element.id];
			var price = element.price;
			
			totalPrice += price; 
			
			var articleDiv = document.createElement("div");
			articleDiv.setAttribute("class", "basketArticleDiv");
			
			var imageDiv = document.createElement("img");
			imageDiv.setAttribute("class", "basketImage");
			imageDiv.setAttribute("src", URL);
			
			var basketNameDiv = document.createElement("div");
			basketNameDiv.setAttribute("class", "nameDiv");
			var basketNameNode = document.createTextNode(name);
			basketNameDiv.append(basketNameNode)
			
			
			var basketNumberDiv = document.createElement("div");
			basketNumberDiv.setAttribute("class", "numberDiv");
			var basketNumberNode = document.createTextNode(number);
			basketNumberDiv.append(basketNumberNode)
			
			var basketPriceDiv = document.createElement("div");
			basketPriceDiv.setAttribute("class", "priceDiv");
			var basketPriceNode = document.createTextNode(price*number + "€");
			basketPriceDiv.append(basketPriceNode)
			
			
			articleDiv.append(imageDiv);
			articleDiv.append(basketNameDiv);
			articleDiv.append(basketNumberDiv);
			articleDiv.append(basketPriceDiv);
			newDiv.append(articleDiv);
		}
		basket.innerHTML += newDiv.innerHTML;
	}
}

