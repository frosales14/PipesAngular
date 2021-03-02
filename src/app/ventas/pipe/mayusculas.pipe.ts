import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayusculas'
})
export class EnMayusculas implements PipeTransform {
    transform( valor: string, cambiar: boolean) {
        return (cambiar) 
                    ? valor.toUpperCase()
                    : valor.toLocaleLowerCase();
    
    }
}