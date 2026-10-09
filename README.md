# SupplyChainIQ

SupplyChainIQ is a frontend prototype for warehouse and logistics management. It includes a launch page, login and signup screens, a dashboard, warehouse management, inventory, orders, optimization, and sample AI insights.

**Note:** This is a frontend demo. Login and signup do not use a real backend or database. You can explore the app, but accounts and passwords are not actually verified.

## 1. What You Need

Before starting, install:

* **Node.js:** Version 20.19 or newer, or version 22.12 or newer.
* **Git:** Only needed if you want to download the project using Git.

Download Node.js from https://nodejs.org/.

To check whether Node.js is installed, open PowerShell or a terminal and run:

```powershell
node --version
npm --version
```

If both commands display version numbers, you're ready to continue.

## 2. Download the Project

If you already have the project on your computer, skip this step.

Otherwise, open PowerShell and run:

```powershell
git clone https://github.com/tanyamaheshwari15/AI-Based-Warehouse-and-Logistics-Optimization-System.git
cd AI-Based-Warehouse-and-Logistics-Optimization-System
```

## 3. Install the Dependencies

Go to the frontend folder:

```powershell
cd frontend
```

Install the required packages:

```powershell
npm install
```

Wait for the installation to finish.

**You only need this one installation command.** npm automatically installs the packages listed in `package.json`.

## 4. Run the Application

Make sure your terminal is inside the `frontend` folder.

Run:

```powershell
npm run dev
```

You should see a local URL in the terminal, usually:

`http://localhost:5173`

Open that URL in your browser to use SupplyChainIQ.

**Keep the terminal open** while using the application. To stop the application, press `Ctrl + C` in that terminal.

## 5. Explore the Application

1. Open the launch page.
2. Select **Log in** or **Create account**.
3. Submit the form to enter the dashboard.
4. Use the sidebar to explore warehouses, inventory, orders, optimization, and AI insights.
5. Select **Sign out** to return to the login page.

Signup requires a name, email, and password of at least 8 characters. Since this is a frontend demo, the app does not verify credentials against a real account.

## 6. Check the Project (Optional)

To check the code for linting errors, run:

```powershell
npm run lint
```

To create a production build, run:

```powershell
npm run build
```

Both commands must be run from the `frontend` folder.

## Troubleshooting

**Problem: `node` or `npm` is not recognized**

Install Node.js and reopen your terminal.

**Problem: `npm run dev` fails because packages are missing**

Run this command from the `frontend` folder:

```powershell
npm install
```

**Problem: Port 5173 is already in use**

Vite may display a different local URL. Open the URL shown in your terminal.

**Problem: Bootstrap styles or icons are missing**

Check your internet connection because Bootstrap and Bootstrap Icons are loaded from a CDN.

## Project Structure

```text
SupplyChainIQ/
├── backend/
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

The frontend contains the pages and components you see in the browser. The backend folder is reserved for server-side functionality; the demo described in this README does not require it to run.