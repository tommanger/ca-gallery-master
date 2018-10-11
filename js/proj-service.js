"use strict"


var gProjs;


function getProjs() {
    return gProjs;
}

function createProjs() {
    gProjs = [createProj('books-shop1', 'Books Shop1', 'Example1 of site for sell books', 'lorem ipsum1', "projs/book-shop1", Date.now(), 6),
              createProj('books-shop2', 'Books Shop2', 'Example2 of site for sell books', 'lorem ipsum2', "projs/book-shop2", Date.now(), 5),
              createProj('books-shop3', 'Books Shop3', 'Example3 of site for sell books', 'lorem ipsum3', "projs/book-shop3", Date.now(), 4)];
}

function createProj(id, name, title, desc, url, publishedAt,img) {
    return {
        "id": id,
        "name": name,
        "title": title,
        "desc": desc,
        "url": url,
        "publishedAt": publishedAt,
        "labels": ["Matrixes", "keyboard events"],
        "image": img
    }
}

function getProjById(id){
    return gProjs.find(function(proj){
        return id === proj["id"]
    })

}