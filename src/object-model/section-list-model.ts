import { FieldListModel } from './field-list-model';

export class SectionListModel {
    sId: number;
    sName: string;
    sectionList: any;
    fieldList: FieldListModel[];
    style: string; 
  
    constructor() {
      
    }
  }