
let menu = document.body.getElementsByClassName("menu")[0]
let hamburger = document.body.getElementsByClassName("hamburger")[0]
let logo = document.body.getElementsByClassName("logo")[0]
let overlay = document.body.getElementsByClassName("overlay")[0];
let closee = document.body.getElementsByClassName("close")[0]
let cart = document.body.getElementsByClassName("cart")[0]
let cart_main = document.body.getElementsByClassName("cart_main")[0]
let price_factor = document.body.getElementsByClassName("price_factor")[0]
let price_factor_val = 0
let price_factor_val_temp = 0
let lower_price_factor = document.body.querySelectorAll(".items span")[1];
let final_price = document.body.getElementsByClassName("final_price")[0]
let plus = document.body.getElementsByClassName("plus")[0]
let minus = document.body.getElementsByClassName("minus")[0]
let cart_items = document.body.getElementsByClassName("cart_items")[0]
let cart_empty = document.body.getElementsByClassName("cart_empty")[0];
let cart_info = document.body.getElementsByClassName("cart_info")[0];
let checkout = document.body.getElementsByClassName("checkout")[0]
let addto_cart = document.body.getElementsByClassName("addto_cart")[0]
let next = document.body.getElementsByClassName("nexticon")[0]
let prev = document.body.getElementsByClassName("previcon")[0]
let deletee = document.body.getElementsByClassName("cart_right")[0]

let disp_img = document.body.querySelector(".upper>img")
let images_thumb = document.body.getElementsByClassName("images_thumb")[0]
let thumb = Array.from(document.body.getElementsByClassName("thumb"));
let thumb_images= Array.from(document.body.querySelectorAll(".thumb img"))

let lb_main = document.body.getElementsByClassName("lb_main")[0]
let lb_disp_img = document.getElementById("lb_display_image")
let lb_images_thumb = Array.from(document.body.getElementsByClassName("lb_images_thumb"))
let lb_thumb = Array.from(document.body.getElementsByClassName("lb_thumb"))
let lb_thumb_images = Array.from(document.body.querySelectorAll(".lb_thumb img"))
let lb_close = document.body.getElementsByClassName("lb_close")[0]
let lb_prev = document.body.getElementsByClassName("lb_previcon")[0]
let lb_next = document.body.getElementsByClassName("lb_nexticon")[0]


let images = [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg",
]

cart_main.classList.toggle("hidden")
cart_items.classList.toggle("hidden")
cart_empty.classList.toggle("hidden")






//cart svg hover state change
{
    cart.addEventListener("mouseover", function(){
        document.body.querySelector(".cart img").src = "images/icon-cart black.svg"
    })
    cart.addEventListener("mouseleave", function(){
        document.body.querySelector(".cart img").src = "images/icon-cart.svg"
    })
}

//img next and prev hover state change
{
    next.addEventListener("mouseover", function(){
        document.body.querySelector(".nexticon img").src = "images/icon-next hover.svg"
    })
    prev.addEventListener("mouseover", function(){
        document.body.querySelector(".previcon img").src = "images/icon-previous hover.svg"
    })
    next.addEventListener("mouseleave", function(){
        document.body.querySelector(".nexticon img").src = "images/icon-next.svg"
    })
    prev.addEventListener("mouseleave", function(){
        document.body.querySelector(".previcon img").src = "images/icon-previous.svg"
    })
}


//hamurger and close functioning
{
    hamburger.addEventListener("click", function(){
        menu.classList.toggle("open")
        closee.classList.toggle("open")
        overlay.classList.toggle("active")
    })
    
    closee.addEventListener("click", function(){
        menu.classList.toggle("open")
        closee.classList.toggle("open")
        overlay.classList.toggle("active")
    })
    
    overlay.addEventListener("click", function(){
        if(window.innerWidth<900){
            menu.classList.toggle("open")
            closee.classList.toggle("open")
            overlay.classList.toggle("active")
        }
    })
}


//Previous and next pic

{
    prev.addEventListener("click",function(){
        let baseURL = "/images/"
        let currentImage = disp_img.src.split("/").pop();
        let currentImageIndex = images.indexOf(currentImage)
        disp_img.src = baseURL+images[(currentImageIndex-1+images.length)%images.length]
    })

    next.addEventListener("click",function(){
        let baseURL = "/images/"
        let images = [
            "image-product-1.jpg",
            "image-product-2.jpg",
            "image-product-3.jpg",
            "image-product-4.jpg",
        ]
        let currentImage = disp_img.src.split("/").pop();
        let currentImageIndex = images.indexOf(currentImage)
        disp_img.src = baseURL+images[(currentImageIndex+1)%images.length]
    })

}


//price factor
{

    plus.addEventListener("click", function(){
        cart_main.classList.add("hidden");
        price_factor_val_temp+=1;
        lower_price_factor.innerHTML = `${price_factor_val_temp} &nbsp;`
        

    })
    minus.addEventListener("click", function(){
        cart_main.classList.add("hidden");
        if(price_factor_val_temp>0){
            price_factor_val_temp -=1;
            lower_price_factor.innerHTML = `${price_factor_val_temp} &nbsp;`
        }
        
    })

}

  


//Cart 

{
    cart.addEventListener("click", function(){
        cart_main.classList.toggle("hidden");
        if(price_factor_val==0){
            cart_empty.classList.remove("hidden");
            cart_info.classList.add("hidden");
            checkout.classList.add("hidden");
        }else{
            cart_empty.classList.add("hidden");
            cart_info.classList.remove("hidden");
            checkout.classList.remove("hidden");
        }
    })

    addto_cart.addEventListener("click", function(){
        cart_main.classList.add("hidden");
        price_factor_val = price_factor_val_temp
        price_factor.innerHTML = `${price_factor_val} &nbsp;`
        let finalval = 125 * price_factor_val
        final_price.innerHTML = `$${finalval}.00`
        addto_cart_clicked = true;
        cart_items.innerHTML = `${price_factor_val}`
        cart_items.classList.remove("hidden")
        if(price_factor_val==0){
            cart_items.classList.add("hidden")
            cart_empty.classList.remove("hidden");
            cart_info.classList.add("hidden");
            checkout.classList.add("hidden");
        }
    })

    deletee.addEventListener("click", function(){
        price_factor_val_temp = 0;
        price_factor_val = 0;
        cart_empty.classList.remove("hidden");
        cart_info.classList.add("hidden");
        checkout.classList.add("hidden");
        lower_price_factor.innerHTML = `${price_factor_val_temp}`
        cart_items.classList.add("hidden")
    })
   
}


//desktop images selection and display

thumb_images.forEach(function(image){
    image.addEventListener("click", function(imagee){
        thumb_images.forEach(function(nt_image){
            nt_image.classList.remove("active")
            thumb.forEach(function(thumb){
                thumb.classList.remove("active")
            })
        })
        let indexofimage = thumb_images.indexOf(image)
        thumb[`${indexofimage}`].classList.add("active")
        imagee.target.classList.add("active")
        disp_img.src = `images/image-product-${indexofimage+1}.jpg`
    })
})



//lighbox features



// lb close hover state
{   
    lb_close.addEventListener("mouseover", function(){
        document.body.querySelector(".lb_close img").src = "images/icon-close orange.svg"
    })
    lb_close.addEventListener("mouseleave", function(){
        document.body.querySelector(".lb_close img").src = "images/icon-close.svg"
    })
}
  
//lb next and prev hover state changes
{
    document.body.getElementsByClassName("lb_nexticon")[0].addEventListener("mouseover", function(){
        document.body.querySelector(".lb_nexticon img").src = "images/icon-next hover.svg"
    })
    document.body.getElementsByClassName("lb_previcon")[0].addEventListener("mouseover", function(){
        document.body.querySelector(".lb_previcon img").src = "images/icon-previous hover.svg"
    })
    document.body.getElementsByClassName("lb_nexticon")[0].addEventListener("mouseleave", function(){
        document.body.querySelector(".lb_nexticon img").src = "images/icon-next.svg"
    })
    document.body.getElementsByClassName("lb_previcon")[0].addEventListener("mouseleave", function(){
        document.body.querySelector(".lb_previcon img").src = "images/icon-previous.svg"
    })
}

//close the lighbox
{
    lb_close.addEventListener("click", function(){
        lb_main.classList.remove("active")
        overlay.classList.remove("active")
    })
}

//open the lightbox
{
    disp_img.addEventListener("dblclick", function(){
        lb_main.classList.add("active")
        overlay.classList.add("active")
    })
}
    
//lightbox image selection and display

lb_thumb_images.forEach(function(image){
    image.addEventListener("click", function(imagee){
        lb_thumb_images.forEach(function(nt_image){
            nt_image.classList.remove("active")
            lb_thumb.forEach(function(thumb){
                thumb.classList.remove("active")
            })
        })
        let indexofimage = lb_thumb_images.indexOf(image)
        lb_thumb[`${indexofimage}`].classList.add("active")
        imagee.target.classList.add("active")
        lb_disp_img.src = `images/image-product-${indexofimage+1}.jpg`
    })
})


// light box next and prev image selection
{
    lb_prev.addEventListener("click",function(){
        let baseURL = "/images/"
        let currentImage = lb_disp_img.src.split("/").pop();
        let currentImageIndex = images.indexOf(currentImage)
        lb_disp_img.src = baseURL+images[(currentImageIndex-1+images.length)%images.length]
    })
    
    lb_next.addEventListener("click",function(){
        let baseURL = "/images/"
        let currentImage = lb_disp_img.src.split("/").pop();
        let currentImageIndex = images.indexOf(currentImage)
        lb_disp_img.src = baseURL+images[(currentImageIndex+1)%images.length]
    })
}
    
