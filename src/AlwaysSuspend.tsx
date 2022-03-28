import { VFC } from "react";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const AlwaysSuspend: VFC = () => {
  throw sleep(1000);
};
