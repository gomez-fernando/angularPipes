import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizadoPersonalizado',
})
export class CapitalizadoPersonalizadoPipe implements PipeTransform {
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value: string, todas: boolean = true): string {
    // console.log(value);
    // console.log(todas);
    value = value.toLocaleLowerCase();
    let nombres: string[] = value.split(' ');
    console.log(nombres);

    if (todas) {
      nombres = nombres.map((nombre) => {
        return nombre[0].toUpperCase() + nombre.substr(1);
      });
      console.log(nombres);
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
      // return 'Hola Mundo';
    }
    return nombres.join(' ');
  }
}
