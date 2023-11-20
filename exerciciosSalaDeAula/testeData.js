now = new Date()

dayName = new Array("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "sábado")

async function getDateInfo() {
    let monName = ''
    switch (now.getMonth()) {
        case 0:
            monName = 'Janeiro'
            break
        case 1:
            monName = 'Fevereiro'
            break
        case 2:
            monName = 'Março'
            break
        case 3:
            monName = 'Abril'
            break
        case 4:
            monName = 'Maio'
            break
        case 5:
            monName = 'Junho'
            break
        case 6:
            monName = 'Julho'
            break
        case 7:
            monName = 'Agosto'
            break
        case 8:
            monName = 'Setembro'
            break
        case 9:
            monName = 'Outubro'
            break
        case 10:
            monName = 'Novembro'
            break
        case 11:
            monName = 'Dezembro'
            break
        default:
            console.log("Erro ao pegar o mês")
    }
    console.log(`Hoje é ${dayName[now.getDay()]}, ${now.getDate()} de ${monName} de ${now.getFullYear()}`);
    console.log(`Hora: ${now.getHours()}:${now.getMinutes()}`)
}

getDateInfo()
//console.log(now.getDay())
//console.log(now.getDate())