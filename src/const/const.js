// import Vue from 'vue'
// import store from '../store/index'

// function adicionaZero(numero) {
//     if (numero <= 9)
//         return "0" + numero;
//     else
//         return numero;
// }
// Vue.prototype.disabledBeforeTodayAndAfterAWeek = function(date) {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     return date < new Date(new Date().setHours(0, 0, 0, 0));
// }
// Vue.prototype.globalToast = function(type, msg) {

//     Vue.$toast.open({
//         message: msg,
//         type: type,
//         duration: 2500,
//     });

// }
// Vue.prototype.returnTitle = function() {
//     switch (store.getters.typeCargo) {
//         case 1:
//             return 'vendedor'
//             break
//         case 2:
//             return 'gerente'
//             break
//     }
// }
// Vue.prototype.getImage = function(img) {
 
//     return `http://euvendo.fasters.com.br/api/imagem/produto?path=${img}`
// }
// Vue.prototype.getAtualDate = function() {
//     let data = new Date();
//     let dataFormatada = data.getFullYear() + "-" + (adicionaZero(data.getMonth() + 1)) + "-" + (adicionaZero(data.getDate()));
//     return dataFormatada
// }
// Vue.prototype.pegaData = function(data) {
//     var nova = data.slice(0, 10);
//     var novaBr = data.split('-').reverse().join('/');
//     return data.split('-').reverse().join('/');
// }
// Vue.filter('reverse', function(value) {
//     // slice to make a copy of array, then reverse the copy
//     return value.slice().sort((a, b) => b.data > a.data)
// })