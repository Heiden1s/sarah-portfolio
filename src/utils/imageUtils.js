export const getPublicImagePath = (path) => {
  // Remove leading './' or '/' if they exist
  const cleanPath = path.replace(/^[./]+/, '');
  
  // Use PUBLIC_URL environment variable which will be set based on homepage in package.json
  // or fall back to empty string for development
  const baseUrl = process.env.PUBLIC_URL || '';
  
  return `${baseUrl}/${cleanPath}`;
}; 