# Contributing to Accessible Recipe

Thank you for taking an interest in this project. This guide explains how the application is organised, where to add new features, how to check your changes, and which parts of the code need extra care.

## 1. Project Architecture

This project is built using React, TypeScript, Vite, and Tailwind CSS.

The source code is organised into separate components to keep the application simple and maintainable.

### Project Structure

src/
├── component/
│   ├── Banner.tsx
│   └── Body.tsx
├── App.tsx
├── main.tsx
└── index.css


### Main Files

**App.tsx**

The main application component. It imports and displays the Banner and Body components.

**Banner.tsx**

Displays the recipe introduction, including the recipe name, description, cooking time, and original serving information.

**Body.tsx**

Contains the main recipe functionality, including serving controls, ingredient quantities, screen-reader announcements, and cooking instructions.

**main.tsx**

The application entry point. It loads the React application into the HTML page.

**index.css**

Contains the global CSS entry point.

### Why Is the Code Organised This Way?

The application separates the recipe banner from the main recipe functionality. This makes individual sections easier to understand, update, and maintain without placing everything inside one large component.

## 2. Where to Add New Features

When adding a feature, choose the component that is responsible for that part of the application.

Examples:

* A new recipe introduction or cooking-time display belongs in `Banner.tsx`.
* Changes to serving controls or ingredient calculations belong in `Body.tsx`.
* A new reusable section can be created as a separate component inside `src/component/`.
* A new application-wide component can be imported and displayed through `App.tsx`.

For example, to add a new dishes list feature:

1. Create `newDishes.tsx` inside `src/component/`.
2. Implement the shopping list interface in that file.
3. Import the component into `App.tsx` or the appropriate parent component.
4. Connect it to the ingredient data where necessary.

## 3. How to Run the Project

Make sure Node.js and npm are installed.

Install the project dependencies:

```bash
npm install


Start the development server:

```bash
npm run dev


Create a production build:

```bash
npm run build


Run the code quality check:

```bash
npm run lint


Preview the production build:

```bash
npm run preview


### Expected Results

* `npm run dev` starts the Vite development server.
* `npm run build` completes TypeScript checking and creates the production build in the `dist` folder.
* `npm run lint` runs Oxlint and reports code-quality issues, if any.
* `npm run preview` serves the production build locally.

A successful build should finish without errors.

## 4. Important Areas That Need Extra Care

Some parts of this application are sensitive to changes.

### Ingredient Quantity Calculation

The original recipe is designed for two servings.

The ingredient calculation uses:

 
ingredient.quantity * (servings / 2)
 

The number `2` represents the original serving count. If the original recipe serving count changes, the calculation must also be updated.

Always test the ingredient quantities after modifying this logic.

### Serving Controls

The decrease button uses:

 
Math.max(0, prev - 1)
 

This prevents the serving count from becoming negative.

Do not remove this minimum-value protection unless the serving logic is updated accordingly.

### Screen-Reader Announcement

The application uses:

 
aria-live="polite"
 

to announce serving changes to screen-reader users.

Avoid removing or hiding this announcement from assistive technology. Test it after changing the serving functionality.

### Responsive Layout

The Ingredients and Method sections use:
 
grid grid-cols-1 md:grid-cols-2
 

This displays the sections vertically on smaller screens and side-by-side on larger screens.

Check the layout at 320px width whenever changing spacing, widths, or component structure.

## 5. Before Submitting Changes

Before submitting a contribution:

1. Run `npm run build`.
2. Run `npm run lint`.
3. Test the serving controls using the keyboard.
4. Check that ingredient quantities update correctly.
5. Test the layout at 320px width.
6. Check that screen-reader announcements still work.

Please keep the existing accessibility and responsive behaviour working when introducing new features.
