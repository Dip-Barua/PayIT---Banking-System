
<h1>PayIT- Banking System</h1>

This project simulates a basic banking interface where users can deposit or withdraw from their account balance. The transactions are handled securely through a PIN verification system, and the interface is built using JavaScript for dynamic functionality.

 Features

 1. **Cash Out**
   - Users can withdraw money from their account by entering the amount and their PIN.
   - The withdrawal will only be processed if the correct PIN is provided.
   - The account balance is updated dynamically upon a successful transaction.
   - **PIN Verification**: The current default PIN is set to `1234`.
   - If an incorrect PIN is entered, an alert will notify the user that the cash-out attempt has failed.

 2. **Add Money**
   - Users can deposit money into their account by entering the amount and their PIN.
   - The deposit will only be processed if the correct PIN is provided.
   - The account balance is updated immediately upon a successful deposit.
   - If an incorrect PIN is entered, an alert notifies the user about the invalid attempt.

 3. **Switch Between Forms**
   - The interface allows switching between the cash-out and add-money forms via respective buttons.
   - Clicking "Cash Out" shows the cash-out form and hides the add-money form.
   - Clicking "Add Money" shows the add-money form and hides the cash-out form.

 How to Use

1. **Cash Out:**
   - Click the "Show Cash Out" button to display the cash-out form.
   - Enter the amount you want to withdraw and the correct PIN (`1234`).
   - If successful, the balance will be updated.
   
2. **Add Money:**
   - Click the "Show Add Money" button to display the deposit form.
   - Enter the amount to deposit and the correct PIN (`1234`).
   - The account balance will be updated upon success.

3. **Switch Forms:**
   - Use the "Show Cash Out" and "Show Add Money" buttons to toggle between cash-out and add-money forms.

 Requirements

- A web browser to run the HTML and JavaScript.
- No external dependencies.

 Customization

- You can change the default PIN by modifying the `pinNumber` variable in the cash-out and add-money functions.
- You can enhance the project by adding more security features, validation, or even connecting it to a backend API for real-time data storage.

---

This README outlines the main functionality and how to interact with the banking interface on your site. Let me know if you need to include any additional details!