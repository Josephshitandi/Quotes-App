export class Quote {
    id: number;
    text: string;
    author: string;
    date: Date;
    upvote: number;
    downvote: number;

    constructor(id: number,text:string, author:string,date: Date ){
        this.id = id;
        this.text = text;
        this.author = author;
        this.date = date;
        this.upvote = 0;
        this.downvote = 0;
    }

}
