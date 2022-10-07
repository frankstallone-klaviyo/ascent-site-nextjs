// For creating <h1 id="headingname">
export const pageElementAnchor = (heading) =>
  heading.replaceAll(' ', '_').toLowerCase();

// Join a list of class names with a space
export const classNames = (...classes) => classes.filter(Boolean).join(' ');
