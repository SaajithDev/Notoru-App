# 📝 Notoru: AI-Powered Education Assistant

[![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/) [![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/) [![Groq](https://img.shields.io/badge/Powered_by-Groq-orange?style=for-the-badge)](https://groq.com/) [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**Notoru** is a cutting-edge mobile application built to revolutionize how students learn. By harnessing the lightning-fast inference of **Groq's Llama 3**, Notoru transforms chaotic lecture notes into structured knowledge, helps you memorize faster, and ensures you're ready for every exam.

---

## ✨ Core Features

### 🚀 1. AI-Powered Note Transformation
Stop wasting time formatting. Input messy transcripts or rough bullets and let Notoru generate beautiful, hierarchical Markdown notes.
- **Auto-Summarization:** Extracts core concepts and definitions.
- **Hierarchical Structure:** Intelligent header nesting for better readability.

### 🎴 2. Automated Flashcard Generation
Bridge the gap between reading and retaining. Instantly convert any note into a deck of interactive flashcards.
- **Active Recall:** AI identifies testable facts automatically.
- **One-Tap Creation:** No more manual card entry.

### 🕸️ 3. Smart Concept Mapping
Visualize the "Big Picture." Notoru analyzes your notes to suggest links between related subjects, creating a visual graph of your knowledge.
- **Knowledge Graph:** Interactive node-link diagrams.
- **Interdisciplinary Links:** Connects concepts across different subjects.

### ✍️ 4. Exam Readiness Quizzes
Simulate real testing conditions. Generate custom practice exams from your notes or PDF textbooks.
- **Multiple Formats:** MCQs, True/False, and Short Answer.
- **Instant Feedback:** Explanations provided for every answer.

### ⏱️ 5. Focus Study Timer
Master "Deep Work" with an integrated Pomodoro timer that tracks your productivity per subject.
- **Productivity Analytics:** See exactly where your study time goes.
- **Ambient Sounds:** Focused environment with built-in soundscapes.

---

## 🛠️ Technical Stack

- **Frontend:** [React Native](https://reactnative.dev/) via [Expo](https://expo.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **AI Engine:** [Groq SDK](https://github.com/groq/groq-typescript) (Llama 3-70B/8B)
- **Styling:** Vanilla CSS-in-JS
- **Markdown:** [react-native-markdown-display](https://github.com/iamacup/react-native-markdown-display)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or newer)
- npm or yarn
- Expo Go app on your mobile device (to preview)

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/notoru.git
   cd notoru
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   EXPO_PUBLIC_GROQ_API_KEY=your_groq_api_key_here
   ```

4. **Start the app**
   ```bash
   npx expo start
   ```
   Scan the QR code with your Expo Go app (Android) or Camera (iOS).

---

## 🗺️ Roadmap

- [x] **Phase 1:** AI Note Transformation and local storage.
- [ ] **Phase 2:** Flashcard generation and Study Timer.
- [ ] **Phase 3:** Quiz generation and PDF support.
- [ ] **Phase 4:** Concept Mapping and Cloud Sync.

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">Made with ❤️ for students everywhere</p>
