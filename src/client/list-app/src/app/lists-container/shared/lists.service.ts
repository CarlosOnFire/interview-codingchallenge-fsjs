import { Injectable } from '@angular/core'
import { List } from './lists.model'

@Injectable()
export class ListsService {

  constructor(){}

  //Pending implementing httpRequest services for db communication
  getAllList(){
    return LISTS
  }

  addNewList(list){
    LISTS.push(list)
  }

  editListName(listName, listNewName){
    LISTS.forEach(list => {
      if(list.name_list === listName)
        list.name_list = listNewName
    })
  }

  deleteList(listName){
    // let index = LISTS.indexOf(listName)
    // console.log(index)
  }

  addNewItem(listName,listItem){
    LISTS.forEach(list => {
      if(list.name_list === listName)
        list.items.push(listItem)
    })
  }

  editItemName(itemName){
    // LISTS.forEach(item => {

    // })
  }

}

const LISTS: List[] = [
  {
    name_list: "Books",
    items: ['Harry Potter', 'Harry Potter 2', 'Lord of the Rings', 'The Hobbit']
  },
  {
    name_list: "Pizza",
    items: ['Pepperoni', 'Macarronni', 'Veggie', 'Double Cheese']
  }
]
