class UrlapView {
    constructor(szuloElem){
        this.szuloElem = szuloElem
        this.szuloElem.append('<form>');
        this.formElem = $(".urlap form");
    }
}
export default UrlapView;