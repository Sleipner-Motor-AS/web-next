'use client';

import { useState } from 'react';
import { getOdinProductAction, GetOdinProductActionReturn } from '../server/actions/get-product-by-sku';

export function AddProductForm() {
  const [sku, setSku] = useState('');

  const [odinProduct, setOdinProduct] = useState<GetOdinProductActionReturn | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSku(e.target.value);
  };

  const handleFind = async () => {
    const res = await getOdinProductAction({ sku });
    setOdinProduct(res);
  };

  const handleAdd = async () => {
    console.log('add');
  };

  return (
    <form>
      <div>
        <input type="text" value={sku} onChange={handleChange} />
        <button type="button" onClick={handleFind}>
          Find
        </button>
        <button disabled={!odinProduct} type="button" onClick={handleAdd}>
          Add
        </button>
        {odinProduct && <pre>{JSON.stringify(odinProduct, null, 2)}</pre>}
      </div>
    </form>
  );
}
