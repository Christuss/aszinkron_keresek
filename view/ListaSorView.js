class ListaSorView {
    #obj = {}
    constructor(obj, szuloElem, index) {
        this.#obj = obj
        this.szuloElem = szuloElem
        this.index = index

        this.#sor()
        this.sorElem = this.szuloElem.children("tr:last-child");
        this.xElem = this.sorElem.children(".x");
        this.xElem.css("display", "none");
        this.keszElem = this.sorElem.children(".pipa");
        this.kukaElem = this.sorElem.children(".kuka");

        if (this.#obj.kesz) {
            this.sorElem.css("background-color", "lightgreen");
            this.keszElem.css("display", "none");
            this.xElem.css("display", "inline");
        }

        this.keszElem.on('click', () => {
            this.#esemenyTrigger("kesz");
            
        })
        this.xElem.on('click', () => {
            this.#esemenyTrigger("megse");
        })
        this.kukaElem.on('click', () => {
            this.#esemenyTrigger("torol");
        })
        
    }
    #sor(){
       let s = "<tr>";
      for (const key in this.#obj) {
        s += "<td>" + this.#obj[key] + "</td>";
      }
      s +=
        "<td class = 'pipa'>✔</td><td class = 'x'>❌</td><td class = 'kuka'>🗑</td></tr>";
        this.szuloElem.append(s);
    }

    #esemenyTrigger(esemenyneve) {
        const esemenyem = new CustomEvent(esemenyneve, {detail:this.index})
        window.dispatchEvent(esemenyem);
    }
}

export default ListaSorView;