# ManiX Wallpapers Pack

This repository contains wallpapers for the ManiX Chrome extension. By hosting this repository on GitHub, you can update the wallpapers without having to update the extension itself.

## Structure

The main file in this repository is `wallpapers.json`, which contains the configuration for all wallpapers available in the ManiX extension.

### Wallpapers JSON Structure

```json
{
    "wallpapers": [
        {
            "url": "https://example.com/image.jpg",
            "thumbnail": "https://example.com/image-thumbnail.jpg",
            "alt": "Description of the image",
            "default": true  // Optional: Set to true for the default wallpaper
        },
        // More wallpapers...
    ],
    "liveWallpapers": [
        {
            "url": "https://example.com/video.mp4",
            "thumbnail": "https://example.com/video-thumbnail.jpg",
            "alt": "Description of the video"
        },
        // More live wallpapers...
    ]
}
```

## How to Update Wallpapers

1. **Add New Wallpapers**:
   - Add new entries to the `wallpapers` or `liveWallpapers` arrays in `wallpapers.json`
   - Make sure to include `url`, `thumbnail`, and `alt` for each entry
   - Optionally set `default: true` for one wallpaper to make it the default

2. **Remove Wallpapers**:
   - Simply remove the corresponding entry from the JSON file

3. **Replace Wallpapers**:
   - Update the `url`, `thumbnail`, or `alt` values for existing entries

## Hosting Images

You can host your wallpaper images in several ways:

1. **GitHub Repository**: Upload images to this repository and use raw GitHub URLs
   - For thumbnails, you can either:
     - Upload a smaller version of the image with `-thumbnail` suffix (e.g., `ocean-thumbnail.jpg`)
     - Or use the same image URL for both main image and thumbnail
2. **Image Hosting Services**: Use services like Imgur, Cloudinary, or Unsplash
3. **Your Own Server**: Host images on your own web server

## Important Notes

- Ensure all image and video URLs are publicly accessible
- Use HTTPS URLs for security
- Keep thumbnail images small (recommended: 300px width) for faster loading
- Main wallpaper images should be high resolution (recommended: 1920px width)
- For videos, use formats supported by modern browsers (MP4 is recommended)

## Connecting to ManiX Extension

To connect this repository to your ManiX extension:

1. Host this repository on GitHub
2. Get the raw URL to your `wallpapers.json` file (e.g., `https://raw.githubusercontent.com/YOUR_USERNAME/ManiX_Wallpapers_pack/main/wallpapers.json`)
3. Update the `fetchWallpapersFromGitHub` function in your extension's `main.js` file with this URL

```javascript
async fetchWallpapersFromGitHub() {
    try {
        const githubUrl = 'https://raw.githubusercontent.com/YOUR_USERNAME/ManiX_Wallpapers_pack/main/wallpapers.json';
        // Rest of the function...
    }
}
```

## License

Make sure you have the rights to use any images or videos you include in this repository.