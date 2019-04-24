import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotess = [
    new Quotes(1,"Make the most of yourself by fanning the tiny,inner sparks of possibility into flames of achievement.","Author:Golda Meir","Trey Trey",0,0,new Date(2019,4,24)),
    new Quotes(2,"Great spirits have always encountered violent opposition from mediocre minds.","Author:Albert Einstein","Globis Mandela",0,0,new Date(2019,4,25)),
    new Quotes(3,"Hope springs eternal in the human breast.","Author:Alexander Pope","Kenneth Yegon",0,0,new Date(2019,4,26)),
    new Quotes(4,"The times when everything seemed broken,I came out better.","Author:Shina Leboo","Aggie Mark",0,0,new Date(2019,4,27)),
    new Quotes(5,"Unless the lions have their own historians,the hunter will always be glorified.","Author:Cleophas Tirop","Tirop family",0,0,new Date(2019,4,28)),
    new Quotes(6,"Since the hunters have learnt to shoot without missing,birds should learn to fly without perching.","Author:Chinua Achebe","Brian Kibet",0,0,new Date(2019,4,29)),
    new Quotes(7,"We are our own devils and make this world our hell.","Author:Oscar Wilde.","Tony Stark",0,0,new Date(2019,4,29)),
    new Quotes(8,"Have a heart that never hardens,a temper that never tires,a touch that never hurts.","Author:Charles Dickens","kipkelesek",0,0,new Date(2019,4,30)),
    new Quotes(9,"Tact is the knack of making a point without making an enemy.","Author:Isaac Newton","Kipsamaek",0,0,new Date(2019,5,1)),
    new Quotes(10,"While I breathe,I hope.","Author:Theocritus and Cicero","Ian Brian",0,0,new Date(2019,5,2)),
  ]
  toogleDetails(index){
    this.quotess[index].showAuthor = !this.quotess[index].showAuthor;
    this.quotess[index].showSubmit= !this.quotess[index].showSubmit;
  }
  upvote(index){
    this.quotess[index].upvotes++;
  }
  downvote(index){
    this.quotess[index].downvotes++;
  }
  deleteQuotes(isComplete,index){
    if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotess[index].name}?`)

      if(toDelete){
        this.quotess.splice(index,1)
      }
    }
  }

  addNewQuotes(quotes){
    this.quotess.push(quotes)

  }

  constructor() { }

  ngOnInit() {
  }
}
