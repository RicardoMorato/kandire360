const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('<API_KEY>');

function sendEmail(email, payload) {

    let html = "";

    html += "<table style='border: solid 1px #000'>";
    html += "<tr>";
    html += "<th>Ano</th>";
    html += "<th>PIB</th>";
    html += "</tr>";
    for(var i = 0; i < payload.data.length; i++){
        const d = new Date(payload.data[i].time);
        let year = d.getFullYear();
        html += "<tr>";
        html += `<th>${year} </th>`; 
        html += `<th>${payload.data[i].value} </th>`; 
        html += "</tr>";
    }
    html += "</table>";


    const msg = {
        to: email,
        from: 'viturianooliveira@gmail.com',
        subject: 'Relatório de Kandire 360',
        html: html,
    }

    sgMail.send(msg)
        .then(() => {
            console.log("email sent!")
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports = sendEmail;