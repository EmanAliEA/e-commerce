# E-Commerce React App

This is a modern, responsive e-commerce web application built with **React**, **TypeScript**, **Vite**, **MobX**, and **Styled Components**. It features a product catalog, shopping cart, checkout flow, and more.

## Features

- Product listing with categories
- Product details page
- Shopping cart with add/remove/update functionality
- Checkout page
- Responsive design
- State management with MobX
- Routing with React Router
- Styled with Styled Components
- Unit and component tests with Vitest and Testing Library

## Project Structure

```
src/
  assets/                # Images and static assets
  components/            # Reusable UI components (NavBar, ProductItem, CartList, etc.)
  pages/                 # Main pages (Home, Product, Cart, CheckOut, About, Contact)
  services/              # API services (productsAPI.ts)
  stores/                # MobX stores for state management
  ui/                    # UI helpers and styles
  App.tsx                # Main app component
  main.tsx               # Entry point
public/                  # Static public files
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/EmanAliEA/e-commerce.git
   cd e-commerce
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```

### Running the App

- **Development server:**

  ```sh
  npm run dev
  ```

  The app will be available at [http://localhost:5173](http://localhost:5173) by default.

- **Build for production:**

  ```sh
  npm run build
  ```

- **Preview production build:**

  ```sh
  npm run preview
  ```

- **Run tests:**

  ```sh
  npm test
  ```

- **Lint the code:**
  ```sh
  npm run lint
  ```

## Main Scripts

| Script          | Description              |
| --------------- | ------------------------ |
| npm run dev     | Start development server |
| npm run build   | Build for production     |
| npm run preview | Preview production build |
| npm test        | Run tests                |
| npm run lint    | Lint the codebase        |

## Technologies Used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [MobX](https://mobx.js.org/)
- [Styled Components](https://styled-components.com/)
- [React Router](https://reactrouter.com/)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)

## Folder Highlights

- **src/components/**: UI components like NavBar, ProductsList, CartItem, etc.
- **src/pages/**: Main pages (Home, Product, Cart, CheckOut, About, Contact)
- **src/stores/**: MobX stores for products and cart state
- **src/services/**: API logic for fetching products
- **src/ui/**: Shared UI elements and styles

## Author

Eman Ali ([GitHub](https://github.com/EmanAliEA))

---

Feel free to contribute or open issues for suggestions and improvements!
