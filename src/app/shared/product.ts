export class Product {
    constructor( public name:string, 
        public description:string, 
        public cover:string, 
        public file:File, 
        public price:number, 
        public adding:Date,
        public brand:string, 
        public isPremium:boolean,
        public onSold:boolean,
        public vendor:string, 
        public note:number,
        public numberOfProducts:number, 
        public numberOfVote:number, 
        public numberOfComments:number, 
        public variety:string, 
        public seedPeriod:string,
        public species:string,
        public type:string,
        public harvest:string,
        public carving:boolean,
        public treatment:boolean,
        public fertilize:string,
        public prodexpo:object, 
        public prodirrig:object, 
        public prodresist:object, 
        public prodsoil:object, 
        public comments:string,  
        public id?:number){}
}


