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
  newList : List
  inputData = ""
  inputDataEdit = ""
  inputDataItem = ""
  addMode = true
  addModeItem = false
  addModeEdit = false

  constructor(private listsService:ListsService){

  }

  ngOnInit(){
    this.lists = this.listsService.getAllList()
    console.log(this.lists);
  }

  createNewList(){
    if(this.inputData.length > 0){
    this.newList = {
      name_list: this.inputData,
      items: []
    }
    this.listsService.addNewList(this.newList)
    console.log(this.lists)
    }else{
      console.log("You can't create a list without a name");
    }
    this.inputData = ""
  }

  showEditListName(listName){
    this.addMode = false
    this.addModeItem = false
    this.addModeEdit = true
    console.log(listName)
    if(this.inputDataEdit.length > 0)
    this.editListName(listName)
    this.inputDataEdit = ""
  }

  editListName(listName){
    this.addModeShow()
    this.listsService.editListName(listName, this.inputDataEdit)
  }

  deleteList(listName){
    this.listsService.deleteList(listName)
  }

  showCreateNewItem(listName){
    this.addMode = false
    this.addModeItem = true
    this.addModeEdit = false
    console.log(listName)
    if(this.inputDataItem.length > 0)
    this.createNewItem(listName)
    this.inputDataItem = ""
  }

  createNewItem(listName){
    this.addModeShow()
    this.listsService.addNewItem(listName, this.inputDataItem)
  }

  cancelCreateNewItem(){
    this.addModeShow()
  }

  addModeShow(){
    this.addMode = true
    this.addModeItem = false
    this.addModeEdit = false
  }

}
