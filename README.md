# 𝓟𝓲.𝑗𝑠 API
Custom userscript API for MPP.

## Documentation
### Chat
#### pijs.chat.send(message);
Sends your messages to everyone in chat.
#### pijs.chat.local(message, color);
Makes local customizable messages in chat which only you can see. Supports HTML.
#### pijs.chat.setPlayerChatOutput(func);
Using this you can change the message output function which executes after pressing enter key when you send message.
### Piano
#### pijs.piano.pressKey(noteKey, volume);
Presses note on piano which everyone hear.
#### pijs.piano.pressLocal(noteKey, volume);
Same as, pijs.piano.pressKey, but only you hear your note 

**Source code: ** https://github.com/SuperPowerPlumber/pi.js/tree/main/pi.js-src
**Lightweight code:** https://github.com/SuperPowerPlumber/pi.js/tree/main/pi.js-light
