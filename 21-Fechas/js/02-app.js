const diaHoy = new Date();
moment.locale('es');

console.log(moment().format('MMMM DD YYYY H:MM:SS A'));

console.log(moment().format('LLLL', diaHoy));

console.log( moment().add(3, 'days').calendar());