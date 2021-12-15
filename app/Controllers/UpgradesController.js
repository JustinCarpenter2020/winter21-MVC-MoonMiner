import { ProxyState } from "../AppState.js"
import { upgradesService } from "../Services/UpgradesService.js"



function _drawCheese() {
  document.getElementById('cheese').innerText = ProxyState.cheese.toString()
}

function _drawInventory(){
  let template = ''
  ProxyState.upgrades.forEach(u => template += `<p>${u.name} +${u.quantity * u.multiplier} per ${u.type == 'automatic' ? 'three seconds' : 'click'}</p>`)
  document.getElementById('inventory').innerHTML = template
}

function _drawUpgrades(){
  let template = ''
  ProxyState.upgrades.forEach(u => template += u.buttonTemplate)
  document.getElementById('offCanvas').innerHTML = template
}
export class UpgradesController{
  constructor(){
    ProxyState.on('cheese', _drawCheese)
    ProxyState.on('cheese', _drawUpgrades)
    ProxyState.on('upgrades', _drawInventory)
    ProxyState.on('upgrades', _drawUpgrades)
    setInterval(this.collectAutos, 3000)
    console.log(ProxyState.upgrades)
    _drawInventory()
    _drawUpgrades()
  }

  mine(){
   upgradesService.mine()
  }

  collectAutos(){
    upgradesService.collectAutos()
  }


  buyUpgrade(itemName){
    upgradesService.buyUpgrade(itemName)
  }
}


