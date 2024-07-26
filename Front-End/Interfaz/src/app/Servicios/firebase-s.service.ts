import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore,doc, docData, getDoc, setDoc, updateDoc, deleteDoc,
  DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseSService {
 firestore: Firestore = inject(Firestore);
  constructor() { }

  getCollectionChanges<tipo>(path:string){
    const itemCollection = collection(this.firestore, path);
    return collectionData(itemCollection) as Observable<tipo[]>;
  }

// Funcion para guardar un nuevo registro dentro de la base de datos
// Este es un reguistro general sirve para cualquier tipo de coleccion

createDocumentID(data: any, enlace: string, idDoc: string) {
  const document = doc(this.firestore, `${enlace}/${idDoc}`);
  return setDoc(document, data);
}
}
