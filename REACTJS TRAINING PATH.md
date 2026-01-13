# INTENSIVE REACTJS TRAINING ROADMAP

**(For Developers transitioning from ASP.NET MVC)**

---

## OVERVIEW

The course is designed to shift programming mindset from Server-side Rendering (MVC) to Client-side Rendering (ReactJS). Students will go from the most basic concepts to building a complete E-commerce application with the most modern technologies available today (Vite, TailwindCSS, ShadcnUI, Formik, Context API).

---

## PHASE 1: RENDER MINDSET & COMPONENTS (Sessions 1 - 4)

_Goal: Understand the difference between Razor View and JSX, get familiar with Component mindset and modern Styling._

### Session 1: From Razor View to JSX & TailwindCSS Mindset

-   **Goal:** Understand Client-side Rendering mechanism and get familiar with Utility-first CSS.
-   **Main Content:**
    1.  Compare MVC vs React models.
    2.  Initialize project with Vite (replacing Visual Studio template).
    3.  JSX syntax and how to write HTML in JavaScript.
    4.  Get familiar with TailwindCSS (eliminate the mindset of writing separate CSS files).
-   **Practice:** Build a static Profile Card using TailwindCSS.

### Session 2: Components & UI Decomposition Mindset

-   **Goal:** Know how to decompose the interface into small reusable components (similar to Partial View).
-   **Main Content:**
    1.  What is a Functional Component?
    2.  Standard folder structure for a React project.
    3.  Component Import/Export techniques.
-   **Practice:** Build a basic UI Kit (Button, Input) and assemble a Dashboard Layout.

### Session 3: Props & Data Passing

-   **Goal:** Understand one-way data flow and how to pass data between components.
-   **Main Content:**
    1.  What are Props? (Compare with ViewModel/@model).
    2.  Pass data from parent to child.
    3.  List Rendering techniques.
-   **Practice:** Display a dynamic product list from array data.

### Session 4: Advanced Styling & Responsive Design

-   **Goal:** Build complex interfaces adaptable to all devices.
-   **Main Content:**
    1.  Mobile-first mindset in TailwindCSS.
    2.  Use advanced Flexbox and Grid systems.
-   **Practice:** Build a Responsive Navbar and a multi-interface Pricing Table.

---

## PHASE 2: STATE MINDSET & DATA FLOW (Sessions 5 - 8)

_Goal: Master State management, Form handling, and API interaction._

### Session 5: useState & Event Handling

-   **Goal:** Understand the heart of React - State and how to handle user events.
-   **Main Content:**
    1.  Event handling (`onClick`, `onChange`).
    2.  `useState` Hook: Why do variables usually not update the UI?
-   **Practice:** Build interactive features: Counter, Show/Hide content, Input binding.

### Session 6: CRUD (Create, Read, Update, Delete)

-   **Goal:** Manipulate data (add, edit, delete) directly on State.
-   **Main Content:**
    1.  Immutability mindset when modifying State.
    2.  Array manipulation techniques in React.
-   **Practice:** Build a complete Todo List application with CRUD functionality.

### Session 7: Form & Validation (Formik + Yup)

-   **Goal:** Handle Forms professionally and validate input data.
-   **Main Content:**
    1.  Manage Form state with Formik library.
    2.  Build Schema Validation with Yup.
-   **Practice:** Registration/Login Form with full validation and error notifications.

### Session 8: useEffect, API & TypeScript Basic

-   **Goal:** Connect the application with the outside world (Server API).
-   **Main Content:**
    1.  Component Lifecycle and `useEffect`.
    2.  Call API to fetch data (Fetch/Axios).
    3.  Get familiar with basic TypeScript (Interface/Type).
-   **Practice:** Fetch User list from API, handle Loading/Error states.

---

## PHASE 3: ROUTING & GLOBAL STATE (Sessions 9 - 11)

_Goal: Build multi-page applications (SPA) and manage global data._

### Session 9: Routing & Auth Flow

-   **Goal:** Navigate pages smoothly without reloading and manage access permissions.
-   **Main Content:**
    1.  Configure React Router Dom.
    2.  Dynamic Route (Detail Page).
    3.  Navigate via code (`useNavigate`).
-   **Practice:** Build flow: Login -> Home -> Product Detail.

### Session 10: Context API & Global State

-   **Goal:** Manage shared data for the entire application (User, Theme, Cart).
-   **Main Content:**
    1.  Prop Drilling problem.
    2.  Use Context API to share state.
-   **Practice:** Build AuthContext to manage login state across the page.

### Session 11: Review & UX/UI Best Practices

-   **Goal:** Optimize user experience.
-   **Main Content:**
    1.  Review core knowledge.
    2.  Modern UX Patterns: Skeleton Loading, Toast Notification, Modal Confirm.
-   **Practice:** Refactor (optimize) old exercises, apply ShadcnUI library.

---

## PHASE 4: E-COMMERCE PROJECT PRACTICAL (Sessions 12 - 14)

_Goal: Synthesize knowledge to build a complete sales application (Mini Shopee)._

### Session 12: Initialization & Listing

-   **Content:** Project setup, folder structure, build Layout and Product List page (Filter, Sort).

### Session 13: Shopping Cart (Cart) & LocalStorage

-   **Content:** Build Cart logic (Add, Edit, Delete), save data to LocalStorage to keep state on F5.

### Session 14: Checkout & Admin Dashboard

-   **Content:** Build Checkout page, Product Management page, and course summary.
