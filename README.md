# 🐾 Doggos — The Good Dog Club

> *"A never-ending collection of wagging tails, wet noses, and very important naps."*

A modern, high-performance React application featuring an endless gallery of adorable doggos with smooth infinite scrolling, real-time search filtering, and responsive card designs with custom color accents.

---

## ✨ Features

- **🐕 Endless Good Boys**: Continuous infinite scrolling powered by the modern `IntersectionObserver` API.
- **🔍 Instant Live Search**: Filter dogs on the fly by **name**, **breed**, or **personality mood**.
- **🎨 Dynamic Theming**: Every dog card features a custom accent color (`--card-color`) that styles its backdrop, shadows, and interactive hover effects.
- **⚡ Blazing Fast**: Built with **React 19** and **Vite** for instant Hot Module Replacement (HMR) and optimized production bundles.
- **📱 Fully Responsive**: Fluid CSS Grid layout tailored for mobile, tablet, and widescreen desktop displays.
- **🛡️ Image Resilience**: Automatic fallback handling ensures cards always display even if an image URL fails to load.

---

## 🐾 How to Add More Doggos

Adding a new dog to the gallery is quick and straightforward! Follow the steps below:

### Step 1: Open the Dog Data File
Open `src/infiniteScrolling.jsx` in your code editor.

### Step 2: Locate the `dogData` Array
Around line 25, you will find the `dogData` array:

```javascript
const dogData = [
  {
    name: 'Milo',
    breed: 'Golden retriever',
    mood: 'Sunshine seeker',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85',
    color: '#f6c453',
  },
  // ... more dogs
]
```

### Step 3: Dog Object Schema
Each dog object accepts five fields:

| Field | Type | Description | Example |
| :--- | :--- | :--- | :--- |
| `name` | `string` | The dog's name | `'Barkley'` |
| `breed` | `string` | Dog breed or mix | `'Golden Doodle'` |
| `mood` | `string` | Personality tag or fun quirk | `'Master of zoomies'` |
| `image` | `string` | Image URL (Unsplash or `/src/assets/`) | `'https://images.unsplash.com/...'` |
| `color` | `string` | Hex color code for card backdrop & glow | `'#e8a34f'` |

### Step 4: Copy & Paste the Template
Copy the snippet below and paste it anywhere inside the `dogData` array:

```javascript
{
  name: 'Barkley',
  breed: 'Golden Doodle',
  mood: 'Master of zoomies',
  image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=900&q=85',
  color: '#e8a34f',
},
```

### 💡 Pro Tips for Adding Dogs
1. **Unsplash Images**: For best results, use vertical or square aspect ratio images (`aspect-ratio: 1 / 1.08`). When using Unsplash, add `?auto=format&fit=crop&w=900&q=85` to the end of the URL for optimal quality and loading speed.
2. **Local Images**: You can also save image files inside `src/assets/`, import them at the top of the file, and pass the imported variable into `image`.
3. **Accent Colors**: Pick vibrant or pastel hex codes (e.g., `#ff8c69`, `#53c6b4`, `#9b8cff`, `#f28f3b`) that match the tone of the dog's photo.
4. **Automatic Integration**: As soon as you save the file, Vite hot-reloads the page. Your new dog will immediately appear in the infinite scrolling feed and will be searchable by name, breed, or mood!

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gourishgg/doggos.git
   cd doggos
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser at the URL shown in your terminal (usually `http://localhost:5173`).

---

## 🛠️ Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR) |
| `npm run build` | Compiles and bundles production-ready assets into the `dist/` directory |
| `npm run preview` | Locally serves the production build for testing |
| `npm run lint` | Runs ESLint to check for syntax and style issues |

---

## 📁 Project Structure

```text
doggos/
├── public/                 # Static assets & favicon
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/             # Images and graphic assets
│   ├── App.css
│   ├── App.jsx             # Main application layout
│   ├── Contact.jsx         # Pack contact section
│   ├── Home.jsx            # Hero section
│   ├── index.css           # Global typography & reset styles
│   ├── infiniteScrolling.css # Grid, card, animation & glow styles
│   ├── infiniteScrolling.jsx # Dog gallery data, search & scroll logic
│   ├── main.jsx            # React root mounting
│   └── pageSections.css    # Section layout styling
├── index.html              # HTML entry point
├── package.json            # Project dependencies and metadata
├── vite.config.js          # Vite build configuration
└── README.md               # Documentation & guides
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
