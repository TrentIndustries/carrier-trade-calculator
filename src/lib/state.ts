import { signal, Signal, effect } from "@preact/signals";

export enum OperationType {
  Load = 0,
  Unload,
}

const getNumberFromUrl = (key: string, defaultValue = 0): number => {
  const params = new URLSearchParams(window.location.search);
  const urlVal: number = parseInt(params.get(key), 10);

  return isNaN(urlVal) ? defaultValue : urlVal;
};

const getOperationTypeFromUrl = (): OperationType => {
  const params = new URLSearchParams(window.location.search);
  const urlVal = parseInt(params.get("opType"), 10);

  return urlVal === 1 ? OperationType.Unload : OperationType.Load;
};

export const cargoCapacity: Signal<number> = signal(100);
export const totalAvailableCargo: Signal<number> = signal(
  getNumberFromUrl("totalAvailableCargo", 10000),
);
export const buyPrice: Signal<number> = signal(getNumberFromUrl("buyPrice"));
export const sellPrice: Signal<number> = signal(getNumberFromUrl("sellPrice"));
export const operationType: Signal<OperationType> = signal(getOperationTypeFromUrl());

effect(() => {
  const params = new URLSearchParams(window.location.search);
  params.set("buyPrice", buyPrice.value.toString());

  const url = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState("", "", url);
});

effect(() => {
  const params = new URLSearchParams(window.location.search);
  params.set("sellPrice", sellPrice.value.toString());

  const url = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState("", "", url);
});

effect(() => {
  const params = new URLSearchParams(window.location.search);
  params.set("totalAvailableCargo", totalAvailableCargo.value.toString());

  const url = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState("", "", url);
});

effect(() => {
  const params = new URLSearchParams(window.location.search);
  params.set("opType", operationType.value.toString());

  const url = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState("", "", url);
});
