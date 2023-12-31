# Cybersecurity Interactive Fiction

github pages website: [https://jiajunx31.github.io/cybersecurity-interactive-fiction/](https://jiajunx31.github.io/cybersecurity-interactive-fiction/)

## Development Environment Setup

You need to have [NodeJS](docs/installing-node.md) and [Tweego](docs/installing-tweego.md) installed on your computer to compile Tweego source code.

## To successfully update website

### On Windows

Run build.bat and rebuild.bat - this creates .twee and .html files for the build.yml file to work with and deploy to GitHub Pages. Alternatively, you can use the 'npm run build' and 'npm run rebuild' commands in the command line.

### On *nix OSes (MacOS, Linux, etc.)

Run `./build.sh` in your terminal/shell, which has the same effect as running the `.bat` files mentioned in the previous section.

## To test the website locally

Run `npm start` to start up a simple localhost server to test the website locally that is accessible at [http://127.0.0.1:8080](http://127.0.0.1:8080). This is useful for testing the website before deploying it to GitHub Pages.

