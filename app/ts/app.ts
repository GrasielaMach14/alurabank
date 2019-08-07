import {Negociacao} from "../ts/models/Negociacao";

let negociacao = new Negociacao(new Date(), 40, 390);
negociacao._quantidade = 38;
console.log(negociacao._quantidade);