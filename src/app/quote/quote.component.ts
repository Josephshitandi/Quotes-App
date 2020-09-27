import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Better your best','Peter', 'Joseph',new Date(2019,6,9)),
    new Quote(2, 'If people are doubting how far you can go, go so far that you can’t hear them anymore.', ' Michele Ruiz','Joseph',new Date(2019,6,9)), 
    new Quote(3, 'We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.','Arianna Huffington','Joseph',new Date(2019,6,9)),
    new Quote(4, 'Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.','Joss Whedon','Joseph',new Date(2019,6,9)),
    new Quote(5, 'I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.','Leah Busque','Joseph',new Date(2019,6,9)),
  ];
  upVote(index) {

    this.quotes[index].upvote++;
  }

  downVote(index) {

    this.quotes[index].downvote++;
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.date = new Date(quote.date)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
