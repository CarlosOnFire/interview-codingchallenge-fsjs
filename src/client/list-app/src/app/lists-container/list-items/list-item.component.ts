import { Component, Input, OnInit } from '@angular/core'
import { ListsService } from '../shared/lists.service'
import { List } from '../shared/lists.model'


@Component({
  selector: 'list-items',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent implements OnInit {
  @Input() item: List

  constructor(private listServices:ListsService){}

  ngOnInit(){
    console.log(this.item)
  }

  editItem(item){
    this.listServices.editItemName(item)
  }
}
