import { useEffect, useState } from "react";
import { Subject, takeUntil } from "rxjs";
import { authInitialState, authSubscription$ } from "./store";

export const useAuthStore = () => {
  const [data, setData] = useState(authInitialState);

  useEffect(() => {
    const _unsubscribeall = new Subject();
    const observable$ = authSubscription$();
    observable$.pipe(takeUntil(_unsubscribeall)).subscribe((data) => {
      setData(data);
    });

    return () => {
      _unsubscribeall.next(1);
      _unsubscribeall.complete();
    };
  });

  return data;
};
