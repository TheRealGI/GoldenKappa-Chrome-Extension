# GoldenKappa-Chrome-Extension
Thanks to the leak Twitch had we know now that the rare occur of a golden Kappa is not random as we thought. There are certain employee who have the authorization to pick a Twitch account once a day to make the Kappa emote to a golden version. However with this extension you don't need to wait decades for that event. Just use this extension and you will have the golden Kappa forever more or less.

## What does the extension do?
The extension listen to DOM changes only on https://twitch.tv. The specific part which is observed is the chat. Whenever a Kappa is emitted in chat the extension replaces the src of the Kappa emote to the golden one. The source is the service which Twitch use.

## How to add the extension to chrome?
1. Download the source from this repository.
2. Extract the downloaded ZIP file
3. Open up google chrome
4. In the url bar type in: chrome://extensions
5. Enable developer mode on the top right.
6. Click on Load unpacked extension button and navigate to extracted version of the downloaded extension
7. Reopen chrome and go to twitch.tv
8. Type in chat Kappa. See what happens :)
