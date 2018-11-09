import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Toast, BodyOutputType, ToasterService } from 'angular2-toaster';
import { BaseSharedComponent } from '../../pages/wizly-analytics/shared/base/base-shared.component';


@Component({
  selector: 'ngx-tables',
  // template: `<router-outlet></router-outlet>`,
  templateUrl: './tables.component.html',
    
    
})
export class TablesComponent  extends BaseSharedComponent {
 
  constructor() {

      super();
  }

  name: any;
  activeModal: any;
  toasterService: any;
  projectName: string;
  ModelID:string;
  Apiurl:string;

 passDataBack(){
debugger;
  this.mSessionService.SetConfig(`${this.projectName}`, `${this.ModelID}`,);
  
  //  debugger;
  // if(this.projectName && this.projectName.trim() != ''){
  //   let arr=[];
  //   // arr.push(this.projectName.trim());
  //   // arr.push(this.ModelID);
  //   // this.name.emit(arr);
  //   // this.activeModal.close();
  // }
  // else{

  //   this.projectName = '';
    
  //   debugger;
  //   const toast: Toast = {
  //     type: 'error',
  //     title: 'Error',
  //     body: 'Enter a valid name',
  //     timeout: 5000,
  //     showCloseButton: true,
  //     bodyOutputType: BodyOutputType.TrustedHtml,
  //   };
  //   this.toasterService.popAsync(toast);
  // }
  
}

ngOnInit() {
  debugger;
  this.projectName=this.baseSession().url;
  this.ModelID=this.baseSession().modelid;

}

}
