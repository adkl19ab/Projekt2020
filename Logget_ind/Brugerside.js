currentClient = JSON.parse(localStorage.getItem('Brugere'));
currentAppointment = JSON.parse(localStorage.getItem('Appointments'));

function bruger() {

    for (let i = 0; i < currentClient.length; i++) {
        if (currentClient[i].Online === true) {
            var name = this.currentClient[i].clientName;
            var email = this.currentClient[i].clientEmail;
            document.getElementById("Brugerinfo").innerHTML= (`Username: ${name}\ne-mail: ${email}\n`);
        }
    }
}

//var testArr = ['test'];

function viewAppointment(){

    for (let j = 0; j < currentClient.length; j++) {
        if (currentClient[j].Online === true) {
            var date = this.currentAppointment[j].dateOfAppointment;
            var start = this.currentAppointment[j].startTimeOfAppointment;
            var end = this.currentAppointment[j].endTimeOfAppointment;
            var consultant = this.currentAppointment[j].nameOfConsultant;

            document.getElementById("Apptinfo").innerHTML = (`You have an appointment with ${consultant}, on ${date}. The appointment starts at ${start} and ends at ${end}`);
        }
    }
}