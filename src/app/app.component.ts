import { Component } from '@angular/core';
import { ThfMenuItem } from '@totvs/thf-ui/components/thf-menu';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menus: Array<ThfMenuItem> = [
    
    { label: 'Indicadores Prime', icon: 'company', subItems: [  
      { label: 'Indicadores Por Cliente', link: './hello-world' }
    ]},
    { label: 'Manutenção', icon: 'share', subItems: [
      { label: 'Indicadores Manutenção Prime', link: './indmanutprime' },
      { label: 'Indicadores Performance Manutenção Prime', link: './indperfprime' }
    ]}
  ];

}