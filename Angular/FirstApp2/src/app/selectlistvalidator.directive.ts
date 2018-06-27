import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { Directive } from "@angular/core";

@Directive({
    selector:'[SelectListValidator]',
    providers:[{
        provide: NG_VALIDATORS,
        useExisting:SelectListValidator,
        multi:true
    }]
})
export class SelectListValidator implements Validator {

validate(control : AbstractControl): {[key:string]:any}|null{
   return control.value === '' ||  control.value === null  ? {'defaultSelected':true} : null;
}
 
}