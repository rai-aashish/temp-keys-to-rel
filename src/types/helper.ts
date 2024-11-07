type RequireSome<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>;

export type { RequireSome };
