import { Component, OnInit } from '@angular/core';
import { Quote } from  '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  // quotes: Quote[] =[
  //   new Quote(1,'Better your best','Sophie'),
  //   new Quote(2,'Better your best','Sophie'),
  //   new Quote(3,'Better your best','Sophie'),
  //   new Quote(4,'Better your best','Sophie'),
  // ];
  // upVote(index){
  //   this.quotes[index].upvote++;
  // }

  // downVote(index){
  //   this.quotes[index].downvote++;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
