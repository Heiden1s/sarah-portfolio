export const getPublicImagePath = (path) => {
  // Remove leading './' if it exists
  const cleanPath = path.startsWith('./') ? path.slice(2) : path;
  // Remove leading '/' if it exists
  const normalizedPath = cleanPath.startsWith('/') ? cleanPath.slice(1) : cleanPath;
  return `/sarah-portfolio/${normalizedPath}`;
}; 