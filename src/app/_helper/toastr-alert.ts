import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrAlert {

  constructor(private toastr:ToastrService) { }

  ShowAlert(message:any,type:any){
    let config = {
      timeOut: 3000,
      positionClass: 'toast-top-right'
    }

    if(type=='success')
    {
      this.toastr.success(message,'',config)
    }
    else if(type=='error')
    {
      this.toastr.error(message,'',config)
    }
    else if(type=='warning')
    {
      this.toastr.warning(message,'',config)
    }
    else if(type=='info')
    {
      this.toastr.info(message,'',config)
    }
  }
}
