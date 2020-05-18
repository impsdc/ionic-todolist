import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  
  todo: string = "";
  error:String = ""
  important: important = null;
  list: TodoElement[] = [
    
  ];
  add(){
    if(this.important == null){
      this.error = "veuillez spécifier l'importance"
    }else{
      this.error = ""
      let todo: TodoElement = {name:this.todo, important:this.important}
      this.list.push(todo)
      this.todo = ""
      this.important = null
    }
   
  }
  delete(i){
   this.list.splice(i, 1)
   this.error=""
   this.todo=""
   this.important= null
  }
  
}

interface TodoElement{
    name:string,
    important: important,
}

enum important{
  low=0,
  medium=1, 
  hight = 2,
  urgent=3,
}

