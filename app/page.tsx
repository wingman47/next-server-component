import { Product } from "@/typings";
import { addProductToDatabase } from "./actions/serverActions";

export default async function Home() {
  // by default fetch caches the data (SSR)
  // tags allows to revalidate i.e refresh the data inside the provided tags
  // inside the fetch request we can pass other options as well (check READ.md)
  const res = await fetch(
    "https://654651d8fe036a2fa9558300.mockapi.io/products",
    {
      cache: "no-cache",
      next: {
        tags: ["products"],
      },
    }
  );

  const products: Product[] = await res.json();

  return (
    <main>
      <h1 className="text-3xl font-bold text-center">Products Warehouse</h1>
      <form
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
        action={addProductToDatabase}
      >
        <input
          type="text"
          name="product"
          className="border p-2 border—gray—300 rounded"
          placeholder="Enter Product Name"
        />
        <input
          type="text"
          name="price"
          className="border p-2 border—gray—300 rounded"
          placeholder="Enter Price"
        />
        <button className="border bg-blue-500 text-white p-2 rounded-md">
          Add Product
        </button>
      </form>
      <h2 className="font-bold p-5">List of Products</h2>
      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div className="p-5 shadow">
            <p>{product.product}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
