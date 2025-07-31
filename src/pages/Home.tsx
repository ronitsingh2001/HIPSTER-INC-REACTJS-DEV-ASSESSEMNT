import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Welcome to the Multi-Theme Switcher App!
      </h1>

      <p className="text-lg md:text-xl mb-6 max-w-2xl">
        This is a sample application built with React, Vite, Tailwind CSS, and
        TypeScript. You can switch themes using the dropdown above to see
        different layouts, fonts, and colors.
      </p>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {loading &&
          Array.from({ length: 9 }).map((_, idx) => (
            <div
              key={idx}
              className="p-4 col-span-1 border h-40 border-[var(--text-color)] hover:shadow rounded animate-pulse bg-black/5"
            ></div>
          ))}
        {!loading &&
          products &&
          products.map(
            (item: {
              id: number;
              title: string;
              price: number;
              description: string;
            }) => (
              <div
                key={item.id}
                className="p-4 border border-[var(--primary-color)] hover:shadow rounded flex flex-col gap-2"
              >
                <h3 className="line-clamp-1 text-[var(--primary-color)]">
                  {item.title}
                </h3>
                <p className="text-sm line-clamp-3">{item.description}</p>
                <div className="flex justify-between items-center mt-auto border-t py-2">
                  <p>${item.price}</p>
                  <button className="bg-[var(--primary-color)] text-[var(--secondary-color)] hover:bg-[var(--primary-color)]/90 cursor-pointer rounded-full p-2 px-4 mt-auto w-max self-end">
                    Add To Cart
                  </button>
                </div>
              </div>
            )
          )}
      </div>
    </>
  );
}
