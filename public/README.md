# Public Assets Folder

This folder contains static files that will be served directly by your website.

## Files

### cv.pdf
Your CV/Resume PDF file. This file is:
- Directly accessible at `/cv.pdf` when your site is deployed
- Used by the "Download CV" buttons throughout the site
- Your actual CV (Rishitha_CV_2025_05.pdf)

## Adding More Files

You can add other static files here:
- Favicon: `favicon.ico`
- Images: `logo.png`, `profile-photo.jpg`, etc.
- Documents: Additional PDFs or files you want to make downloadable

## Important Notes

- Files in this folder are copied as-is to the build output
- They're accessible via root URL (e.g., `/cv.pdf`, `/logo.png`)
- Keep the `cv.pdf` filename so the download buttons work
- If you update your CV, just replace the `cv.pdf` file

## Updating Your CV

To update your CV in the future:
1. Export your updated CV as PDF
2. Replace the `cv.pdf` file in this folder
3. Rebuild and redeploy your site
