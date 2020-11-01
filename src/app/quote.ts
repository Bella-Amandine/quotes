export class Quote {

    numberOfUpvote: number;
    numberOfDownvote: number;

    constructor(public id:number, public fullname:string, public quoteTitle:string, public author:string, public createdDate: Date){
        this.numberOfUpvote = 0;
        this.numberOfDownvote = 0;
    }
}
