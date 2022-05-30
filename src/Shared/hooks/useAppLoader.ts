import { useState, useEffect } from 'react';

export default function useAppLoader(...dependencies: Promise<unknown>[]) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Promise.all(dependencies)
      .then(() => { return setLoaded(true); })
      // eslint-disable-next-line no-console
      .catch((err) => { return console.error('Failed to load dependency', err); });
  }, [dependencies]);

  return loaded;
}
