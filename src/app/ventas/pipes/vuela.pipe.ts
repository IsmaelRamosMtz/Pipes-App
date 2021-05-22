import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

    // MI MANERA

    // transform(valor: string, vuela: boolean = true) {
    //     console.log(valor);
    //     // console.log(vuela);
    //     if(vuela == true){
    //         return valor = 'vuela'
    //     } else {
    //         return valor = 'no vuela'
    //     }
    // }

    // MANERA DEL CURSO
    transform(valor: boolean) {
        console.log(valor);
        if(valor == true){
            return 'vuela'
        } else {
            return 'no vuela'
        }
    }

}