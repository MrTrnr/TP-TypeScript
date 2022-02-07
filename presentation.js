import * as readline from 'node:readline';
import { stdin as input, stdout as output }  from 'process';
const rl = readline.createInterface({ input, output });

export class Presentation {

    constructor(service) {
        this.service = service;
    }

    demarrer() {
        console.log('** Administration Collegues **');
        console.log("1. Lister les collègues");
        console.log("99. Sortir");

        rl.question('Que souhaitez-vous faire ? ', (answer) => {

            switch (answer) {
                case "1":
                    console.log(`>> Liste des collègues`);
                    // 1
                    this.service.getCollegues()
                        .then(tab => {
                            // 3
                            for(const col of tab) {
                                console.log(col.nom, col.prenom);
                            }
                            this.demarrer();
                        })
                        .catch(err => {
                            console.log('Ooppps', err);
                        }); 
                    break;
                case "99":
                    console.log(`Au revoir`);
                    rl.close();
                    break;
                default :
                    console.log("Votre choix n'existe pas !");
                    this.demarrer();
                    break;
            }

        });

    }

}



