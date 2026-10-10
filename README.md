# 🐱 Pokédex App

A simple and interactive **Pokédex mobile application** built using React Native and Expo. The app fetches Pokémon data from the PokéAPI and displays Pokémon names, front and back sprites, and their types in colorful cards.

## ✨ Features

* 🔍 Fetches Pokémon data from the PokéAPI.
* 🎨 Displays Pokémon in colorful cards based on their types.
* 🖼️ Shows front and back Pokémon sprites.
* 🏷️ Displays Pokémon names and types.
* 📱 Built with React Native and Expo for mobile development.
* 🔗 Tap a Pokémon to navigate to its detail screen.
* ⏳ Handles loading states while fetching data.

## 🛠️ Tech Stack

* **React Native** — Mobile application development
* **Expo** — Development and build tooling
* **Expo Router** — File-based navigation
* **TypeScript** — Type-safe development
* **PokéAPI** — Pokémon data and sprites
* **React Hooks** — State management and side effects

## 📂 Project Structure

```text
pokedex/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   └── details.tsx
├── assets/
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project folder

```bash
cd pokedex
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npx expo start
```

### 5. Run the application

* Scan the QR code using Expo Go.
* Press `a` to run on an Android emulator.
* Press `i` to run on an iOS simulator, if available.

## 🌐 API Used

This project uses the free **[PokéAPI](https://pokeapi.co/)** to retrieve Pokémon information.

Example endpoints:

```text
https://pokeapi.co/api/v2/pokemon?limit=50
https://pokeapi.co/api/v2/pokemon/pikachu
```

The API provides Pokémon names, sprite images, types, and other details.

## 📚 What I Learned

* Working with APIs using `fetch()`.
* Managing component state using `useState`.
* Fetching data with `useEffect`.
* Displaying dynamic data using `map()`.
* Styling components with React Native `StyleSheet`.
* Implementing navigation with Expo Router.
* Handling loading states and missing Pokémon images.
* Using TypeScript interfaces for API responses.

## 🔮 Future Improvements

* Add Pokémon search functionality.
* Add pagination or infinite scrolling.
* Display Pokémon stats, abilities, and height.
* Add a favorites feature.
* Improve the UI with animations and responsive layouts.
* Add filters by Pokémon type.

## 🙌 Acknowledgements

* [PokéAPI](https://pokeapi.co/) for providing free Pokémon data.
* [Expo](https://expo.dev/) for simplifying React Native development.

---

⭐ If you like this project, consider giving the repository a star!

**Built with ❤️ using React Native and Expo.**
<img width="720" height="1600" alt="WhatsApp Image 2026-10-11 at 12 25 24 AM" src="https://github.com/user-attachments/assets/f4de95b7-7ae7-4dc2-bd76-c00eeccde853" />
<img width="720" height="1600" alt="WhatsApp Image 2026-10-11 at 12 25 25 AM" src="https://github.com/user-attachments/assets/56e8f3cf-5c62-456d-b058-7e28e5d72a57" />
