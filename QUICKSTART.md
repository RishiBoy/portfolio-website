# 🚀 Quick Start Guide

## Step 1: Extract the Project

Extract the `portfolio-cv` folder to your preferred location on your computer.

## Step 2: Open Terminal/Command Prompt

Navigate to the project folder:

```bash
cd path/to/portfolio-cv
```

## Step 3: Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

This will take a few minutes. Wait for it to complete.

## Step 4: Start Development Server

Once installation is complete, start the development server:

```bash
npm run dev
```

You should see output like:
```
  VITE v5.1.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## Step 5: Open in Browser

Open your browser and go to:
```
http://localhost:5173
```

You should see your portfolio website! 🎉

## Step 6: Customize Your Content

1. **Update Your Information:**
   - Open `src/data/cvData.ts`
   - Update all your personal details, skills, experience, etc.
   - Save the file and the browser will auto-refresh

2. **Add Your CV PDF:**
   - Place your CV PDF in the `public` folder
   - Name it `cv.pdf`
   - The download button will automatically work

3. **Customize Colors (Optional):**
   - Open `src/theme/theme.ts`
   - Change the color values to match your preferences
   - Save and see the changes instantly

## Step 7: Test on Different Devices

- Open the site on your phone/tablet
- Test the dark/light mode toggle
- Check all sections are displaying correctly
- Test all links and buttons

## Step 8: Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

## Step 9: Deploy

### Option A: Vercel (Easiest)

1. Create a GitHub repository and push your code
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "New Project" → Import your GitHub repository
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"
6. Done! You'll get a live URL

### Option B: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Click "Deploy"

### Option C: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.ts` - add your repo name:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest stays the same
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## Step 10: Share on LinkedIn

Once deployed:

1. Get your live website URL
2. Go to your LinkedIn profile
3. Edit your profile
4. Add the URL to your "Contact Info" section
5. Share a post announcing your new portfolio!

## 🎯 Key Files to Customize

| File | What to Change |
|------|----------------|
| `src/data/cvData.ts` | Your personal information, skills, experience |
| `src/theme/theme.ts` | Colors, fonts, styling |
| `public/cv.pdf` | Your CV PDF file |
| `index.html` | Page title, meta tags |

## 🆘 Common Issues

### "npm: command not found"
- Install Node.js from [nodejs.org](https://nodejs.org)
- Restart your terminal after installation

### "Port 5173 is already in use"
- Vite will automatically use another port
- Check the terminal for the new port number

### Changes not showing
- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Clear browser cache
- Make sure you saved the file

### Build errors
- Delete `node_modules` folder
- Delete `package-lock.json`
- Run `npm install` again

## 📞 Need Help?

Check the main README.md file for more detailed documentation.

## ✅ Checklist Before Deploying

- [ ] Updated all personal information in `cvData.ts`
- [ ] Added CV PDF to `public` folder
- [ ] Tested on mobile and desktop
- [ ] All links work correctly
- [ ] Dark/light mode works
- [ ] No console errors in browser
- [ ] Build command runs successfully (`npm run build`)

---

Good luck with your portfolio! 🚀
