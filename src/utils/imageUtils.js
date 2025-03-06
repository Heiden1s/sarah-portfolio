export const getPublicImagePath = (path) => {
  // Remove leading './' or '/' if they exist
  const cleanPath = path.replace(/^[./]+/, '');
  
  // For GitHub Pages deployment
  const prefix = process.env.NODE_ENV === 'production' ? '/sarah-portfolio' : '';
  
  return `${prefix}/${cleanPath}`;
}; 