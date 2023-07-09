import { BehaviorSubject } from "rxjs";

export const authInitialState = {
  authtoken: localStorage.getItem("authtoken"),
};

export const authSubscription = new BehaviorSubject(authInitialState);

export const authSubscription$ = () => authSubscription.asObservable();
