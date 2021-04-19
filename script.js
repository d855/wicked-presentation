window.addEventListener('load', function(){
    var bee = document.getElementById('bee');
    var anime = document.getElementById('anime');
    var dropD = document.getElementById('dropdown');
    var text = document.querySelector('#main p');
    var select = document.getElementById('drop');
    var icon = document.getElementById('icon');
    
    setTimeout(function(){
        text.classList.remove('hidden');
        text.classList.add('wicked-bounceIn');
    }, 200);
    
    setTimeout(function(){
        select.classList.remove('hidden');
        select.classList.add('wicked-bounceIn');
    }, 400)
    
    setTimeout(function(){
        icon.classList.remove('hidden');
        icon.classList.add('wicked-bounceIn');
    }, 600)
    
    
    
    
    anime.addEventListener('click', function(){
        var value  = document.getElementById('dropdown').value;

        animateMe(value);

    })
    
    dropD.addEventListener('change', function(){
        dropD = this.value;

        animateMe(dropD);

    })
    
    
    function animateMe (input = ''){
        bee.className = '';
        window.requestAnimationFrame(function(time){
            window.requestAnimationFrame(function(time){
                bee.className = 'wicked-' + input;
            })
        })
    }
    
    
})