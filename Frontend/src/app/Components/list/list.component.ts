import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/Model/tutorial';
import { TutorialService } from 'src/app/Services/tutorial.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tutorials?:Tutorial[];
  currentTutorial?:Tutorial;
  currentIndex=-1;
  title='';

  constructor(private service:TutorialService) { }

  ngOnInit(): void {
    this.getAll();
  }
  //getAll Tutorials
  getAll():void{
    this.service.getAll().subscribe(
      data=>{
        this.tutorials=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      });
  }
  //remove all
  removeAllTutorials():void{
    this.service.deleteAll().subscribe(
      response=>{
        console.log(response);
        this.refreshList();
      },
      error=>{
        console.log(error);
      });
  }
  //refresh the list
  refreshList():void{
    this.getAll();
    this.currentTutorial=undefined;
    this.currentIndex=-1;
  }
  //get active tutorial
  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }
  //search by title
  searchTitle():void{
    this.currentIndex=-1;
    this.currentTutorial=undefined;
    this.service.findByTitle(this.title).subscribe(
      data=>{
        this.tutorials=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      });
  }
}
