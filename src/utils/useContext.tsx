import {useContext as useReactContext} from 'react';

export function useContext<T>(value: React.Context<T>) {
  const ctx = useReactContext(value);

  if (ctx == null) {
    throw new Error('must be used within a Provider');
  }

  return ctx!;
}
