import users from '../data/users';

const ListaUser = () => {
  return (
    <div className="users-page">
      <div className="page-container">
        <h2 className="page-title">Felhasználók</h2>
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>NÉV</th>
                <th>ÉLETKOR</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.age} év</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListaUser;