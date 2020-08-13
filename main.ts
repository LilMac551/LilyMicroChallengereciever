radio.onReceivedString(function on_received_string(receivedString: string) {
    let char = ""
    if (receivedString == ".-") {
        char = "A"
    }
    
    if (receivedString == "-...") {
        char = "B"
    }
    
    if (receivedString == "-.-.") {
        char = "C"
    }
    
    if (receivedString == "-..") {
        char = "D"
    }
    
    if (receivedString == ".") {
        char = "E"
    }
    
    if (receivedString == "..-.") {
        char = "F"
    }
    
    if (receivedString == "--.") {
        char = "G"
    }
    
    if (receivedString == "....") {
        char = "H"
    }
    
    if (receivedString == "..") {
        char = "I"
    }
    
    if (receivedString == ".---") {
        char = "J"
    }
    
    if (receivedString == "-.-") {
        char = "K"
    }
    
    if (receivedString == ".-..") {
        char = "L"
    }
    
    if (receivedString == "--") {
        char = "M"
    }
    
    if (receivedString == "-.") {
        char = "N"
    }
    
    if (receivedString == "---") {
        char = "O"
    }
    
    if (receivedString == ".--.") {
        char = "P"
    }
    
    if (receivedString == "--.-") {
        char = "Q"
    }
    
    if (receivedString == ".-.") {
        char = "R"
    }
    
    if (receivedString == "...") {
        char = "S"
    }
    
    if (receivedString == "-") {
        char = "T"
    }
    
    if (receivedString == "..-") {
        char = "U"
    }
    
    if (receivedString == "...-") {
        char = "V"
    }
    
    if (receivedString == "..--") {
        char = "W"
    }
    
    if (receivedString == "-..-") {
        char = "X"
    }
    
    if (receivedString == "-.--") {
        char = "Y"
    }
    
    if (receivedString == "--..") {
        char = "Z"
    }
    
    if (receivedString == ".----") {
        char = "1"
    }
    
    if (receivedString == "..---") {
        char = "2"
    }
    
    if (receivedString == "...--") {
        char = "3"
    }
    
    if (receivedString == "....-") {
        char = "4"
    }
    
    if (receivedString == ".....") {
        char = "5"
    }
    
    if (receivedString == "-....") {
        char = "6"
    }
    
    if (receivedString == "--...") {
        char = "7"
    }
    
    if (receivedString == "---..") {
        char = "8"
    }
    
    if (receivedString == "----.") {
        char = "9"
    }
    
    if (receivedString == "-----") {
        char = "0"
    }
    
    basic.showString(char)
    if (char != "") {
        radio.sendString(char)
    }
    
})
basic.forever(function on_forever() {
    
})
