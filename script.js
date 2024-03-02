let expenses = [];
let totalAmount = 0;

const expenses_name = document.getElementById('expense-input');
const AmountInput = document.getElementById('amount-input');
const DateInput = document.getElementById('date-input');
const AddBtn = document.getElementById('add-btn');
const Tablebody = document.getElementById('expense-tablebody');
const Total = document.getElementById('total-exp');

AddBtn.addEventListener('click', function () {
    const expense = expenses_name.value;
    const amount = Number(AmountInput.value);
    const date = DateInput.value;

    if (expense === '') {
        alert("please enter a expense");
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert("please enter a amount");
        return;
    }
    if (date === '') {
        alert("please enter a date");
        return;
    }

    expenses.push([expense, amount, date]);

    totalAmount += amount;
    Total.textContent = totalAmount;

    const newRow = Tablebody.insertRow();

    const expenseCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.classList.add('delete');
    console.log(newRow);
    // console.log(deletebtn)
    deletebtn.addEventListener('click', function () {
        expenses.splice(expenses.indexOf(expen), 1);

        totalAmount -= amount;
        Total.textContent = totalAmount;

        Tablebody.removeChild(newRow);
        console.log("deleted!!");
    });
    const expen = expenses[expenses.length - 1];
    console.log(expen);
    expenseCell.textContent = expen[0];
    amountCell.textContent = expen[1];
    dateCell.textContent = expen[2];
    deleteCell.appendChild(deletebtn);
});
