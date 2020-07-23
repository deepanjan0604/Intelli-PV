import { WindowModel } from './window-model';
import { CtabsModel } from './multiple-support-ctabs-model';

export class TabListsModel {
    id: number;
    name: string;
    window: WindowModel[];
    cTabs: CtabsModel[];
    fs: string;
    sId: number;
    default: boolean;
    canMultiple: boolean;    
  
    constructor() {
      
    }
  }