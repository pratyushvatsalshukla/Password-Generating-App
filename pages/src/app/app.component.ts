import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 3 ;
  images = [
    {
      title : 'At the Beach', 
      url : 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
    }, 
    {
      title : 'At the Space',
      url : 'https://images.unsplash.com/photo-1541873676-a18131494184?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXN0cm9uYXV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, 
    {
      title : 'At the Cafe',
      url : 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
    }, 
    {
      title : 'At the Pub',
      url : 'https://images.unsplash.com/photo-1538488881038-e252a119ace7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHVifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
    }

  ];
}
