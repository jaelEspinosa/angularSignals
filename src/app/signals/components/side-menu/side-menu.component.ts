import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  //**menu dinámico con señales */
  public menuItems = signal<MenuItem[]>([
    {title:'Contador', route:'counter'},
    {title:'Usuario', route:'userInfo'},
    {title:'Mutaciones', route:'properties'}
  ]);



  //**medoto tradicional para hacer un menu dinamico */

  /* public menuItems: MenuItem[] = [
    {title:'Contador', route:'counter'},
    {title:'Usuario', route:'userInfo'},
    {title:'Mutaciones', route:'properties'},
  ]; */


}
