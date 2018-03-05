# Figma Plugins Panel
A collection of plugins (aka Figjets) made for Figma App via a Chrome Extension app.

## Install the plugin on Chrome (Recommended)
- Download and Install the Chrome Extension here:
http://bit.ly/2FfdXUa

## Usage on Desktop App (Mac/Win) and other Browsers
The use of the extension on the Figma Desktop App or other browsers is possible, but since Figma doesn't officially support Plugins at the moment, the process has some limitations (See Important Notes Below).

### How to load a FigJet on Desktop App (Mac/Win) and other Browsers
1. Download the plugin here: figma-plugin-latest.js

2. Open it on your favourite editor and copy/paste its code. 

3. Open the Developer Tools panel available on the Figma Desktop App (Help > Toggle Developer Tools) or the one on your Browser (Firefox, Safari).

4. Then create a snippet using the Snippet feature available on the Sources (Scrathpad in Firefox)

5. Run the Snippet. You should see the FigJet Panel appearing the top-right portion of the toolbar.

**Important Note 1** On the Desktop App be sure to load the Developer Tools for Figma App instead of the one which Toggle the Inspector for the Electron Window. (See Video Guides below)

#### Desktop App Limitations
At the moment, Figma doesn't officially support custom plugins through the app. This creates some limitations on how our Plugin Panel can be used on the Desktop App or non-chrome browsers.

Without the Chrome extention, **your only option is to re-run the panel manually on every new tab, making sure to open a new Developer Tools panel each time.** (See Video Guides for further instructions)

The process doesn't take too much time, but if you want to save some extra time you can automate the FigJet by using tools like Automator, Terminal, Keyboard Maestro, etc. (Mac Only)


### Video Guides

Firefox: http://bit.ly/2FU0SAX

Desktop App: http://bit.ly/2FhU8vo

Desktop App Reloading: http://bit.ly/2I57gGf
