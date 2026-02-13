# Valentine's Quest 💖

A beautiful, interactive, and romantic multi-step web application built to create a special Valentine's Day experience.

![Valentine's Question Preview](public/vite.svg)

## ✨ Features

-   **🔐 Authentication System**: Name-based login system (customizable for your partner).
-   **❓ Interactive Quiz**: A fun 3-question quiz with animations and feedback.
-   **💍 Proposal Page**: A "Will You Be Mine?" page with dynamic "Yes" and "No" buttons (try clicking "No"! 😉).
-   **🎵 Background Music**: Persistent romantic background music player.
-   **🎉 Celebration**: A beautiful final page with confetti and a heartfelt message.
-   **📱 Responsive**: Works perfectly on mobile and desktop.

## 🛠️ Tech Stack

-   **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Effects**: react-confetti

## 🚀 Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/valentine-web.git
    cd valentine-web
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment**
    Create a `.env` file in the root directory:
    ```env
    VITE_ALLOWED_NAME_1=Nikita
    VITE_ALLOWED_NAME_2=Chinu
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🎵 Customizing Music

To add your own background music:
1.  Place your MP3 file in `public/music/`.
2.  Rename it to `background.mp3`.

## 📁 Project Structure

```
valentine-web/
├── public/              # Static assets (music, icons)
├── src/
│   ├── components/      # React components (Pages, Music Player)
│   ├── App.tsx          # Main application logic
│   └── main.tsx         # Entry point
└── index.html           # HTML entry point with SEO tags
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Made with ❤️ for Valentine's Day*
