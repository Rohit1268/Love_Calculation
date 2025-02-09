function CalculateLove() {
    const name1 = document.getElementById("name1").value.trim().toLowerCase();
    const name2 = document.getElementById("name2").value.trim().toLowerCase();
    const resulttext = document.getElementById("resulttext");
    const resultDiv = document.getElementById("result");
    

    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
        return;
    }

    // Create a fixed love percentage using a hash function
    const lovePercentage = generateLovePercentage(name1, name2);

    let message = `${name1.charAt(0).toUpperCase() + name1.slice(1)} and ${name2.charAt(0).toUpperCase() + name2.slice(1)}'s Love Percentage: ${lovePercentage}%`;

    if (lovePercentage < 30) {
        message += "<br> ❌ Not a great match, keep looking!";
    } else if (lovePercentage >= 30 && lovePercentage < 70) {
        message += "<br> 🤔 There is potential, give it a try!";
    } else {
        message += "<br> 💖 Great match! Love is in the air!";
    }
    resultDiv.style.display = "block";
    resulttext.innerHTML = message;
}

// Hash function to generate a fixed percentage
function generateLovePercentage(name1, name2) {
    let combinedString = name1 + name2; // Combine names
    let hash = 0;
    
    for (let i = 0; i < combinedString.length; i++) {
        hash += combinedString.charCodeAt(i); // Sum of character codes
    }

    return (hash % 101); // Convert hash into a percentage (0-100)
}
