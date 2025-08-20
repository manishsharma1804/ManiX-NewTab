# Wallpaper Images

This folder is where you can store your wallpaper images if you choose to host them directly in this GitHub repository.

## Adding Images

1. Upload your wallpaper images to this folder
2. Get the raw GitHub URL for each image (click on the image in GitHub, then click "Raw" button)
3. Use these URLs in your `wallpapers.json` file

## Example URL Format

If you upload an image named `mountain.jpg` to this folder, the raw URL would be:

```
https://raw.githubusercontent.com/YOUR_USERNAME/ManiX_Wallpapers_pack/main/images/mountain.jpg
```

Use this URL in your `wallpapers.json` file:

```json
{
    "url": "https://raw.githubusercontent.com/YOUR_USERNAME/ManiX_Wallpapers_pack/main/images/mountain.jpg",
    "thumbnail": "https://raw.githubusercontent.com/YOUR_USERNAME/ManiX_Wallpapers_pack/main/images/mountain-thumbnail.jpg",
    "alt": "Mountain landscape"
}
```

## Best Practices

- Use descriptive filenames
- Create separate thumbnail versions of your images (smaller size)
- Optimize images for web (compress them)
- Use JPEG for photos, PNG for graphics with transparency, or WebP for better compression
- Keep main wallpaper images high resolution (1920px width recommended)
- Keep thumbnail images small (300px width recommended)