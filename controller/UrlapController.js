import DataService from "../model/DataService.js";
import UrlapView from "../model/UrlapView.js";

class UrlapController {

    constructor(){
        this.urlap = new UrlapView($(".urlap"))
    }
}
export default UrlapController;