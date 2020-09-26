export class Quote {
    id: number;
    text: string;
    author: string;
    date: Date;
    upvote: number;
    downvote: number;

    constructor(id: number,text:string, author:string, ){
        this.id = id;
        this.text = text;
        this.author = author;
        this.date = new Date();
        this.upvote = 0;
        this.downvote = 0;
    }

}
