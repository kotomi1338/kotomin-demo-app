import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import { FIREBASE_CONFIG } from './config.tsx';

export default class Env {
  private static singleInstance: Env;

  public readonly firebase: firebase.app.App;
  public readonly firestore: firebase.firestore.Firestore;
  public readonly providerGoogle = new firebase.auth.GoogleAuthProvider();

  private constructor() {
    this.firebase = firebase.initializeApp(FIREBASE_CONFIG);
    this.firestore = this.firebase.firestore();
  }

  public static get instance(): Env {
    if (!this.singleInstance) {
      this.singleInstance = new Env();
    }
    return this.singleInstance;
  }
}