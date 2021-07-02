import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false ;
  includeNumbers = false ;
  includeSymbols = false ;
  password = '' ;

  
  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters ;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers ;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols ;
  }

  onButtonClick(){
    console.log(this.includeLetters) ;
    console.log(this.includeNumbers) ;
    console.log(this.includeSymbols) ;
    this.password = "My Password" ;
  }

  // getPassword(){
  //   return this.password ;
  // }

  getName(){
    return "Pratyush" ;
  }

}
