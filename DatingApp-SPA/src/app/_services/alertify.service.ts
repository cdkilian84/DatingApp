import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
// see vid 56 regarding above alertify import and typescript declaration modules

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(message: string, okCallback: () => any){
    alertify.confirm(message, (e: any) => {
      if (e) {
        okCallback();
      }
    });
  }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  message(message: string) {
    alertify.message(message);
  }

}
