# Project Data Management Guide

## Overview

The project data has been modularized into a separate file (`projectData.js`) for easier management and maintenance. This guide explains how to work with the new system.

## File Structure

```
├── projectData.js      # Contains all project data and helper functions
├── script.js          # Main application code (imports from projectData.js)
├── index.html         # Updated to load script.js as a module
└── PROJECT_DATA_GUIDE.md  # This guide
```

## Adding a New Project

To add a new project, edit `projectData.js` and add an entry to the `PROJECT_DATA` object:

```javascript
'your-project-id': {
    title: 'Your Project Title',
    subtitle: 'Technology Stack, Tools Used',
    description: 'Brief description for the project card',
    heroImage: 'path/to/hero/image.jpg', // or null for placeholder
    extendedDescription: 'Detailed description for the project detail page',
    gallery: [
        'path/to/gallery/image1.jpg', // or null for placeholder
        'path/to/gallery/image2.jpg'  // or null for placeholder
    ],
    credits: 'Credits information with HTML formatting allowed'
}
```

## Editing Existing Projects

1. Open `projectData.js`
2. Find the project by its ID (e.g., `'dior-atelier'`)
3. Edit any of the fields:
   - `title`: Project name
   - `subtitle`: Technology stack or tools used
   - `description`: Brief description for project cards
   - `heroImage`: Main project image (set to `null` for placeholder)
   - `extendedDescription`: Detailed description for project detail pages
   - `gallery`: Array of 2 images (set to `null` for placeholders)
   - `credits`: Credits with HTML formatting (use `<br>` for line breaks)

## Helper Functions

The `ProjectDataHelpers` object provides useful utilities:

### Get a specific project
```javascript
const project = ProjectDataHelpers.getProject('dior-atelier');
```

### Get all project IDs
```javascript
const allIds = ProjectDataHelpers.getAllProjectIds();
```

### Get projects by category
```javascript
const arProjects = ProjectDataHelpers.getProjectsByCategory('ar');
const vrProjects = ProjectDataHelpers.getProjectsByCategory('vr');
const allProjects = ProjectDataHelpers.getProjectsByCategory('all');
```

### Find projects missing images
```javascript
const missingImages = ProjectDataHelpers.getProjectsWithMissingImages();
console.log('Projects needing images:', missingImages);
```

### Validate project data
```javascript
const validation = ProjectDataHelpers.validateProject(project);
console.log('Is valid:', validation.isValid);
console.log('Missing fields:', validation.missingFields);
```

### Get project statistics
```javascript
const stats = ProjectDataHelpers.getProjectStats();
console.log('Total projects:', stats.totalProjects);
console.log('Completion rate:', stats.completionRate + '%');
console.log('Categories:', stats.categories);
```

## Category Detection

Projects are automatically categorized based on their subtitle:
- **AR**: Contains "spark ar" or "lens studio"
- **VR**: Contains "unity", "vr", or "webgl"
- **Other**: Everything else

## Image Placeholders

Set `heroImage` or gallery items to `null` to use automatic placeholders:
- Hero placeholders show the project title
- Gallery placeholders show "Gallery Image 1/2"

## Best Practices

1. **Consistent Naming**: Use kebab-case for project IDs (e.g., `'dior-atelier'`)
2. **Image Paths**: Use relative paths from the root directory
3. **Credits Formatting**: Use `<br>` for line breaks in credits
4. **Descriptions**: Keep `description` brief for cards, use `extendedDescription` for details
5. **Validation**: Use helper functions to validate data before deploying

## Example: Adding a New Project

```javascript
// Add this to the PROJECT_DATA object in projectData.js
'new-ar-project': {
    title: 'New AR Experience',
    subtitle: 'Spark AR Studio, JavaScript, GLSL',
    description: 'An innovative AR filter that showcases cutting-edge technology.',
    heroImage: 'images/thumbnails/new_project_thumb.jpg',
    extendedDescription: 'This project demonstrates advanced AR techniques including face tracking, particle systems, and custom shaders. Built for social media platforms with optimized performance.',
    gallery: [
        'images/new-project/gallery1.jpg',
        'images/new-project/gallery2.jpg'
    ],
    credits: 'Client: Brand Name<br>AR Development: Haolin Fang<br>Platform: Meta Spark AR<br>Year: 2024'
}
```

## Debugging

Use the browser console to debug project data:

```javascript
// Check if project exists
console.log(ProjectDataHelpers.getProject('project-id'));

// Get statistics
console.log(ProjectDataHelpers.getProjectStats());

// Find projects with missing images
console.log(ProjectDataHelpers.getProjectsWithMissingImages());
```

## Maintenance

Regularly check for:
1. Missing images using `getProjectsWithMissingImages()`
2. Data validation using `validateProject()`
3. Category distribution using `getProjectStats()`

This modular approach makes it easy to maintain project data while keeping the main application code clean and organized. 