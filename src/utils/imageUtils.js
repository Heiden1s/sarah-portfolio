export const getPublicImagePath = (path, bustCache = true) => {
  // Remove leading './' or '/' if they exist
  const cleanPath = path.replace(/^[./]+/, '');
  
  // Use PUBLIC_URL environment variable which will be set based on homepage in package.json
  // or fall back to empty string for development
  const baseUrl = process.env.PUBLIC_URL || '';
  
  // Add cache-busting timestamp for images
  // This forces browsers to download the new version of the image
  const timestamp = bustCache ? `?v=${Date.now()}` : '';
  
  return `${baseUrl}/${cleanPath}${timestamp}`;
}; 