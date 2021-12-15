import { Upgrade } from "./Models/Upgrade.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  cheese = 0

  upgrades = [new Upgrade({name: 'pickaxe', price: 2, multiplier: 2, type: 'click'}), new Upgrade({name: 'drill', price: 75, multiplier: 4, type: 'click'}), new Upgrade({name: 'mine cart', price: 5, multiplier: 2, type: 'automatic'}), new Upgrade({name: 'super Drill', price: 110, multiplier: 8, type: 'automatic'})]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
