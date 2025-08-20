/**
 * Example script to update wallpapers.json
 * 
 * This is just a demonstration of how you might programmatically
 * update your wallpapers.json file if needed.
 */

const fs = require('fs');
const path = require('path');

// Path to your wallpapers.json file
const wallpapersPath = path.join(__dirname, 'wallpapers.json');

// Read the current wallpapers.json file
fs.readFile(wallpapersPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading wallpapers.json:', err);
    return;
  }

  try {
    // Parse the JSON data
    const wallpapers = JSON.parse(data);

    // Example: Add a new wallpaper
    wallpapers.wallpapers.push({
      url: 'https://raw.githubusercontent.com/YOUR_USERNAME/ManiX_Wallpapers_pack/main/images/new-wallpaper.jpg',
      thumbnail: 'https://raw.githubusercontent.com/YOUR_USERNAME/ManiX_Wallpapers_pack/main/images/new-wallpaper-thumbnail.jpg',
      alt: 'New Wallpaper Description'
    });

    // Example: Add a new live wallpaper
    wallpapers.liveWallpapers.push({
      url: 'https://raw.githubusercontent.com/YOUR_USERNAME/ManiX_Wallpapers_pack/main/videos/new-video.mp4',
      thumbnail: 'https://raw.githubusercontent.com/YOUR_USERNAME/ManiX_Wallpapers_pack/main/images/new-video-thumbnail.jpg',
      alt: 'New Live Wallpaper Description'
    });

    // Write the updated JSON back to the file
    fs.writeFile(wallpapersPath, JSON.stringify(wallpapers, null, 4), 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error writing wallpapers.json:', writeErr);
        return;
      }
      console.log('Successfully updated wallpapers.json');
    });
  } catch (parseErr) {
    console.error('Error parsing wallpapers.json:', parseErr);
  }
});