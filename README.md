# 💳 Payoo – Digital Payment Web App

Payoo is a responsive fintech-style web application that simulates core Mobile Financial Service (MFS) operations such as Add Money, Cashout, Send Money, Bill Payment, and Transaction History.

Built using **HTML, Tailwind CSS, DaisyUI, and Vanilla JavaScript**.

---

## 🌐 Live Demo

🚀 **Live Site:** _Coming Soon_  

For Log In : Use Mobile Number-01234567890 and PIN:1234
---

## 🚀 Features

- ✅ Add Money from Bank  
- ✅ Cashout to Agent  
- ✅ Send Money  
- ✅ Pay Bill (Electricity, Water, Internet, Gas)  
- ✅ Get Bonus via Coupon  
- ✅ Real-time Balance Update  
- ✅ Transaction History  
- ✅ Input Validation  
- ✅ PIN Verification  
- ✅ Animated Home Buttons (Tailwind CSS)  

---

## 🛠️ Tech Stack

- **HTML5**
- **Tailwind CSS (CDN)**
- **DaisyUI**
- **Vanilla JavaScript**
- **Font Awesome**
- **Google Fonts (Outfit)**

---

## 📂 Project Structure

```bash
Payoo/
│
├── index.html          # Login Page
├── home.html           # Main Dashboard
├── style.css           # Custom styles (optional)
│
├── assets/             # Images & icons
│
├── scripts/
│   ├── machine.js
│   ├── addMoney.js
│   ├── cashOut.js
│   ├── sendMoney.js
│   ├── getBonus.js
│   └── payBill.js
│
└── README.md
```

---

## 🔐 Validation Rules

- 11-digit number validation  
- Amount must be numeric  
- Amount must be greater than 0  
- Cashout amount must be less than or equal to current balance  
- PIN must be exactly 4 digits  
- Default PIN (for demo): `1234`

---

## 📊 Transaction System

Each successful transaction:

- Updates the available balance  
- Adds a new row in the transaction table  
- Automatically shows the transaction section  

### Transaction Table Fields

- Type  
- Number  
- Amount  
- Status  

---

## 🎨 UI & Animation

- Tailwind utility-based animations  
- Scale hover effect  
- Button press animation  
- Staggered entrance animation  
- DaisyUI `synthwave` theme  

---

## 🧠 Concepts Used

- DOM Manipulation  
- Event Listeners  
- Form Validation  
- Conditional Logic  
- Modular JavaScript Structure  
- Dynamic UI Rendering  

---

## ⚠️ Disclaimer

This is a frontend simulation project only.  
No real payment gateway or backend integration is implemented.

---

## 🚀 Future Improvements

- LocalStorage-based transaction persistence  
- Backend integration (Node.js / Firebase)  
- User authentication system  
- Service charge calculation  
- Unique transaction ID generation  

- Responsive improvements for larger screens  

---

## 👨‍💻 Author

**Shafiqul Islam Nayem**  


---

⭐ If you like this project, consider giving it a star on GitHub!
