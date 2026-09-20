

// Database of Quest Details
const questData = [
    {
        title: "Quest 1: The AI Web App",
        status: "COMPLETED",
        description: "Built a web application powered by AI APIs to assist users with automated tasks in real-time.",
        features: ["React & Node.js", "OpenAI API Integration", "Real-time responses", "Custom UI"],
        url: "https://github.com"
    },
    {
        title: "Quest 2: Interactive Portfolio",
        status: "COMPLETED",
        description: "Designed an immersive, game-themed character selection dashboard using HTML, CSS, and vanilla JS.",
        features: ["Responsive Grid System", "Dynamic JS Quest rendering", "Custom CSS Glow FX"],
        url: "https://vercel.com"
    }
];

// Function to render quests inside the page
function renderQuests() {
    const container = document.querySelector("#quest-container");
    if (!container) return;

    container.innerHTML = ""; // Clear static cards

    questData.forEach((quest, index) => {
        const questCard = document.createElement("div");
        questCard.className = "quest-card";

        questCard.innerHTML = `
            <div class="quest-header">
                <span class="quest-title">${quest.title}</span>
                <span class="quest-status">${quest.status}</span>
            </div>
            <p class="quest-desc">${quest.description}</p>
            <a href="#" class="quest-link" data-index="${index}">View Quest Artifact →</a>
        `;

        container.appendChild(questCard);
    });

    attachModalEvents();
}

// Function to control the pop-up modal
function attachModalEvents() {
    const modal = document.querySelector("#quest-modal");
    const closeModal = document.querySelector("#close-modal");
    const links = document.querySelectorAll(".quest-link");

    // Click on 'View Quest Artifact'
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const index = link.getAttribute("data-index");
            const data = questData[index];

            if (data) {
                document.querySelector("#modal-title").innerText = data.title;
                document.querySelector("#modal-status").innerText = data.status;
                document.querySelector("#modal-desc").innerText = data.description;
                document.querySelector("#modal-link").href = data.url;

                // Render features list
                const featuresList = document.querySelector("#modal-features");
                featuresList.innerHTML = data.features.map(f => `<li>${f}</li>`).join("");

                modal.style.display = "flex";
            }
        });
    });

    // Close button click
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the box
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Action Buttons
document.addEventListener("DOMContentLoaded", () => {
    renderQuests();

    const hireBtn = document.querySelector(".btn-primary");
    const sendMsgBtn = document.querySelector(".btn-secondary");

    if (hireBtn) {
        hireBtn.addEventListener("click", (e) => {
            e.preventDefault();
            alert("⚔️ Quest Accepted! Character requested for hire.");
        });
    }

    if (sendMsgBtn) {
        sendMsgBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "mailto:your-email@example.com?subject=Character Contact Request";
        });
    }
});