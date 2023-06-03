document.addEventListener('DOMContentLoaded', function() {

    const transactionForm = document.getElementById('transactionForm');
    const transactionList = document.getElementById('transactionList');
    
    let transactions = [];
    

    function addTransaction(event) {
      event.preventDefault();
      

      const type = document.getElementById('type').value;
      const amount = document.getElementById('amount').value;
      const description = document.getElementById('description').value;
      

      const transaction = {
        type: type,
        amount: parseFloat(amount),
        description: description
      };

      transactions.push(transaction);
      

      transactionForm.reset();

      updateTransactionList();
    }
    

    function updateTransactionList() {

      transactionList.innerHTML = '';
      

      transactions.forEach(function(transaction) {
        const listItem = document.createElement('li');
        listItem.textContent = `Type: ${transaction.type}, Amount: ${transaction.amount}, Description: ${transaction.description}`;
        transactionList.appendChild(listItem);
      });
    }
    
    transactionForm.addEventListener('submit', addTransaction);
  });
  