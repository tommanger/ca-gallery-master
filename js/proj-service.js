"use strict"


var gProjs;


function getProjs() {
    return gProjs;
}

function createProjs() {
    gProjs = [createProj('minesweeper', 'Minesweeper', 'Minesweeper game', 'lorem ipsum1', "https://tommanger.github.io/Minesweeper-game/", Date.now(), 1),
              createProj('to-do', 'TODO List', 'Example of TODO', 'lorem ipsum2', "https://tommanger.github.io/Todo-MVC/", Date.now(), 2),
              createProj('Login-site', 'Login Example', 'Example of Login', 'lorem ipsum3', "https://tommanger.github.io/safe-content/login.html", Date.now(), 3),
              createProj('Guess-Me', 'Guess Me', 'Guess me game', 'lorem ipsum2', "https://tommanger.github.io/GuessMe/", Date.now(), 4),
              createProj('books-shop', 'Books Shop', 'Example of site for sell books', 'lorem ipsum3', "https://tommanger.github.io/book-shop/", Date.now(), 5)];
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