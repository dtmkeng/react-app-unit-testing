import { useState } from "react";

const productList = [
  {
    name: "Product-1",
    units: [
      {
        name: "A",
        remaining: 4,
        price: 15,
      },
      {
        name: "C",
        remaining: 2,
        price: 4,
      },
    ],
  },

  {
    name: "Product-2",
    units: [
      {
        name: "A",
        remaining: 2,
        price: 2,
      },
      {
        name: "B",
        remaining: 4,
        price: 3,
      },
    ],
  },
];
type Pros = {
  [k: string]: number;
};
const Product = () => {
  const [productAmount, setProductAmount] = useState<Pros>({});
  const handleChange = (e: any, price: number) => {
    setProductAmount({
      ...productAmount,
      [e.target.name]: Number(e.target.value) * price,
    });
  };

  const showAmount = (product: any): string => {
    const keys = Object.keys(productAmount);
    const inProductKey = keys.filter((e) => e.includes(product.name));
    let amount = 0;
    for (const key of inProductKey) {
      amount += Number(productAmount?.[key] || 0);
    }
    return amount.toFixed(2);
  };

  const showTotalAmount = (): string => {
    let totalamount = 0;
    Object.keys(productAmount).forEach((e) => {
      totalamount += Number(productAmount?.[e] || 0);
    });
    return totalamount.toFixed(2);
  };

  return (
    <div>
      Product
      <hr />
      <div>
        {productList.map((product, index) => (
          <div key={index}>
            <div>{product.name}</div>
            <div>
              {product.units.map((unit, unitIndex) => (
                <div key={unitIndex}>
                  <span>{unit.name}</span>
                  <span>{"--> "}price</span>
                  <span>{unit.price.toFixed(2)}</span>
                  <input
                    name={product.name + "-" + unit.name}
                    type="number"
                    onChange={(e) => handleChange(e, unit.price)}
                  />
                </div>
              ))}
            </div>
            <div>amount {showAmount(product)}</div>
          </div>
        ))}
        <div>total amount {showTotalAmount()}</div>
      </div>
    </div>
  );
};
export default Product;
