# Live Wallpaper Videos

This folder is where you can store your live wallpaper videos if you choose to host them directly in this GitHub repository.

## Adding Videos

1. Upload your video files to this folder
2. Get the raw GitHub URL for each video (click on the video in GitHub, then click "Raw" button)
3. Use these URLs in your `wallpapers.json` file under the `liveWallpapers` section

## Example URL Format

If you upload a video named `ocean.mp4` to this folder, the raw URL would be:

```
https://raw.githubusercontent.com/YOUR_USERNAME/ManiX_Wallpapers_pack/main/videos/ocean.mp4
```

Use this URL in your `wallpapers.json` file:

```json
{
    "url": "https://raw.githubusercontent.com/YOUR_USERNAME/ManiX_Wallpapers_pack/main/videos/ocean.mp4",
    "thumbnail": "https://raw.githubusercontent.com/YOUR_USERNAME/ManiX_Wallpapers_pack/main/images/ocean-thumbnail.jpg",
    "alt": "Ocean waves video"
}
```

## Best Practices

- Use descriptive filenames
- Keep videos short and optimized (under 10MB recommended)
- Use MP4 format for best browser compatibility
- Create thumbnail images for each video
- Consider hosting larger videos on a dedicated video hosting service instead