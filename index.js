async function updateVisitorCount() {
    const apiUrl = "https://ol4owshoewi3n2ctsw47welr2a0fyqat.lambda-url.ap-southeast-2.on.aws/"; 
    // API Gateway URL to call it

    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        document.getElementById("visitor-count").textContent = data.count;

    } catch (error) {
        console.error("Error fetching visitor count:", error);
        document.getElementById("visitor-count").textContent = "Error";
    }
}

// Run the function once the page loads
document.addEventListener("DOMContentLoaded", updateVisitorCount);