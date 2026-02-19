function displayResponse() {
    const resultsDiv = document.getElementById("response");

    const params = new URLSearchParams(window.location.search);

    const first = params.get("first");
    const last = params.get("last");
    const email = params.get("email");
    const message = params.get("message");
    const timestamp = params.get("timestamp");
   

    resultsDiv.innerHTML = `
    <p><strong>Name:</strong> ${first} ${last}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
    <p><strong>Time:</strong> ${new Date(timestamp).toLocaleString()}</p>
    `;
}
 
displayResponse();