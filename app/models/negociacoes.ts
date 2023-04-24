import { Negociacao } from "./negociacao.js";

export class Negociacoes {

    private negociacoes: Negociacao[]; //pode usar Negociacao[] no lugar de Array<Negociacao>, tem o mesmo sentido, lista do tipo array.

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {//pode usar readonly no lugar de readonlyArray<t>, passando a lista também abreviada.
        return this.negociacoes;

    }
}