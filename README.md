# Church Retreat Webpage

A modern React web application for managing and displaying information for a church retreat event.

## Features

- **Home Page**: Beautiful landing page with the retreat poster as background
- **Schedule**: Complete retreat schedule with Friday and Saturday activities
- **Speakers**: Speaker profiles with photos, bios, and session information
- **Cell Group Finder**: Secure authentication system to find cell group assignments
- **PDF Downloads**: Download session materials and guides
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd RetreatWebPage
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
RetreatWebPage/
├── public/
│   ├── Images/
│   │   └── Retreat Poster.jpeg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── HomePage.js
│   │   ├── SchedulePage.js
│   │   ├── SpeakersPage.js
│   │   ├── CellGroupPage.js
│   │   └── CellGroupResult.js
│   ├── data/
│   │   └── retreatData.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Customization

### Updating Retreat Data

All retreat information is stored in `src/data/retreatData.js`. You can modify:

- **Cell Groups**: Add/remove cell groups and members
- **Speakers**: Update speaker information, photos, and sessions
- **Schedule**: Modify the retreat schedule
- **PDF Downloads**: Update download links and descriptions

### Sample Data

For testing purposes, the following sample members are included:
- Alice Johnson (password: retreat2024)
- Bob Wilson (password: retreat2024)
- Carol Davis (password: retreat2024)
- Frank Lee (password: retreat2024)
- Grace Taylor (password: retreat2024)

### Adding Real PDF Files

To add actual PDF files for download:

1. Place your PDF files in the `public/` directory
2. Update the `pdfDownloads` section in `retreatData.js` with the correct filenames
3. Modify the `handleDownloadPDF` function in `CellGroupResult.js` to point to the actual files

### Updating Speaker Photos

Replace the placeholder speaker images in `retreatData.js` with actual photos:

1. Add speaker photos to the `public/` directory
2. Update the `image` URLs in the speakers array
3. Or use external image URLs

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Web Server

1. Run `npm run build`
2. Upload the contents of the `build` folder to your web server
3. Ensure your server is configured to serve React Router routes correctly

### Deploy to GitHub Pages

1. Add `"homepage": "https://yourusername.github.io/repository-name"` to `package.json`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
4. Run `npm run deploy`

## Security Notes

- The current implementation stores member data in the frontend code
- For production use, consider implementing a backend API with proper authentication
- Passwords are currently stored in plain text - implement proper hashing for production
- Consider adding rate limiting for the authentication form

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please contact the retreat organizers or create an issue in the project repository.
