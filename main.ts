radio.onReceivedNumber(function (receivedNumber) {
    Entry_Data = receivedNumber
    serial.writeNumber(Entry_Data)
})
let Entry_Data = 0
radio.setGroup(111)
serial.redirectToUSB()
