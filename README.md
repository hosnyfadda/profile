<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Hosny Fadda - AI-Powered Portfolio

An interactive portfolio website built with React, Vite, and Google Gemini AI integration. View your app in AI Studio: https://ai.studio/apps/drive/1re4_WqEqA37G9sSwrwVuHZ9tksjzcD_5

Live at: https://hosnyfadda.github.io/profile/

## ✨ Features

- **Space-Themed UI**: Futuristic design with animated backgrounds and smooth transitions
- **AI Assistant**: Powered by Google Gemini API for intelligent conversation
- **Live Audio Mode**: Real-time voice interaction (requires API key)
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Portfolio Sections**: About, Projects, Skills, Education, and more
- **GitHub Pages Deployment**: Automated CI/CD with GitHub Actions

## 📋 Run Locally

**Prerequisites:** Node.js (v18+)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up API Key** in [.env.local](.env.local):
   - Get your free Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Add it to `.env.local`:
     ```
     API_KEY=your-gemini-api-key-here
     ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   - Opens at `http://localhost:5173`

## 🚀 Deploy to GitHub Pages

### Option 1: Automatic Deployment (Recommended)
The GitHub Actions workflow will automatically deploy when you push to `main`:

1. Push your changes to the main branch
2. GitHub Actions will build and deploy automatically
3. Your site updates at `https://hosnyfadda.github.io/profile/`

**Setup secrets in GitHub:**
- Go to Settings → Secrets and variables → Actions
- Add `GEMINI_API_KEY` if you want AI features on live site

### Option 2: Manual Deployment
```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

> Note: Make sure you have configured git:
> ```bash
> git config user.email "your-email@example.com"
> git config user.name "Your Name"
> ```

## 📁 Project Structure

```
├── components/        # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── GeminiAssistant.tsx
│   └── Footer.tsx
├── services/
│   └── geminiService.ts  # Gemini API integration
├── App.tsx           # Main app component
├── index.tsx         # Entry point
├── constants.tsx     # Portfolio data
├── types.ts          # TypeScript types
├── vite.config.ts    # Vite configuration
└── index.html        # HTML template
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages
- `npm run predeploy` - Automatically runs before deploy (builds project)

## 🔧 Configuration

### Vite Config
- **Base path**: `/profile/` (GitHub Pages subdirectory)
- **API Key injection**: Configured via environment variables
- **Build output**: `dist/` directory

### Environment Variables
Create `.env.local` file:
```env
API_KEY=your-gemini-api-key-here
```

The API key is:
- **For development**: Used by the Gemini service
- **For production**: Set in GitHub Actions secrets
- **Security**: Never commits `.env.local` to git

## 🎨 Design Features

- **Dark theme** with blue accents (space navigation theme)
- **Animated background** with stars and grid overlay
- **Glass-morphism effects** for modern UI
- **Smooth scrolling** and transitions
- **Responsive layout** using Tailwind CSS

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🐛 Troubleshooting

### Blank white page?
- Check browser console for errors (F12)
- Ensure all dependencies are installed: `npm install`
- Clear browser cache and restart dev server

### AI Assistant says "Communication link is offline"?
- You need to add a valid Gemini API key to `.env.local`
- Get one free at [Google AI Studio](https://aistudio.google.com/app/apikey)

### Deploy fails?
- Ensure git is configured: `git config user.email` and `git config user.name`
- Check that `dist/` folder can be generated: `npm run build`
- Verify repository name in vite.config.ts `base` matches your repo

## 📚 Technologies Used

- **React 19** - UI library
- **Vite** - Build tool & dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Google Gemini API** - AI integration
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD

## 📄 License

This project is open source and available under the MIT License.

## 👤 About

Created by Hosny Fadda - Space Navigation Engineer & AI/ML Specialist

---

**Need help?** Check the GitHub Issues or review the configuration files for more details.
