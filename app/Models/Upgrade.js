import { ProxyState } from "../AppState.js"

export class Upgrade{
  constructor(data){
    this.name = data.name,
    this.price = data.price,
    this.multiplier = data.multiplier,
    this.quantity = data.quantity || 0,
    this.type = data.type
  }

  get buttonTemplate(){
    return `<div class="col-3">
    <button class="btn btn-primary" onclick="app.upgradesController.buyUpgrade('${this.name}')" ${ProxyState.cheese < this.price? 'disabled' : ''}>
    ${this.name} | ${this.price}
    </button>
  </div>`
  }
}