import { signal, Signal } from "@preact/signals";

export const cargoCapacity: Signal<number> = signal(100);
export const loadBuyPrice: Signal<number> = signal(0);
export const loadSellPrice: Signal<number> = signal(0);

