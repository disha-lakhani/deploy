let ui=(data)=>{

    data.map((ele)=>{

        let id=document.createElement("p")
        id.innerHTML=ele.id

        let title=document.createElement("p")
        title .innerHTML=ele.title
        
        let price=document.createElement("p")
        price.innerHTML=ele.price

        let thumbnail=document.createElement("img")
        thumbnail.src=ele.thumbnail

        let description=document.createElement("p")
        description.innerHTML=ele.description

        let rating=document.createElement("p")
        rating.innerHTML=ele.rating

        let stock=document.createElement("p")
        stock.innerHTML=ele.stock

        let brand=document.createElement("p")
        brand.innerHTML=ele.brand

        let div=document.createElement("div")

        div.append(thumbnail,id,title,price,description,rating,stock,brand)
        div.setAttribute("class","boxs")
        id.setAttribute("class","id")

        document.getElementById("boxes").append(div)
    })
}

fetch("https://dummyjson.com/products")
.then((responce)=>responce.json())
.then((data)=>ui(data.products))