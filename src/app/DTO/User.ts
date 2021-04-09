export class User {
    email: string;
    level: number;
    exp: number;
    constructor(email: string , level : number , exp : number){
        this.email = email;
        this.level = level;
        this.exp = exp;
    }
}