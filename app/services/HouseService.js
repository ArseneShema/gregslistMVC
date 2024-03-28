import { AppState } from "../AppState.js";
import { home } from "../models/home.js";




class HomesService {
    createHome(HomeData) {

        console.log(HomeData);

        const createdHome = new home(HomeData)
        console.log(createdHome);
        AppState.homes.push(createdHome)
        this.SaveHome()
    }


    loadHomes() {
        let dataString = localStorage.getItem('homes')
        const HomeData = JSON.parse(dataString)

    }

    deleteHome(HomeID) {
        let indexToDelete = AppState.homes.findIndex(home => home.id == HomeID)
        console.log('deleting', indexToDelete);
        AppState.homes.splice(indexToDelete, 1)





    }




}


export const homeService = new HomesService()


