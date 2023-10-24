import ListaSorView from "./ListaSorView.js";

class ListaView {
    constructor(szuloElem, lista) {
        this.szuloElem = szuloElem;
        this.lista = lista;
        this.szuloElem.append("<table class='table table-bordered'></table>");
    }

    megjelenites() {
        this.lista.forEach((elem, index) => {
            new ListaSorView(elem, $(".table"), index);
        });
    }
}
export default ListaView;
