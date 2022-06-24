class Story{
    constructor(title,creator){
        this.title=title,
        this.creator=creator,
        this._comments = [];
        this._likes=[];

    }
    get likes(){
        if(this._likes.length === 0){
        return `${title} has 0 likes`
        }else if(this._likes.length === 1){
            return `${this.creator} likes this story!`
        }
        return `${this._likes[0]} and ${this._likes.slice(1).length} others like this story!`
    }
    like (username){
        
    }
}
let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);