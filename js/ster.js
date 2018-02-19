/*Likes Animation*/

var sterleeg = document.querySelector('.sterleeg');

var stervol = document.querySelector('.stervol');

function likes() {
    if (sterleeg.classList.contains('hidden')) {
        sterleeg.classList.remove('hidden');
        stervol.classList.add('hidden');
    } else {
        sterleeg.classList.add('hidden');
        stervol.classList.remove('hidden');
    }
}

sterLeeg.addEventListener('click', likes);
sterVol.addEventListener('click', likes);