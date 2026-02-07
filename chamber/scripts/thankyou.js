function displayResults() {
    const resultsDiv = document.getElementById("results");

    const params = new URLSearchParams(window.location.search);

    const first = params.get("first");
    const last = params.get("last");
    const email = params.get("email");
    const phone = params.get("phone");
    const business = params.get("business");
    const membership = params.get("membership");
    const description = params.get("description") || "NO description provided";
    const timestamp = params.get("timestamp");


    resultsDiv.innerHTML = `
    <p><strong>Name:</strong> ${params.get("first")} ${params.get("last")}</p>
    <p><strong>Email:</strong> ${params.get("email")}</p>
    <p><strong>Phone:</strong> ${params.get("phone")}</p>
    <p><strong>Business:</strong> ${params.get("business")}</p>
    <p><strong>Membership Level:</strong> ${params.get("membership")}</p>
    <p><strong>Description:</stron> ${params.get("descriptipn")}</p>
    <p><strong>Submitted:</strong> ${params.get("timestamp")}</p>
    `;
}
 
displayResults();