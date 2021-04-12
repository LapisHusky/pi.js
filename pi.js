const pijs = {};

/*chat*/
pijs.chat = {};
pijs.chat.send = (message) =>{
    MPP.client.sendArray([{m:"a", message: message}]);
};

pijs.chat.local = (message, color) =>{
    var msgs = $("#chat").children(0).html();
    var msgColor = color || "#FFFFFF"; 
    $("#chat").children().eq(0).html(`${msgs}<li style="color: ${msgColor}; opacity: 1;"><span class="message">${message}</span></li>`);
};

pijs.chat.setUserChatOutput = (func) =>{
    MPP.chat.send = func;
};

/*piano*/
pijs.piano = {};
pijs.piano.pressKey = (noteKey, volume) =>{
    MPP.press(noteKey, volume);
};

pijs.piano.pressLocal = (noteKey, volume) =>{
    MPP.piano.play(noteKey, volume, MPP.client.getOwnParticipant(), 0);
};
