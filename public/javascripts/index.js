(function(){
    
    var backgroundDiv = document.getElementById('background');
    
    var mainDiv = document.getElementById('main');
    mainDiv.onmouseenter = function(){
        backgroundDiv.classList.add("blurred");
    };
    
    mainDiv.onmouseleave = function(){
        backgroundDiv.classList.remove("blurred");
    };
    
})();