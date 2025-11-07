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
  number: {
    any: (value: unknown): value is number => {
      return typeof value === 'number';
    },
    safe: (value: unknown): value is number => {
      return guard.number.any(value) && !isNaN(value) && isFinite(value);
    },
  },
};
