'use strict'

class Rule{

    constructor(name){
     this.name = name  

    } 
  
   userNameRule(name = ''){
       if(name.length >= 5 && name.length <= 15){
           return true
       }
     else return false  
   }  

   userAgeRule(age = ''){
       if(age > 1900 && age < 2023){
           return true
       }
       else return false
   }  

   userHeightRule(h = ''){
    if(h > 0 && h < 2.6){
        return true
    }
    else return false
   }  

   userWeightRule(w = ''){
    if(w > 0 && w < 300){
        return true
    }
    else return false
   }

}


class Logger{
    constructor(){
        
    }
  
    consoleLogger(rule){
        if(rule === true){
            console.log('data is correct')
        }
        else console.log('data is incrrect')
    }

    alertLogger(rule){
         if(rule == true ){
             alert('data is correct')
         }
         else  alert('data is incorrect')
    }

    domLogger(rule){
        if(rule == true ){
            document.body.insertAdjacentHTML('beforeend' , `<h2> data is correct </h2> `)
        }

        else  document.body.insertAdjacentHTML('beforeend',  `<h2 > data is incorrect </h2> `)
    }

}   



class Validator{
    constructor(form){
        this.form = form
        this.rule = new Rule()
        this.logger = new Logger()     
        
    } 

    validate(arr){ 
        if(this.rule.userNameRule(arr[0]) &&  this.rule.userAgeRule(arr[1]) && this.rule.userHeightRule(arr[2])
         &&   this.rule.userWeightRule(arr[3]) ){
             return true
         }
         else return false
      
     
    }
}

class Proccesor{
   constructor(form){
       this.form = form
       this.validator = new Validator(form)
       this.button = document.querySelector('button')
       this.arr = []
   }   

   succses(e){
       e.preventDefault()
       this.arr = []
       this.arr.push(this.form[0].value , parseInt(this.form[1].value) , parseInt(this.form[4].value) ,
               parseInt( this.form[5].value))
       console.dir(this.arr)
      if( this.validator.validate(this.arr)){
          this.validator.logger.domLogger(true)
          this.attach()
      } 
      else this.validator.logger.alertLogger(false) 

       
   }

   attach(){
       console.dir(this.arr)
       this.arr = []
       console.dir(this.arr)

        for (let i = 0 ; i < 6 ; i ++){
           
            this.arr.push(this.form[i].value)
            
        }
        this.form.remove() 
        
              let str = ` <h2> Hello ${this.arr[0]} </h2> 
                           <h2> you are ${ 2023 - this.arr[1] } years</h2>
                           <h2> your eyes are ${this.arr[2]} </h2>
                           <h2> your hair are ${this.arr[3]} </h2>
                           <h2> your height are ${this.arr[4]} meters </h2>
                           <h2> your weight are ${this.arr[5]} killogram </h2>
              `
         
       
        document.body.insertAdjacentHTML("afterbegin" , str)
   }
  
   

   init(){
       console.dir(this.validator.form)
       this.button.addEventListener('click' , this.succses.bind(this))
      
   }
 
}

let form = document.querySelector('form')

let processor = new Proccesor(form)


processor.init()




