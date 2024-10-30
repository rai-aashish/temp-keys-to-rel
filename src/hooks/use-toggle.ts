import { useCallback, useState } from 'react';

/**
 * info: useToggle hook for managing state
 * @param defaultValue - default value for the state
 * @returns [value, { toggle, set }]
 **/
function useToggle(defaultValue?: boolean) {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = useCallback(() => {
    setValue((x) => !x);
  }, []);

  const methods = {
    toggle,
    set: setValue,
  };

  return [value, methods] as const;
}

export { useToggle };
