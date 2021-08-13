const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

const pais = {
    translations: {
      br: "Canadá",
      de: "Kanada",
      es: "Canadá",
      fa: "کانادا",
      fr: "Canada",
      hr: "Kanada",
      it: "Canada",
      ja: "カナダ",
      nl: "Canada",
      pt: "Canadá"
    },
    territorio: "4000 KM"
}

for(let [llave, valor] of Object.entries(pais)){
    console.log(valor);
    for(let [idioma, lenguaje] of Object.entries(valor)){
        console.log(lenguaje);
    }
}

for (let propiedad in automovil) {
    console.log(`${propiedad} - ${automovil[propiedad]}`);
}

for (let [llave, valor] of Object.entries(automovil)){
    // console.log(valor);
    console.log(llave);
}