# SupplyTrack - Local Food Supply-Chain Tracker

SupplyTrack is a modern B2B inventory management solution designed specifically for the food industry. It helps restaurant owners and suppliers efficiently monitor stock levels, manage procurement, and reduce wastage using a data-driven approach.

---

##  Core Features

###  Real-time Inventory Dashboard

A centralized dashboard providing a complete overview of stock items and operational status.

###  Low Stock Intelligence

Automatic visual alerts (red indicators) when item quantity drops below 10 units.

### 🔄 Full CRUD Operations

Manage inventory seamlessly:

*  Create new items
*  Read/view inventory
*  Update stock details
*  Delete items

###  Architectural UI

* Built using Tailwind CSS v4
* Clean, minimal, and highly readable design
* Optimized for performance

### 💾 Data Persistence

* Uses LocalStorage API
* Instant data recovery on refresh

---

## 🛠 Tech Stack

| Layer    | Technology                       |
| -------- | -------------------------------- |
| Frontend | HTML5, Vanilla JavaScript (ES6+) |
| Styling  | Tailwind CSS v4                  |
| Pattern  | Modular JavaScript Architecture  |

---

##  Project Architecture

The project follows a modular structure with clear separation of concerns:

/food-supply-tracker

├── src/assets
├── src/css
|── src/js  
│   ├── storage.js  → Handles LocalStorage logic
│   └── app.js      → UI rendering & event handling
├── index.html      → Main dashboard layout
└── README.md       → Documentation

---

## 🗺 Future Roadmap

### ⚛️ Frontend Upgrade (React.js)

* Migration to React 19
* Component-based architecture:

  * InventoryTable
  * StockModal
  * AnalyticCards
* React Query integration for efficient data handling

---

### ⚙️ Backend Development (Golang)

* RESTful API using Go

* JWT Authentication:

  * Role-based access (Owner vs Staff)

---

### 🗄 Database Integration (PostgreSQL)

* Structured relational data
* Stock history tracking
* Smart analytics:

  * Predict restocking time
  * Usage trends

---

## 💡 Why This Project Matters

SupplyTrack is not just a demo project — it targets real-world problems in Bangladesh’s SME food sector.

It demonstrates:

* Real-world business logic
* Clean UI/UX thinking
* Scalable architecture planning
* Transition path from frontend → full-stack SaaS

---

## 🛠 How to Run

```bash
git clone https://github.com/khairozzaman91/Supply-Chain-Tracker
```

Then open:

```bash
index.html
```

in any modern browser.

## 🤝 Contribution

Feel free to fork this project and improve it.

---

## 👨‍💻 Author

Developed by Md.Khairozzaman
Email: [khairozzaman91@gmail.com](mailto:khairozzaman91@gmail.com)


---

⭐ If you like this project, give it a star on GitHub!
