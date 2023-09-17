import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-reques.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {

  public user = signal<User>({
    id:18,
    email:'george.Washington@gmail.com',
    first_name: 'Dencel',
    last_name: 'Washington',
    avatar:'https://www.alohacriticon.com/wp-content/uploads/2021/12/denzel-washington-peliculas-fotos-series-biografia.jpg'
  })
  public counter = signal(10)
  public fullName = computed( ()=>`${this.user().first_name} ${this.user().last_name}`)

 //el efecto se dispara cada vez que una variable que esté adentro de él cambie su valor.
  public userChangeEffect = effect( ()=>{
    console.log(`${this.user().first_name} - ${this.counter()}- se disparó el effect`)
  })

  // desde el boton del html llamamos esta funcion que cambia el valor del counter.
  increaseBy(value:number){
   this.counter.update(current => current + value)
  }

  onFieldUpdated(field:keyof User, value:string){
     this.user.mutate( current =>{
      switch( field) {
        case 'email' :
          current.email = value;
        break;
        case 'first_name' :
          current.first_name = value;
        break;
        case 'last_name' :
          current.last_name = value;
        break;
      }
     })
  }
}
