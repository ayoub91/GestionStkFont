import { Produit } from "../shared/produit";
import { Injectable } from "@angular/core";

@Injectable()
export class ProduitMockService{

    private PRODUITS : Produit [] = [];

    constructor(){
        let p1: Produit = new Produit('Livre',50,20);
        let p2: Produit = new Produit('Cahier',200,5.25);
        let p3: Produit = new Produit('Stylo',500,2.10);

        this.PRODUITS.push(p1);
        this.PRODUITS.push(p2);
        this.PRODUITS.push(p3);


    }

    public getProduit():Produit[]{
        return this.PRODUITS;
    }
}