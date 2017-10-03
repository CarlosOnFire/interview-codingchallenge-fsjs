import { Component, Input, OnInit } from '@angular/core';
import { ListsService } from './shared/lists.service'
import { List } from './shared/lists.model'

@Component({
  selector: 'lists-container-component',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})

export class ListContainerComponent implements OnInit {
  lists: List[]

  constructor(private listsService:ListsService){

  }

  ngOnInit(){
    this.lists = this.listsService.getAllList()
    console.log(this.lists);
  }
}
