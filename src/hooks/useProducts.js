import { useEffect, useState } from 'react';

// the naviest cache
let cache = [];

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (cache.length === 0) {
            // fetch returns a promise

            fetch(`${baseUrl}/products`)
            .then((response) => {
                // response.json() returns a promise
                return response.json();
            })
            .then((products) => {
                cache = products;
                setProducts(products);
                setLoading(false);
            })
        .catch((error) => {
          console.dir(error);
          setLoading(false);
          setError('404');
        });
    } else {
      setProducts(cache);

      setTimeout(() => {
        setLoading(false);
      }, Math.floor(Math.random() * 2000));
    }
  }, []);

  return { products, loading, error };
};