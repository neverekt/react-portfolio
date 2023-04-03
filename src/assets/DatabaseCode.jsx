import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function DataBaseCode() {
    return (
    <SyntaxHighlighter language="sql" style={vscDarkPlus}>
        {
`CREATE TABLE accounts (
  id INT PRIMARY KEY, 
  user_id INT NOT NULL, 
  account_number CHAR(16) UNIQUE NOT NULL, 
  balance DECIMAL(10, 2) NOT NULL DEFAULT 0.0, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  updated_at TIMESTAMP, 
  FOREIGN KEY (user_id) REFERENCES users(id));

CREATE TRIGGER update_accounts_updated_at 
BEFORE UPDATE ON accounts 
FOR EACH ROW SET NEW.updated_at = CURRENT_TIMESTAMP;

CREATE TABLE transactions (
  id INT PRIMARY KEY, 
  account_id INT NOT NULL, 
  amount DECIMAL(10, 2) NOT NULL, 
  type ENUM('deposit', 'withdrawal') NOT NULL, 
  description VARCHAR(255) NOT NULL, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  updated_at TIMESTAMP, 
  FOREIGN KEY (account_id) REFERENCES accounts(id));

CREATE TRIGGER update_transactions_updated_at 
BEFORE UPDATE ON transactions 
FOR EACH ROW SET NEW.updated_at = CURRENT_TIMESTAMP;

SELECT CONCAT(
  users.username, ' (', users.email, ')') 
  AS user, 
  accounts.account_number, 
  transactions.type, 
  transactions.amount, 
  transactions.description,
  transactions.created_at 
  FROM users JOIN accounts 
  ON users.id = accounts.user_id 
  JOIN transactions ON accounts.id = transactions.account_id 
  WHERE transactions.amount > 10000 
  AND transactions.type = 'withdrawal' 
  AND transactions.created_at BETWEEN '2022-01-01' AND '2022-03-31'
  ORDER BY transactions.created_at DESC;
`
    }
</SyntaxHighlighter>
    );
}
