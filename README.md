 ### Recipe with Adjustable Servings

A responsive and accessible recipe page built with React, TypeScript, and Tailwind CSS.

# Features

- Adjustable recipe servings
- Ingredient quantities update automatically
- Minimum serving count of 0
- Screen-reader announcements when servings change
- Keyboard-accessible serving controls
- Responsive layout for mobile and desktop
- No horizontal scrolling at 320px width

# Technologies

- React
- TypeScript
- Tailwind CSS
- React Icons
- Vite

# How It Works

The recipe starts with 2 servings. Users can increase or decrease the serving count using the "+" and "−" buttons.

Ingredient quantities are calculated based on the original recipe serving size:

`adjusted quantity = original quantity × (selected servings ÷ 2)`

For example, if the original recipe contains 200g of pasta for 2 servings:

- 2 servings → 200g
- 3 servings → 300g
- 4 servings → 400g

## Accessibility

The serving controls use native HTML buttons so they can be operated using the keyboard with Tab, Enter, and Space.

Visible focus styles are provided for keyboard users.

The serving changes are announced to screen readers using `aria-live="polite"`.

The minus and plus icons are hidden from screen readers because the buttons already have accessible labels.

## Narrow-Screen Handling

At narrow screen widths, the serving controls switch to a vertical layout so they remain usable without horizontal scrolling.

The Ingredients and Method sections use a single-column layout on small screens and switch to a two-column layout on larger screens.

The page was tested at 320px width to ensure that content remains readable and usable without horizontal scrolling.

## Keyboard Accessibility

The interface can be operated entirely using the keyboard.

- Press `Tab` to move through interactive elements in visual order.
- Press `Enter` or `Space` to activate the serving controls.
- The serving controls have visible focus indicators using `:focus-visible`.
- Native HTML `<button>` elements are used instead of clickable `<div>` elements.
- The Ingredients and Method sections remain usable on narrow screens without horizontal scrolling.

## Project Structure

src/
├── App.tsx
└── component/
    ├── Banner.tsx
    └── Body.tsx

## Running the Project

Install dependencies:

npm install
npm run dev

## Project in GitHub

Added github, some importent commit

`git add.`
`git commit -m"button updated"`
`git push -u origin main`
