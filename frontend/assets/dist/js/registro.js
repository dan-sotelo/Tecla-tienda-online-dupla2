const nuevoRegistro = document.getElementById('sign-in')

nuevoRegistro.addEventListener('submit', async (evento) =>{
    let nombre = document.getElementById('firstName').value;
    let apellidos = document.getElementById('lastName').value;
    let nickname = document.getElementById('username').value;
    let fecha_nacimiento = document.getElementById('date').value;
    let correo = document.getElementById('email').value;
    let telefono = document.getElementById('phone').value;
    let contrasena = document.getElementById('txtPassword').value;
    
    console.log(nombre,apellidos,contrasena)
    let result = await fetch('http://localhost:3000/usuarios',{
        method:'post',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "contrasena": contrasena,
            "nombre" : nombre,
            "apellidos": apellidos,
            "nickname": nickname,
            "correo": correo,
            "telefono": telefono,
            "fecha_nacimiento": fecha_nacimiento,
            "activo":1
        })
    })

    let resultado = await result.json()
    console.log(resultado)
})