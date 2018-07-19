# Figma Plugins Panel — v.2.0
The unofficial plugins panel for Figma App.

![alt text](https://raw.githubusercontent.com/PaperTiger/figma-plugins/master/cover.jpg?token=AHoqgaAnAQoQtEygmvWrsvbW781LSID-ks5apoIFwA%3D%3D "Figma Plugin Panel Cover")

## How to Use the Panel

### Figma Desktop App (Mac Only) - 'Download Required'
- Download and Install the Figma Desktop App Client below
[Figma Desktop App w/ Plugin Panel](figma-app-latest.zip)
- Depending on your Mac you may get an 'Figma is Damaged' error while trying to open the app, in that case please follow the guide below on Faq & Troubleshooting.

### Install the plugin on Chrome 64+
- Download and Install the Chrome Extension here:
http://bit.ly/2FfdXUa

### Install the plugin on Firefox 61+
- Download and Install the Firefox Extension here:
https://mzl.la/2L6Kd2N

---

## Faqs and Troubleshooting

#### [Desktop App] I'm getting the error 'Figma is damaged and can't be opened'.
The app is built on top of the Figma Beta Desktop App, which requires some quick configuration on some Macs.

1. Open Terminal then type: ```sudo spctl --master-disable```, press Enter then add your system password to Confirm
2. Go to ```System Preferences > Security and Privacy```, then make sure that the option ```Anywhere``` is selected on the ```Allow apps downloaded from:``` section.

#### [Desktop App] I can't find the plugin Icon on the Toolbar.
The Plugin Button is available on the ```File Browser and Project Editor``` only. If the button doesn't show up, try to close and restart the app. 

#### [Desktop App] Is there any Desktop App Client for Windows?
- Unfortunately we don't support an integration of the Plugins Panel on Win at the moment. If you're developer interested in porting the panel on Win, feel free to get in touch with us at team@papertiger.com

#### [Dark Theme Plugin] The rulers' color is still white.
At the moment there's no way to change the colors / theme of the rulers on Figma. 

#### [Dark Theme Plugin] Some UI elements look unstyled.
We tried our best to make sure that any element get the correct styling, but due to the complexilty of the app and all the possible scenarios, some components may fall behind. Feel free to get in touch with us by sending a screenshot and browser/system specs at team@papertiger.com

#### [Generate PDF Plugin] I'm getting the error 'The file key is invalid'
Make sure to turn on ```Public Access``` on the project link by clicking on the ```Share Button``` then ```Enable link access``` in Figma.

---

## For any other issue or question send us a mail at team@papertiger.com
