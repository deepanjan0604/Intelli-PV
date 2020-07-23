import { TabListsModel } from './tab-list-model';

export class ConfigurationModel {
    tabList: TabListsModel[];
    criteria: string;
    statement: string;
    countryListPii: [];
    fs: string;
    fUpldSize: number;
    adverseEventList: string;
    productList: string;
    fup: boolean;
    pgm: string;
    showLink: boolean;
    sid: number;
    
  
    constructor() {
      
    }
  }