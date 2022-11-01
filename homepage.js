// slider images js
    let imagesLink=[
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-2---Skincare-3_large.gif?v=1655088937",
    "https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Skincare-2-With-BONUS.gif?v=1652238042",
    "https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3_1728264b-2e0f-4314-9a3c-0fde458d72a7.png?v=1649483317",
    "https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3.png?v=1646971494",
    "https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-2.gif?v=1644395072",
    "https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal--3.png?v=1641707966"
    ]
    let leftBtn=document.getElementById("left-btn")
    let rightBtn=document.getElementById("right-btn")
    let crouser=document.getElementById("jaja")
    let imageState=0;
    rightBtn.addEventListener("click", function(){
        imageState++;
        if(imageState===imagesLink.length){
            imageState=0;
        }

            jaja.src=imagesLink[imageState];
    
    
    })
    leftBtn.addEventListener("click", function(){
        imageState--;
        if(imageState<0){
            imageState=imagesLink.length-1
        }
        jaja.src=imagesLink[imageState];
    })

    // login script

    function login(){
        document.location.href="login.html"
    }

    function product(){
        document.location.href="product.html"
    }

   