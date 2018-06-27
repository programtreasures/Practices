import { Directive, Input } from "@angular/core";
import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";


@Directive({
    selector:'[confirmPassword]',
    providers:[{
        provide: NG_VALIDATORS,
        useExisting:ConfirmPasswordDirective,
        multi:true
    }]
})
export class ConfirmPasswordDirective implements Validator{
    @Input() confirmPassword:string;
    validate(control: AbstractControl): {[key:string]: any} | null {
        var passwordField = control.parent.get(this.confirmPassword);
        if(control && this.confirmPassword && control.value !== passwordField.value)
        {
            return {'notEqual':true}
        }
        console.log(this.confirmPassword);
        return null;
    }    
}