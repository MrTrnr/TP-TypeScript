// CommonJS
// RequireJS
// en 2015 => ES Modules (mot clé import et export)

import fetch from 'node-fetch';
import collegue from './collegue';

export class Service {
    
    async getCollegues() { // Promise<Tableau>
        const response = await fetch(
            'https://formation-angular-collegues.herokuapp.com/api/v1/collegues');
        return await response.json();
    }

    // getColleguesV1() {
    //     return fetch(
    //         'https://formation-angular-collegues.herokuapp.com/api/v1/collegues') // Promise<Response>
    //         .then(resp => resp.json()); // Promise<Tableau>

    // }

    // créer un collègue

    async setCollegues(){
        const body: collegue = 
            {nom: "Léléfan",
            photo: "super trompe",
            prenom: "Babar",
            pseudo: "Dumbo"};

        const response = await fetch('https://formation-angular-collegues.herokuapp.com/api/v1/collegues', {
            method: 'post',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        
        return(data);
    }
  

    
}
