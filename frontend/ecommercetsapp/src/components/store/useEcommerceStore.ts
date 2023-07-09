import { useEffect, useState } from "react";
import { ecommercSubscription$, ecommerceStoreInitialState } from "./store";
import { Subject, takeUntil } from "rxjs";

export const useEcommerceStore = () => {
  const [data, setData] = useState(ecommerceStoreInitialState);

  useEffect(() => {
    const _unsubscribeall = new Subject();
    const observable$ = ecommercSubscription$();
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
