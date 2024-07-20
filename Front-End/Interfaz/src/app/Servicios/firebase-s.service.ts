import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
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
}
