var textValue;
var textContent = document.getElementById("textArea");
var convertedKey;
var translationContent = document.getElementById("translationArea");
$("#inputText").keyup(function(e) {
    textValue = document.getElementById("inputText").value; //This is the input text box
    if ($("input:checked").val() == "caesarCipher") {
        if (e.keyCode == 8) {
            textContent.textContent = textContent.textContent.substr(0, textContent.textContent.length - 1);
        } else if (e.keyCode == 90) {
            textContent.textContent += "A"
        } else if (e.keyCode == 32) {
            textContent.textContent += " "
        } else {
            convertedKey = String.fromCharCode(e.keyCode + 1); //This takes the key that you press and converts it into the next letter in the Alphabet
            textContent.textContent += convertedKey;
        }
    } else if ($("input:checked").val() == "echo") {
        if (e.keyCode == 8) {
            textContent.textContent = textContent.textContent.substr(0, textContent.textContent.length - 1);
        } else {
            textContent.textContent += String.fromCharCode(e.keyCode);
        }
    } else if ($("input:checked").val() == "heiroglyphics") {
        if (e.keyCode == 32) {
            console.log("Added space")
        } else if (e.keyCode == 8) {
            textContent.textContent = textContent.textContent.substr(0, textContent.textContent.length - 1);
        } else if (e.keyCode > 64 && e.keyCode < 91) {
            $("#textArea").append("<img src='images/heiroglyphics/" + String.fromCharCode(e.keyCode) + ".gif'>");
            console.log("STUFF" + String.fromCharCode(e.keyCode));
        }
    }
});
//This checks if you press a key in the translation input and decides if you pressed a letter of the enter key. If you pressed the enter key then it takes all the text in the box, converts it back(Decodes it) and puts it in the text area and removes V since you are copying something in :). If you are just adding 1 letter is auto
$("#translationInputText").keyup(function(e) {
    if (e.keyCode == 8) {
        translationContent.textContent = translationContent.textContent.substr(0, translationContent.textContent.length - 1);
    } else if (e.keyCode == 32) {
        translationContent.textContet += " "
    } else if (e.keyCode > 65 && e.keyCode <= 90) {
        translationContent.textContent += String.fromCharCode(e.keyCode - 1);
    } else if (e.keyCode == 65) {
        translationContent.textContent += "Z";
    } else if (e.keyCode == 13) {
        var decodeMessage = document.getElementById("translationInputText").value;
        decodeMessage = decodeMessage.replace(/ /g, "1");
        var messageArray = decodeMessage.split("");
        console.log(decodeMessage);
        //translationContent.textContent = translationContent.textContent.substr(0, translationContent.textContent.length - 1);
        translationContent.textContent = "";
        for (var i = 0; i < messageArray.length; i++) {
            var currentCode = messageArray[i].toUpperCase();
            currentCode = currentCode.charCodeAt(0);
            console.log(currentCode);
            if (currentCode == "49") {
                translationArea.textContent += " ";
            } else if (e.keyCode == 65) {
                translationArea.textContent += "Z";
            } else {
                translationArea.textContent += String.fromCharCode(currentCode - 1);
            }
        }
        decodeMessage = "";
    }
});
$("input[type='radio']").click(function() {
    $("input:checked").prop('checked', false);
    $(this).prop('checked', true)
    console.log(this);
    textContent.textContent = "";
    document.getElementById("inputText").value = "";
}); //This block lets only one radio button be checked at a time
