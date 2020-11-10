function jsonFlickrApi(rsp){
    console.log(rsp)
}

$(document).ready(function(){
    let numImg = '30';
    $('.dropdown-menu > a').click(function(e){
        numImg = this.innerHTML; 
    }); 

    $('#submit').click(function(){
        document.getElementById("flickr").innerHTML = ""; 
        let tag = $('#filter').val()
        let url = `https://api.flickr.com/services/rest/?api_key=89b2a6639532ec6db7bd5c2a088eb8f5&method=flickr.photos.search&format=json&tags=${tag}&per_page=${numImg}&nojsoncallback=?`
        $.ajax({url:url, success:function(data){
            console.log(data)
            console.log(numImg)

            data.photos.photo.forEach(function(pho){
                let card = '<div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">${pho.title}</h5><img src="https://farm${pho.farm}.staticflickr.com/${pho.server}/${pho.id}_${pho.secret}.jpg"/>c</div></div>'
                document.getElementById("flickr").innerHTML += card; 
            });
        }})
    });

    $(window).scroll(function(){
        if($(window).scrollTop() >= $(document).height() - $(window).height() - 10){
            let tag = $('#filter').val()
            let url = `https://api.flickr.com/services/rest/?api_key=89b2a6639532ec6db7bd5c2a088eb8f5&method=flickr.photos.search&format=json&tags=${tag}&per_page=${numImg}&nojsoncallback=?`
            $.ajax({url:url, success:function(data){
            console.log(data)
            console.log(numImg)

            data.photos.photo.forEach(function(pho){
                let card = '<div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">${pho.title}</h5><img src="https://farm${pho.farm}.staticflickr.com/${pho.server}/${pho.id}_${pho.secret}.jpg"/>c</div></div>'
                document.getElementById("flickr").innerHTML += card; 
            });
        }})
    }
    });   
});