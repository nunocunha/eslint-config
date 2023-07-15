console.log(`Cypress`);

export const BASE_URL = `base://url`;

export type Generic<T, K extends keyof T> = { [P in K]: T[P]; } & Partial<T>;

export class Class {}

export enum Unit {
  QUANTITY,
  PART_PER_UNIT
}
