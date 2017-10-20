export class Product {
    constructor( public name:string, 
        public description:string, 
        public price:number, 
        public brand:string, 
        public isPremium:boolean,
        public onSold:boolean,
        public vendor:string, 
        public numberOfProducts:number, 
        public variety:string, 
        public seedPeriod:string,
        public species:string,
        public type:string,
        public harvest:string,
        public carving:boolean,
        public treatment:boolean,
        public fertilize:string,
        public exposition:string, 
        public irrigation:string, 
        public resistance:string, 
        public soil:string, 
        public comments:string,  
        public id?:number){}
}


