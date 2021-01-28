import { FieldValueListModel } from './field-value-list-model';

export class FieldListModel {
    sId: number;
    sName: string;
    sectionList: any;
    fieldList: FieldListModel[];
    style: string; 
    fieldId: number;
    fieldTxt: string;
    req: boolean;
    fieldHide: boolean;
    fieldEdit: boolean;
    fieldType: number;
    fieldValueList:FieldValueListModel[];
    rule: any;
    fieldInfo: any;
    criteriaId: any;
    caseJsonKey: any;
    val: string;
    def: string;
    position: string;
    valCode: any;
    fieldOrder: number;
    colSpan: number;
    engVal:string;

  
    constructor() {
      
    }
  }