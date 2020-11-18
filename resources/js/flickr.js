function jsonFlickrApi(rsp){

	console.log(rsp)
}


$(document).ready(function(){
    let numImages = '30';
    $('.dropdown-menu > a').click(function(e){
        numImages = this.innerHTML;
    });

    $("#submit").click(function(){
        document.getElementById("flickr").innerHTML = "";
        let tag = $('#filter').val()
        let url = `https://api.flickr.com/services/rest/?api_key=89b2a6639532ec6db7bd5c2a088eb8f5&method=flickr.photos.search&format=json&tags=${tag}&per_page=${numImages}&nojsoncallback=?`
        $.ajax({url:url, success: function(d){
            console.log(d)
            console.log(numImages)


    //loop for displaying my cards goes until it reaches numImages
        d.photos.photo.forEach(function(p){
            let card = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${p.title}</h5>
                    <img src="https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg"/>c
                </div>
                </div>
            
            `
            document.getElementById("flickr").innerHTML += card;
        });


        }})
    });


    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
            let tag = $('#filter').val()
            let url = `https://api.flickr.com/services/rest/?api_key=89b2a6639532ec6db7bd5c2a088eb8f5&method=flickr.photos.search&format=json&tags=${tag}&per_page=${numImages}&nojsoncallback=?`
            $.ajax({url:url, success: function(d){
                console.log(d)
                console.log(numImages)
    
                d.photos.photo.forEach(function(p){
                    let card = `<div class="card" style="width: 18rem;">
                                    <div class="card-body">
                                         <h5 class="card-title">${p.title}</h5>
                                            <img src="https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg"/>c
                                    </div>
                                </div>`
                document.getElementById("flickr").innerHTML += card;
                });
    
    
            }})
        }
     });
     
});