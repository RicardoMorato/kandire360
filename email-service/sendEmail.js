const sgMail = require('@sendgrid/mail');

sgMail.setApiKey();

function sendEmail(email, payload) {

    let html;

    html += `<h1>${payload.name}</h1>`;
    html += "<table>";
    html += "<tr>";
    html += "<th>Ano</th>";
    html += "<th>PIB</th>";
    html += "</tr>";
    for(var i = 0; i< payload.data.lenth; i++){
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
        from: 'kandire360@gmail.com',
        subject: 'Relatório de Kandire 360',
        text: 'asdasdwq',
        html,
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