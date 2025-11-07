export const guard = {
  string: {
    any: (value: unknown): value is string => {
      return typeof value === 'string';
    },
    some: (value: unknown): value is string => {
      return guard.string.any(value) && !!value.trim();
    },
    empty: (value: unknown): value is string => {
      return guard.string.any(value) && !value.trim();
    },
  },
};
