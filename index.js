import {Presentation } from './presentation.js';
import {Service} from './service.js';

const service = new Service();
const presentation = new Presentation(service);
presentation.demarrer(); 