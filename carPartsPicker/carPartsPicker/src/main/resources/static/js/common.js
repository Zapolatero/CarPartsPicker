

let myList = localStorage.getItem('basket');
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
	if(element != null){
		if(myList[element.value] != null)
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
	
	let args = "";
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
	
	if(args.length == 0)
	{
		let basket = document.getElementById("basketDropDownContent");
		basket.innerHTML = "basket is empty";
	}else{
		httpRequest.send();
	}

    
    function fillBasket()
	{
		let basket = document.getElementById("basketDropDownContent");
		basket.innerHTML = "";
		if(httpRequest.status != 200 || httpRequest.readyState!= XMLHttpRequest.DONE)
		{
			return null;
		}
		
		response = JSON.parse(httpRequest.responseText);
		let newDiv = document.createElement("div");
		newDiv.className = "basketDiv";
		newDiv.setAttribute("class", "menubasketDiv");
		
		
		let articleDiv = document.createElement("div");
		articleDiv.setAttribute("class", "basketArticleDiv");
		
		let basketEmptyDiv = document.createElement("div");
		basketEmptyDiv.setAttribute("class", "basketImage");
		
		let basketNameDiv = document.createElement("div");
		basketNameDiv.setAttribute("class", "menuNameDiv");
		let basketNameNode = document.createTextNode("NAME");
		basketNameDiv.append(basketNameNode)
		
		
		let basketNumberDiv = document.createElement("div");
		basketNumberDiv.setAttribute("class", "menuNumberDiv");
		let basketNumberNode = document.createTextNode("AMOUNT");
		basketNumberDiv.append(basketNumberNode)
		
		let basketPriceDiv = document.createElement("div");
		basketPriceDiv.setAttribute("class", "menuPriceDiv");
		let basketPriceNode = document.createTextNode("PRICE");
		basketPriceDiv.append(basketPriceNode)
		
		articleDiv.append(basketEmptyDiv);
		articleDiv.append(basketNameDiv);
		articleDiv.append(basketNumberDiv);
		articleDiv.append(basketPriceDiv);
		newDiv.append(articleDiv);
			
		let totalPrice  = 0;
		let totalAmount = 0;
		for(let element of response)
		{
			let URL = element.imageUrl;
			let name = element.name;
			let number = myList[element.id];
			let price = element.price;
			
			totalPrice += price * number; 
			totalAmount += number;
			
			let articleDiv = document.createElement("div");
			articleDiv.setAttribute("class", "basketArticleDiv");
			
			let imageDiv = document.createElement("img");
			imageDiv.setAttribute("class", "basketImage");
			imageDiv.setAttribute("src", URL);
			
			let basketNameDiv = document.createElement("div");
			basketNameDiv.setAttribute("class", "nameDiv");
			let basketNameNode = document.createTextNode(name);
			basketNameDiv.append(basketNameNode)
			
			
			let basketNumberDiv = document.createElement("div");
			basketNumberDiv.setAttribute("class", "numberDiv");
			let basketNumberNode = document.createTextNode(number);
			basketNumberDiv.append(basketNumberNode)
			
			let basketPriceDiv = document.createElement("div");
			basketPriceDiv.setAttribute("class", "priceDiv");
			let basketPriceNode = document.createTextNode(price*number + "€");
			basketPriceDiv.append(basketPriceNode)
			
			let deleteButtonDiv = document.createElement("div");
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
		
		let lineDiv = document.createElement("div");
		lineDiv.setAttribute("class", "line");
		newDiv.append(lineDiv);
		
		
		
		
		let totalDiv = document.createElement("div");
		totalDiv.setAttribute("class", "basketArticleDiv");

		let totalNameDiv = document.createElement("div");
		totalNameDiv.setAttribute("class", "totalNameDiv");
		let totalNameNode = document.createTextNode("TOTAL");
		totalNameDiv.append(totalNameNode)
		
		
		let totalNumberDiv = document.createElement("div");
		totalNumberDiv.setAttribute("class", "totalNumberDiv");
		let totalNumberNode = document.createTextNode(totalAmount);
		totalNumberDiv.append(totalNumberNode)
		
		let totalPriceDiv = document.createElement("div");
		totalPriceDiv.setAttribute("class", "totalPriceDiv");
		let totalPriceNode = document.createTextNode(totalPrice + "€");
		totalPriceDiv.append(totalPriceNode)
		
		let clearBasketDiv = document.createElement("div");
		clearBasketDiv.setAttribute("class", "menuClearDiv");
		clearBasketDiv.innerHTML = "<button class=\"clearButton\" onclick=\"clearBasket()\"></button>";

		totalDiv.append(totalNameDiv);
		totalDiv.append(totalNumberDiv);
		totalDiv.append(totalPriceDiv);
		totalDiv.append(clearBasketDiv);
		newDiv.append(totalDiv);
		
		let payButtonDiv = document.createElement("div");
		payButtonDiv.setAttribute("class", "basketArticleDiv");
		payButtonDiv.innerHTML = "<button class=\"payButton\" onclick=\"pay()\"> PAY</button>";
		newDiv.append(payButtonDiv);
		
		basket.innerHTML += newDiv.innerHTML;
	}
}

function pay()
{
	clearBasket();
	alert("Nous vous remerçions pour votre achat! \nL'adresse de livraison, l'adresse de facturation et vos coordonnées bancaires ont été automatiquement retrouvées grâce à notre IA greenITLover, permettant de réduire le bilan carbone de votre achat.\n\nVotre commande sera livrée par avion et arrivera chez vous d'ici 24h.");	
}

function deleteItem(id)
{
	if(myList[id] == 1)
	{
		myList[id] = null;
	}
	else if(myList[id] ==0)
	{
		console.log("Trying to remove an element that is not in the basket");
	}
	else
	{
		myList[id]--;
	}
	localStorage.setItem('basket', JSON.stringify(myList));
	askBasketContent();
	
	let mouseEnter = document.getElementById("dropDownMouseOver");
	let event = new Event('mouseenter');  
	mouseEnter.dispatchEvent(event);
}
