"use strict"

function init(){
    createProjs();
    renderPortfolios();

}

function renderPortfolios(){
    var projs = getProjs();

    var strHTMLs = projs.map(function(proj){
        return `<div class="col-md-4 col-sm-6 portfolio-item" onclick="onClickOpenModal('${proj["id"]}')">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>${proj["name"]}</h4>
                        <p class="text-muted">${proj["title"]}</p>
                    </div>
                </div>`
    });
    $('.container-portfolio').html(strHTMLs);
}



function onClickOpenModal(id){
    var proj = getProjById(id);
    $('#modal-name').html(proj['name']);
    $('#modal-title').html(proj['title']);
    $('#modal-desc').html(proj["desc"]);
    $('#modal-date').html('Date: ' + proj["publishedAt"]);
    $('#modal-client').html('Client: ' + proj["labels"][0]);
    $('#modal-category').html('category: ' + proj["labels"][1])

}