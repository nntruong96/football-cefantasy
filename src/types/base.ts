export interface Base {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export type CreateBaseInput<T extends Base> = Omit<
  T,
  "id" | "createdAt" | "updatedAt"
>;

export type UpdateBaseInput<T extends Base> = Partial<CreateBaseInput<T>>;
