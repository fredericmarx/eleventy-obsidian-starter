# Obsidian 11ty Starter Kit

Use [11ty](https://www.11ty.dev/) to render HTML pages based on Obsidian Markdown files.

## Installation

### Node.js

Verify that Node.js is installed on your machine by opening a terminal and running `node -v`.

If `node -v` returns a version number, Node.js is installed and you’re good to go. If Node.js is not installed, please do so, either using your own preferred method, or the appropriate installer from the [official Node.js download page](https://nodejs.org/en/download).

### Dependencies

To install additional required Node.js packages as specified in `package.json`, run the terminal command `npm install` (or `npm i` for short) in the project directory.

## Scripts

Once Node.js installed, you have access to the following scripts that you can run from the terminal within your project directory:

- `npm run build`: Build HTML files from Markdown source once and save them to `_site` folder
- `npm run dev`: Build HTML files, start development server, and rebuild whenever a source file is changed

## File Structure

This project includes the following files:

- `package.json`: Metadata for npm (Node Package Manager), including project name, author, license, dependencies, and scripts for interacting with the project
- `package-lock.json`: Dependency lock file, automatically generated by npm based on `package.json`
- `eleventy.config.js`: 11ty configuration file
- `src/`: 11ty source files, including Markdown (name of this folder is configured in `eleventy.config.js`)
  - `src/_data`: Global 11ty data files
  - `src/_includes`: Layouts and template snippets
