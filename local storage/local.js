let products = JSON.parse(localStorage.getItem("data")) || []
console.log("products",products);

const uimaker = () => {
    document.getElementById("box").innerHTML = ""
    products.map((ele,i) => {

        let title = document.createElement("h3")
        title.innerHTML = ele.title
        let img = document.createElement("img")
        img.src = ele.img
        let price = document.createElement("p")
        price.innerHTML = ele.price
        let div = document.createElement("div")

        let btn=document.createElement("button")
        btn.innerHTML="delete"

        div.append(img, title, price,btn)

        btn.addEventListener("click" ,()=>{
            products.splice(i,1)

            console.log(products);
            uimaker()
        })


        console.log(div);
        title.setAttribute("class", "title")

        document.getElementById("box").append(div)
    })
}

const product = (e) => {
    e.preventDefault();

  
    let data = {
        title: document.getElementById('title').value,
        img:document.getElementById('img').value,
        price: document.getElementById('price').value
    }

    products.push(data);
    console.log(products);
    localStorage.setItem("data",JSON.stringify(products));
    uimaker();
}
uimaker();
document.getElementById("form").addEventListener("submit", product);