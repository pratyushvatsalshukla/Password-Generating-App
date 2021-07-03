import { Component } from '@angular/core';
import { generate } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0 ;
  includeLetters = false ;
  includeNumbers = false ;
  includeSymbols = false ;
  password = '' ;

  onChangeLength(event:any){
   const parsedValue = parseInt(event.target.value) ;
   if(!isNaN(parsedValue))
   {
      this.length = parsedValue ;
   }
   
  }
  
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
    const numbers = '1234567890' ;
    const letters = 'qwertyuioplkjhgfdsazxcvbnm' ;
    const symbols = '!@#$%^&*(){}":?><,./;[]' ;

    let validChars = '' ;
    if(this.includeLetters){
      validChars += letters ;
    }
    if(this.includeNumbers){
      validChars += numbers ;
    }
    if(this.includeSymbols){
      validChars += symbols ;
    }

    let generatedPassword ='' ;
    for(let i = 0 ; i < this.length ; i++){
      const index = Math.floor(Math.random() * validChars.length) ;
      generatedPassword += validChars[index] ;
    }

    this.password = generatedPassword ;

  }

  // getPassword(){
  //   return this.password ;
  // }

  getPassword(){
    return this.password;
  }

}
