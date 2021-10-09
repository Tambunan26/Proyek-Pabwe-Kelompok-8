/**Berita */
function loads(){
    alert("Berita belum Tersedia")
}
document.getElementById("news").addEventListener("click", loads);
document.getElementById("news2").addEventListener("click", loads);

/**Facebook */
function load(){
    alert("Facebook Himasti Belum tersedia")
}
document.getElementById("facebook").addEventListener("click", load);

/**email */
function sendEmail(){
    window.open('mailto:himasti.del@gmail.com?subject=subject&body=body')
}
document.getElementById('email').addEventListener("click", sendEmail);
/**telefon */
function telefon(){
    alert("Telefon Himasti Belum tersedia")
}
document.getElementById("telefon").addEventListener("click", telefon);