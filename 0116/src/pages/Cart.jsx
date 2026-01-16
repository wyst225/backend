export default function Cart({ cart }) {
  return (
    <div className="page">
      <h1>Kosár</h1>

      {cart.length === 0 && (
        <p className="info">A kosár üres</p>
      )}

      <ul>
        {cart.map((item, i) => (
          <li key={i} className="cart-item">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
