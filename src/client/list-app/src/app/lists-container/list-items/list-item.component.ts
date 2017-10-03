import { Component, Input, OnInit } from '@angular/core'
import { ListItem } from '../shared/lists.model'


@Component({
  selector: 'list-items',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent implements OnInit {
  @Input() item: ListItem

  ngOnInit(){
    console.log(this.item)
  }
}
