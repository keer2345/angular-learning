import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-itme',
  templateUrl: './todo-itme.component.html',
  styleUrls: ['./todo-itme.component.css']
})
export class TodoItmeComponent implements OnInit {
  @Input() todo: Todo
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter()

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  setClasses() {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    }
    return classes
  }
  onToggle(todo) {
    todo.completed = !todo.completed
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));

  }
  onDelete(todo) {
    this.deleteTodo.emit(todo)
  }


}
