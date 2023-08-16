document.addEventListener("DOMContentLoaded", function() {

    let navbar = document.getElementById("navlist")
    let logoutNav = document.createElement("li")
    let loginNav = document.createElement("li")
    
    let loginIn = document.createElement("li")

    loginIn.classList.add("nav-item")
    loginIn.innerHTML = `<link rel="stylesheet" href="css/usuario-logueado-nav.css">
    <div class="login-container">
    <a class="login-perfil">Perfil</a>
        <input type="image" src="./foto-login-perfil.png" id="perfil" class="foto-perfil-login">
        </input>
        <div class="tarjeta" id="tarjeta">
            <h5>Nombre Apellido</h5>
            <p id="email-p">${localStorage.getItem("email")}</p>
            <p id="salir">logOut</p>
        </div>
    </div>
    <script src="login.js"<script>
`

    logoutNav.classList.add("nav-item")
    logoutNav.innerHTML =
    `<a class="nav-link">LogOut</a>
    
    `

    loginNav.classList.add("nav-item")
    loginNav.innerHTML =
    `<a class="nav-link" href="login.html">LogIn</a>`

    if (localStorage.getItem("email")) {
        // navbar.appendChild(logoutNav)
        navbar.appendChild(loginIn)
        const perfil = document.getElementById('perfil');
        const tarjeta = document.getElementById('tarjeta');

        perfil.addEventListener('click', () => {
        tarjeta.style.display = (tarjeta.style.display === 'block') ? 'none' : 'block';
});
    }else{
        navbar.appendChild(loginNav)
    }

    document.getElementById("salir").addEventListener("click", function() {

        localStorage.removeItem("email")
        //esto hay que cambiarlo
        location.reload();

    })

})