document.getElementById('showpopup').addEventListener("click", function (){
    document.getElementById('contactpop-up') .style.display = 'block';
});

document.getElementById('closepopup').addEventListener('click', function (){
    document.getElementById('closepopup').style.display = 'none';
});



function openPopup() {
    document.getElementById('contactPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('contactPopup').style.display = 'none';
}

function openEmail() {
    window.location.href = 'mailto:noortjemelans@gmail.com';
}

