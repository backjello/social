import { Commento } from "./commento";

export interface Post {
    id:number,
    body:string,
    title:string,
    tags:string[],
    reactions:number, // sono i like
    userId:number,
    comments?: Commento[] // non necessariamente un post ha dei commenti, quindi è opzionale
}
