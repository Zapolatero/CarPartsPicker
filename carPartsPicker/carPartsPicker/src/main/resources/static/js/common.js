

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
    //utilise le localstorage (bdd interne au navigateur) pour stocker l'id des pieces du paniers
    localStorage.setItem('basket', JSON.stringify(myList));
    
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
			args += element + ";";
		}
		
	}
	
	httpRequest = new XMLHttpRequest();
	httpRequest.open('GET', url + "?concatenatedIds=" + args);
	httpRequest.onreadystatechange = fillBasket;
	
    httpRequest.send();
    
    function fillBasket()
	{
		let basket = document.getElementById("basketDropDownContent");
		basket.innerHTML = "";
		if(httpRequest.status != 200 || httpRequest.readyState!= XMLHttpRequest.DONE)
		{
			return null;
		}
		
		response = JSON.parse(httpRequest.responseText);
		var newDiv = "";
		var newDiv = document.createElement("div");
		newDiv.className = "basketDiv";
		newDiv.setAttribute("class", "menubasketDiv");
		
		
		var articleDiv = document.createElement("div");
		articleDiv.setAttribute("class", "basketArticleDiv");
		
		var basketEmptyDiv = document.createElement("div");
		basketEmptyDiv.setAttribute("class", "basketImage");
		
		var basketNameDiv = document.createElement("div");
		basketNameDiv.setAttribute("class", "menuNameDiv");
		var basketNameNode = document.createTextNode("NAME");
		basketNameDiv.append(basketNameNode)
		
		
		var basketNumberDiv = document.createElement("div");
		basketNumberDiv.setAttribute("class", "menuNumberDiv");
		var basketNumberNode = document.createTextNode("AMOUNT");
		basketNumberDiv.append(basketNumberNode)
		
		var basketPriceDiv = document.createElement("div");
		basketPriceDiv.setAttribute("class", "menuPriceDiv");
		var basketPriceNode = document.createTextNode("PRICE");
		basketPriceDiv.append(basketPriceNode)
		
		articleDiv.append(basketEmptyDiv);
		articleDiv.append(basketNameDiv);
		articleDiv.append(basketNumberDiv);
		articleDiv.append(basketPriceDiv);
		newDiv.append(articleDiv);
			
		var totalPrice  = 0;
		var totalAmount = 0;
		for(let element of response)
		{
			var URL = element.imageUrl;
			var name = element.name;
			var number = myList[element.id];
			var price = element.price;
			
			totalPrice += price * number; 
			totalAmount += number;
			
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
			
			var deleteButtonDiv = document.createElement("div");
			deleteButtonDiv.setAttribute("class", "deleteButtonDiv");
			deleteButtonDiv.setAttribute("id", element.id);
			deleteButtonDiv.innerHTML = "<button class=\"deleteButton\" onclick=\"deleteItem("+  element.id +  ")\"></button>";
			
			articleDiv.append(imageDiv);
			articleDiv.append(basketNameDiv);
			articleDiv.append(basketNumberDiv);
			articleDiv.append(basketPriceDiv);
			articleDiv.append(deleteButtonDiv);
			newDiv.append(articleDiv);
		}
		
		var lineDiv = document.createElement("div");
		lineDiv.setAttribute("class", "line");
		newDiv.append(lineDiv);
		
		
		
		
		var totalDiv = document.createElement("div");
		totalDiv.setAttribute("class", "basketArticleDiv");

		var totalNameDiv = document.createElement("div");
		totalNameDiv.setAttribute("class", "totalNameDiv");
		var totalNameNode = document.createTextNode("TOTAL");
		totalNameDiv.append(totalNameNode)
		
		
		var totalNumberDiv = document.createElement("div");
		totalNumberDiv.setAttribute("class", "totalNumberDiv");
		var totalNumberNode = document.createTextNode(totalAmount);
		totalNumberDiv.append(totalNumberNode)
		
		var totalPriceDiv = document.createElement("div");
		totalPriceDiv.setAttribute("class", "totalPriceDiv");
		var totalPriceNode = document.createTextNode(totalPrice + "€");
		totalPriceDiv.append(totalPriceNode)
		
		var clearBasketDiv = document.createElement("div");
		clearBasketDiv.setAttribute("class", "menuClearDiv");
		clearBasketDiv.innerHTML = "<button class=\"clearButton\" onclick=\"clearBasket()\"></button>";

		totalDiv.append(totalNameDiv);
		totalDiv.append(totalNumberDiv);
		totalDiv.append(totalPriceDiv);
		totalDiv.append(clearBasketDiv);
		newDiv.append(totalDiv);
		
		var payButtonDiv = document.createElement("div");
		payButtonDiv.setAttribute("class", "basketArticleDiv");
		payButtonDiv.innerHTML = "<button class=\"payButton\" onclick=\"pay()\"> PAY</button>";
		newDiv.append(payButtonDiv);
		
		basket.innerHTML += newDiv.innerHTML;
	}
}

function pay()
{
	clearBasket();
	alert("message");	
}

function deleteItem(id)
{
	if(myList[id] == 1)
	{
		myList[id] = null;
	}
	else if(myList[id] ==0)
	{
		console.log("Trying to delete a article not in the basket");
	}
	else
	{
		myList[id]--;
	}
	localStorage.setItem('basket', JSON.stringify(myList));
	askBasketContent();
	
	let mouseEnter = document.getElementById("dropDownMouseOver");
	var event = new Event('mouseenter');  
	mouseEnter.dispatchEvent(event);
}
