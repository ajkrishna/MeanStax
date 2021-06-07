import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
//import * as EventEmitter from 'events';

@Component({
  selector: 'app-deleteac',
  templateUrl: './deleteac.component.html',
  styleUrls: ['./deleteac.component.css']
})
export class DeleteacComponent implements OnInit {

  @Input() item:string | null | undefined;
  @Output() onDelete=new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  delete(){
    this.onDelete.emit(this.item)
  }

}
