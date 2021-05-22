import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    // Nombre del pipe
   name: 'mayusculas' 
})
export class MaysuculasPipe implements PipeTransform {

    transform(value: string, enMayusuculas: boolean = true): string {
        // if(enMayusuculas){
        //     return value.toLowerCase();
        // } else {
        //     return value.toLowerCase();
        // }

        // Si es true upperCase si es false lowercase
        return ( enMayusuculas )
        ? value.toUpperCase()
        : value.toLowerCase()
    }

}