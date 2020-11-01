export class Quote {

    numberOfUpvote: number;
    numberOfDownvote: number;

    constructor(public id:number, public fullname:string, public quote:string,public author:string, public createdDate: Date){
        this.numberOfUpvote = 0;
        this.numberOfDownvote = 0;
    }
}
