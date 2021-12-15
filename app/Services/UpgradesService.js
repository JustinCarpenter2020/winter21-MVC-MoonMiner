import { ProxyState } from "../AppState.js"

class UpgradesService{
  mine(){
    ProxyState.cheese += 1
    ProxyState.upgrades.forEach(u => ProxyState.cheese += (u.quantity * u.multiplier))
    console.log(ProxyState.cheese)  
  }
  buyUpgrade(itemName) {
    let found = ProxyState.upgrades.find(u => u.name == itemName)
    if(ProxyState.cheese >= found.price){
      ProxyState.cheese -= found.price
      found.quantity++
      found.price *= 2
      ProxyState.upgrades = ProxyState.upgrades
    } else {
      window.alert('you poor')
    }

  }

  collectAutos(){
    ProxyState.upgrades.forEach(u => {
      if(u.type == 'automatic'){
        ProxyState.cheese += (u.quantity * u.multiplier)
      }
    })
    console.log('Autos', ProxyState.cheese)

  }
}

export const upgradesService = new UpgradesService()