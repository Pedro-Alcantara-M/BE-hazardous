
# Booking Classification Backend

This project provides the backend API for handling booking classification and backfilling operations for hazardous material detection.

---


## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Pedro-Alcantara-M/BE-hazardous.git
````

Make sure you are on the main branch:
```bash
git checkout main
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server
Start the backend in development mode:

```bash
npm run dev
```

This will start the server using ts-node and watch for TypeScript file changes.

### 4. Access the API

http://localhost:4000


| Method | Endpoint    | Description                                     |
| ------ | ----------- | ----------------------------------------------- |
| `POST` | `/classify` | Classifies a single booking as hazardous or not |
| `POST` | `/backfill` | Processes multiple bookings and updates records |




