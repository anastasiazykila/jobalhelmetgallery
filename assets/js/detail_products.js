(function() {
    const cat1Data = document.querySelector('.cat-img-1');
    
    cat1Data.addEventListener('click', function(e){
        console.log("function called");
        e.preventDefault();

        localStorage.setItem('key1', '');
        window.location.href = "product-details.html";
    });


});