function carregar(){
    var msg = document.getElementById('msg')
    var hour = document.getElementById('hour')
    var foto = document.getElementById('foto')
    var hora = new Date
    var h = hora.getHours()
    var m = hora.getMinutes()
    var h = 8
    if (h<6){
        msg.innerHTML = 'Boa Madrugada'
        hour.innerHTML = `Agora são ${h} horas e ${m} minutos`
        foto.src = 'noite.png'
    }else if (6<=h&&h<12){
        msg.innerHTML = 'Bom dia'
        hour.innerText = `Agora são ${h} horas e ${m} minutos` 
        foto.src = 'manha.png'
        document.body.style.background = '#b7ccd5'
    }else if (h>=12 && h<18){
        msg.innerHTML = 'Boa tarde'
        hour.innerHTML = `Agora são ${h} horas e ${m} minutos`
        foto.src = 'tarde.png'
        document.body.style.background = '#fdbb9b'
    }else { 
        msg.innerHTML = 'Boa noite'
        hour.innerHTML = `Agora são ${h} horas e ${m} minutos`
        foto.src = 'noite.png'
        document.body.style.background = '#081d20'
    }
}