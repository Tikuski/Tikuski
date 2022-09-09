const productDOM = document.querySelector('.product')
const url = 'https://course-api.com/javascript-store-single-product'

const fetchProduct = async () =>{
    try{
        productDOM.innerHTML = '<div class= product-loading>Loading...</div>'
        const params = newURLSearchParams(window.location.search)
        
        const response = await fetch (`${url}?id=${id}`)
        const data = response.json()
        return data
    } catch (error) {
        productDOM.innerHTML =<p class="error">There was a problem loading the product. Please try again</p>
    }
}
const displayProduct = (product) =>{
    // company, colors, description, name:title, price, image(url:img)
    const {
        company,
        colors,
        description,
        name: title,
        price,
        image,
    } = product.fields;
    const {url : img} = image[0]
    document.title = title.toUpperCase()


    const colorsList = colors
    .map((color) =>{
        return `<span class ="product-color" style ="background: ${color}"></span>`
    })
    .join('')

    productDOM.innerHTML = `<div class = "product-wrapper">
    <img src="${img}" class ="img" alt="${title}"/>
    <div class ="product-info">
    <h3>${title}</h3>
    <h5>${company}</h5>
    <span>${price / 100}</span>
    <div class = "colors">
            ${colorsList}
        </div>
        <p>
         ${description}
        </p>
        <button class ="btn">Add to cart</button>
      
       </div>
    
    </div?>`
}

const start = async () =>{
    const data = await fetchProduct()
    displayProduct(data)
}
start()
