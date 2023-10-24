import DataService from "../model/DataService.js";
import HibaView from "../view/HibaView.js";
import DataView from "../view/DataView.js"

class DataController {

    constructor(){
        this.dataService = new DataService();
        this.dataService.getData('../adat.json', this.megjelenit, this.hibaMegjelenit);
        
    }

    megjelenit(lista){
        console.log('controllerben lista:', lista);
        new DataView(lista, $(".lista"))
    }
    hibaMegjelenit(error){
        console.log('controllerben error:', error);
        new HibaView(lista, $(".lista"))
    }
}

export default DataController;