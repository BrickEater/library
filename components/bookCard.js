import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  bookCard: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '16px',
    marginBottom: '16px',
    width: '300px',
  },
  table: {
    borderCollapse: 'collapse',
    width: '100%',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  },
};

const BookCard = ({ book }) => {
  return (
    <div className="book-card" style={styles.bookCard}>
      <table style={styles.table}>
        <tbody>
          <tr>
            <td style={styles.td}>Title:</td>
            <td style={styles.td}>{book.title}</td>
          </tr>
          <tr>
            <td style={styles.td}>Author:</td>
            <td style={styles.td}>{book.author}</td>
          </tr>
          <tr>
            <td style={styles.td}>Pages:</td>
            <td style={styles.td}>{book.pages}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // You can render the BookCard component within your App component
  return (
    <div>
      <h1>My Library</h1>
      <BookCard book={{ title: 'Example Book', author: 'John Doe', pages: 300 }} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
