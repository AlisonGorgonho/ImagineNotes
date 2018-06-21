import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartaoInterface } from '../models/cartao';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {

  cartaoCollection: AngularFirestoreCollection<CartaoInterface>;
  cartaoDoc: AngularFirestoreDocument<CartaoInterface>;
  cartoes: Observable<CartaoInterface[]>;
  cartao: Observable<CartaoInterface>;

  constructor(private afs: AngularFirestore) {
    this.cartaoCollection = afs.collection('cartoes', ref => ref);
  }

  adicionarCartao(cartao: CartaoInterface) {
    this.cartaoCollection.add(cartao);
  }

  listarCartoes(): Observable<CartaoInterface[]> {
    this.cartoes = this.cartaoCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as CartaoInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );
    return this.cartoes;
  }

  pegarCartao(idCartao: string) { 
    this.cartaoDoc = this.afs.doc<CartaoInterface>(`cartoes/${idCartao}`);
    this.cartao = this.cartaoDoc.snapshotChanges().pipe(
      map( action => {
        if(action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as CartaoInterface;
          data.id = action.payload.id;
          return data; 
        }
      })
    );
    return this.cartao;
  }

  alterarCartao(cartao: CartaoInterface) { 
    this.cartaoDoc = this.afs.doc<CartaoInterface>(`cartoes/${cartao.id}`);
    this.cartaoDoc.update(cartao);
  }
  
  deletarCartao(cartao: CartaoInterface) {
    this.cartaoDoc = this.afs.doc<CartaoInterface>(`cartoes/${cartao.id}`);
    this.cartaoDoc.delete();
  }
  
}
