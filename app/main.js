import { UpgradesController } from "./Controllers/UpgradesController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();

  upgradesController = new UpgradesController();
  
}

window["app"] = new App();
