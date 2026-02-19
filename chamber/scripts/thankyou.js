function displayResults() {
    const resultsDiv = document.getElementById("results");

    const params = new URLSearchParams(window.location.search);

    const first = params.get("first");
    const last = params.get("last");
    const orgtitle = params.get("orgtitle");
    const email = params.get("email");
    const phone = params.get("phone");
    const business = params.get("business");
    const membership = params.get("membership");
    const description = params.get("description") || "NO description provided";
    const timestamp = params.get("timestamp");


    resultsDiv.innerHTML = `
    <p><strong>Name:</strong> ${first} ${last}</p>
    <p><strong>Organization Title:</strong> ${orgtitle}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Business:</strong> ${business}</p>
    <p><strong>Membership Level:</strong> ${membership}</p>
    <p><strong>Description:</strong> ${description}</p>
    <p><strong>Submitted:</strong> ${timestamp}</p>
    `;
}
 
displayResults();