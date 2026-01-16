const PRODUCTS = [
  { id: 1, name: 'Alma' },
  { id: 2, name: 'Körte' },
]

export default function Products({ cart, setCart, user }) {
  return (
    <div className="page">
      <h1>Products</h1>

      {!user && (
        <p className="info">
          Belépés szükséges a vásárláshoz
        </p>
      )}

      {PRODUCTS.map(p => (
        <div key={p.id} className="product">
          <span>{p.name}</span>

          {user && (
            <button onClick={() => setCart([...cart, p])}>
              Kosárba
            </button>
          )}
        </div>
      ))}
    </div>
  )
}