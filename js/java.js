/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


var body = document.body;
var button = document.querySelector('#vert');
var testing = document.querySelector('.closed img');

function open() {
    body.classList.toggle('open');
    button.classList.toggle('hideFilterButton');
}

function close() {
    body.classList.add('testing2');
    body.classList.remove('open');
    button.classList.toggle('hideFilterButton');
    

}

button.addEventListener('click', open);
testing.addEventListener('click', close);



var test = document.querySelector('section ul:nth-of-type(2) li:nth-of-type(1)')
var test1 = document.querySelector('section ul:nth-of-type(2) li:nth-of-type(1)')
var resultaten = document.querySelector('section + h2');
function humor (){
    body.classList.toggle('humor');
    resultaten.classList.toggle('hidden');
    
}

test.addEventListener('click', humor);





/*Likes Animation*/
var sterLeeg = document.querySelector('.sterleeg');

var sterVol = document.querySelector('.stervol');
var balkje = document.querySelector('header + div');

function likes() {
    sterLeeg.classList.toggle('hidden');
    sterVol.classList.toggle('hidden');
    sterVol.classList.toggle('sterAnimatie');
    balkje.classList.toggle('popupAnimatie');
    balkje.classList.toggle('hidden');
    
}

sterLeeg.addEventListener('click', likes);
sterVol.addEventListener('click', likes);





var searchButton = document.querySelector('input[type=search]:nth-of-type(1)');
var searchField = document.querySelector('body > div input');
var closeButton = document.querySelector('body > div img');

var searchFieldOpen = function () {
    searchField.classList.toggle('hideSearch');
    searchField.classList.toggle('searchButtonAnimation');
    searchButton.classList.toggle('hideSearchButton');
    searchField.classList.toggle('searchButtonAnimation2');
    closeButton.classList.toggle('hideSearchButton');
}

var undoShowSearch = function () {
    searchButton.classList.toggle('hideSearchButton');
    searchField.classList.toggle('hideSearch');
    closeButton.classList.toggle('hideSearchButton');
    searchField.classList.toggle('searchButtonAnimation');
}

searchButton.addEventListener('click', searchFieldOpen);
closeButton.addEventListener('click', undoShowSearch);