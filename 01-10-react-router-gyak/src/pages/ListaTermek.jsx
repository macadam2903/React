import termekek from '../data/termekek';

const ListaTermek = () => {
  return (
    <div className="products-page">
      <div className="page-container">
        <h2 className="page-title">Termékek</h2>
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>TERMÉK NEVE</th>
                <th>DARABSZÁM</th>
                <th>ÁR</th>
              </tr>
            </thead>
            <tbody>
              {termekek.map((product) => (
                <tr key={product.id}>
                  <td className="product-name">{product.name}</td>
                  <td>{product.quantity} db</td>
                  <td>{product.price.toLocaleString('hu-HU')} Ft</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListaTermek;