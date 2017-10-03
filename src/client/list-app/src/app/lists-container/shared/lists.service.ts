import { Injectable } from '@angular/core'
import { List, ListItem } from './lists.model'

@Injectable()
export class ListsService {

  constructor(){}

  getAllList(){
    return LISTS
  }
}

const LISTS:List[] = [
  {
    id_list: 1,
    name_list: "Books",
    items: [
      {
        id_item: 1,
        name_item: "Harry Potter"
      },
      {
        id_item: 2,
        name_item: "Harry Potter 2"
      },
      {
        id_item: 3,
        name_item: "Harry Potter 5555"
      },
      {
        id_item: 4,
        name_item: "Harry Potter Teah"
      }
    ]
  },
  {
    id_list: 2,
    name_list: "Movies",
    items: [
      {
        id_item: 1,
        name_item: "Rocky"
      },
      {
        id_item: 2,
        name_item: "Rocky 2"
      },
      {
        id_item: 3,
        name_item: "Rocky 3"
      },
      {
        id_item: 4,
        name_item: "Rocky Teah"
      }
    ]
  }
]
