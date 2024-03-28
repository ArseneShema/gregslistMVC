import { AppState } from "../AppState.js";
import { getFormData } from "../utils/FormHandler.js";
import { homeService } from "../services/HouseService.js";

export class HomeController {
  constructor() {
    console.log('homes');
    this.drawHomes()

  }

  drawHomes() {
    console.log('drawing homes');

    const Homes = AppState.homes
    let homehtml = ''

    Homes.forEach(home => homehtml += home.HomeCard)


    const homelistElm = document.getElementById('homes-list')

    HomelistElm.innerHTML = homehtml


  }

}

