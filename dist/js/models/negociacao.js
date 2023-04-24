export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime()); //getTime de uma data, ele retorna a data em milisegundos. Ao passar o getTime para o constructor ele sabe e vai passar a data a partir do time de Data(this._data.getTime). Essa data é identica a data que temos encapsuladas em negociação, porem com nova referencia.
        return data;
    }
}
