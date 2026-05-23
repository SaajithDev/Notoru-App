# NOTORU = AI-Powered Education Assistant

## Overview
Notoru is a modern mobile application designed to streamline the learning process for students. By leveraging the power of Groq's high-speed AI (Llama 3), Lumina transforms how students capture, organize, and retain information.

## Target Audience
- High school and university students.
- Lifelong learners and professionals taking certifications.
- Educators looking for tools to help students summarize complex topics.

## Core Features

### 1. AI-Powered Note Transformation
Turn messy lecture transcripts or rough bullet points into beautifully formatted Markdown notes. The AI identifies key concepts, creates hierarchical headers, and extracts definitions automatically.
- **Powered by:** Groq (Llama 3).
- **Benefit:** Saves hours of re-writing and organizing notes.

### 2. Automated Flashcard Generation
Instantly convert a set of notes into a deck of interactive flashcards. Using active recall and spaced repetition principles, the app helps students memorize critical facts without manual entry.
- **Workflow:** One-tap "Generate Cards" from any note.
- **Benefit:** Bridges the gap between reading and retaining.

### 3. Smart Concept Mapping (Graph View)
Visualize the relationships between different subjects and notes. The app automatically suggests links between related topics (e.g., linking a "Cell Biology" note to a "Biochemistry" note).
- **Interface:** Interactive node-link diagram.
- **Benefit:** Helps students understand the "big picture" and interconnectedness of knowledge.

### 4. Exam Readiness Quizzes
Generate custom practice exams based on specific notes or uploaded PDF textbooks. The AI creates multiple-choice, true/false, and short-answer questions to simulate real testing conditions.
- **Feedback:** Immediate grading with explanations for wrong answers.
- **Benefit:** Identifies knowledge gaps before the actual exam.

### 5. Focus Study Timer (Integrated Pomodoro)
A built-in study timer that tracks "Deep Work" sessions. Users can tag their focus sessions with specific notes, providing analytics on how much time was spent studying each topic.
- **Features:** Customizable intervals, ambient soundscapes, and session history.
- **Benefit:** Encourages discipline and provides data-driven insights into study habits.

## Technical Stack
- **Frontend:** React Native (Expo) with TypeScript.
- **AI Engine:** Groq SDK (Llama 3-70B/8B).
- **Storage:** SQLite (local) or Supabase (cloud) for note persistence.
- **Styling:** Vanilla CSS-in-JS for a clean, modern aesthetic.

## Roadmap
- **Phase 1:** MVP with AI Note Transformation and local storage.
- **Phase 2:** Flashcard generation and Study Timer.
- **Phase 3:** Quiz generation and PDF support.
- **Phase 4:** Concept Mapping and Cloud Sync.
