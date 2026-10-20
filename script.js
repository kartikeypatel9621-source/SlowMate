
"use strict";

/*
 * SideKick AI
 * Frontend interactions and open-weight model integration.
 *
 * DEMO MODE:
 *   Generates editable example drafts using local JavaScript.
 *
 * REAL AI MODE:
 *   Set AI_API_URL to your own backend endpoint.
 *   Your backend should accept:
 *   { tool, business, details, tone }
 *
 *   And return:
 *   { text: "Generated content..." }
 *
 * Never place private API keys in this frontend file.
 */

const CONFIG = {
    // Example local backend endpoint.
    // Change this to match your backend.
    AI_API_URL: "",
    REQUEST_TIMEOUT_MS: 60000
};

const form = document.getElementById("generatorForm");
const toolType = document.getElementById("toolType");
const businessType = document.getElementById("businessType");
const details = document.getElementById("details");
const tone = document.getElementById("tone");

const generateButton = document.getElementById("generateButton");
const resultContainer = document.getElementById("resultContainer");
const resultText = document.getElementById("resultText");
const statusMessage = document.getElementById("statusMessage");
const modelStatus = document.getElementById("modelStatus");

const copyButton = document.getElementById("copyButton");
const downloadButton = document.getElementById("downloadButton");

let latestOutput = "";

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


const toolNames = {
    product: "Product description",
    social: "Social media caption",
    email: "Business email",
    marketing: "Marketing ideas"
};


/*
 * Feature-card selection.
 * Clicking a card selects the relevant tool and opens the workspace.
 */
document.querySelectorAll(".feature-card").forEach((card) => {
    card.addEventListener("click", () => {
        const selectedTool = card.dataset.tool;

        if (toolNames[selectedTool]) {
            toolType.value = selectedTool;
        }

        document.getElementById("workspace").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        setTimeout(() => businessType.focus(), 450);
    });
});


/*
 * Demo content generator.
 * This is a template-based fallback, not a real language model.
 */
function generateDemoContent({ tool, business, details, tone }) {
    const brand = business.trim();
    const idea = details.trim();

    switch (tool) {
        case "product":
            return [
                `${brand} | Product Description`,
                "",
                `Discover something special from ${brand}.`,
                "",
                `${idea}`,
                "",
                `Designed with your needs in mind, this offering combines`,
                `practical value with a thoughtful customer experience.`,
                "",
                `Why consider it?`,
                `• A clear solution for your intended needs`,
                `• A simple, customer-friendly experience`,
                `• An option worth exploring for the right audience`,
                "",
                `Our tone: ${tone}.`,
                "",
                "Next step: Add verified product specifications, pricing,",
                "shipping information, and a genuine call to action."
            ].join("\n");

        case "social":
            return [
                `✨ Something worth sharing from ${brand}!`,
                "",
                `${idea}`,
                "",
                "We're building something with care, and we'd love",
                "for you to be part of the journey.",
                "",
                "💬 What would you like to see next?",
                "",
                `#${brand.replace(/[^a-zA-Z0-9]/g, "")} #SmallBusiness #MadeWithCare`,
                "",
                `Suggested tone: ${tone}.`,
                "",
                "Tip: Add a real product photo and remove any claim",
                "that you cannot verify before publishing."
            ].join("\n");

        case "email":
            return [
                `Subject: A quick note from ${brand}`,
                "",
                "Hello,",
                "",
                `${idea}`,
                "",
                "I wanted to reach out and share this with you.",
                "Please let me know if you have any questions or",
                "if there is anything else I can provide.",
                "",
                "Thank you for your time.",
                "",
                `Best regards,`,
                brand,
                "",
                `Tone: ${tone}.`,
                "",
                "Before sending, add the recipient's name and verify",
                "all details relevant to your message."
            ].join("\n");

        case "marketing":
            return [
                `${brand} | Marketing Ideas`,
                "",
                `Your starting point: ${idea}`,
                "",
                "IDEA 1 — A simple launch offer",
                "Create a limited introductory offer with clear terms.",
                "",
                "IDEA 2 — Show the process",
                "Publish a short behind-the-scenes video explaining",
                "how your product or service is made.",
                "",
                "IDEA 3 — Customer questions",
                "Turn frequently asked questions into helpful posts.",
                "",
                "IDEA 4 — A useful demonstration",
                "Show a real example of the problem you solve.",
                "",
                "IDEA 5 — Customer feedback",
                "Ask early users what they liked and what needs improving.",
                "",
                `Campaign tone: ${tone}.`,
                "",
                "Start with one idea, measure genuine customer responses,",
                "and invest more only when you see evidence of demand."
            ].join("\n");

        default:
            return "Please select a content type and try again.";
    }
}


/*
 * Real AI integration.
 * The browser calls YOUR backend, not a private model API directly.
 */
async function generateWithAI(payload) {
    const controller = new AbortController();

    const timeout = setTimeout(() => {
        controller.abort();
    }, CONFIG.REQUEST_TIMEOUT_MS);

    try {
        const response = await fetch(CONFIG.AI_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
            signal: controller.signal
        });

        if (!response.ok) {
            throw new Error(
                `AI service returned HTTP ${response.status}.`
            );
        }

        const data = await response.json();

        if (!data || typeof data.text !== "string" || !data.text.trim()) {
            throw new Error("The AI service returned an invalid response.");
        }

        return data.text.trim();
    } finally {
        clearTimeout(timeout);
    }
}


function setLoading(isLoading) {
    generateButton.disabled = isLoading;

    generateButton.innerHTML = isLoading
        ? "<span>✳</span> Creating your draft..."
        : "<span>✳</span> Generate with AI <span>↗</span>";
}


function showResult(content) {
    latestOutput = content;

    // Use textContent to prevent generated HTML from executing.
    resultText.textContent = content;
    resultContainer.classList.remove("hidden");

    resultContainer.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}


form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const business = businessType.value.trim();
    const description = details.value.trim();

    if (!business || !description) {
        statusMessage.textContent =
            "Please enter your business name and describe what you need.";
        return;
    }

    if (business.length > 200 || description.length > 5000) {
        statusMessage.textContent =
            "Please keep the business name under 200 characters and your description under 5,000 characters.";
        return;
    }

    const payload = {
        tool: toolType.value,
        business,
        details: description,
        tone: tone.value
    };

    setLoading(true);
    statusMessage.textContent = "";
    resultContainer.classList.add("hidden");

    try {
        let output;

        if (CONFIG.AI_API_URL.trim()) {
            modelStatus.textContent = "OPEN AI CONNECTED";

            output = await generateWithAI(payload);

            statusMessage.textContent =
                "Draft generated by your connected AI service. Review it before use.";
        } else {
            modelStatus.textContent = "DEMO MODE";

            // Short delay for a natural interface response.
            await new Promise((resolve) => setTimeout(resolve, 500));

            output = generateDemoContent(payload);

            statusMessage.textContent =
                "Demo draft created using JavaScript templates. Connect an open-weight model for real AI generation.";
        }

        showResult(output);
    } catch (error) {
        console.error("Generation error:", error);

        if (error.name === "AbortError") {
            statusMessage.textContent =
                "The request took too long. Check your AI server and try again.";
        } else {
            statusMessage.textContent =
                "Could not connect to the AI service. Check your backend, endpoint URL, and server logs.";
        }
    } finally {
        setLoading(false);
    }
});


/*
 * Copy generated content.
 */
copyButton.addEventListener("click", async () => {
    if (!latestOutput) {
        statusMessage.textContent = "Generate a draft first.";
        return;
    }

    try {
        await navigator.clipboard.writeText(latestOutput);
        statusMessage.textContent = "Copied! Your draft is ready to paste.";
    } catch (error) {
        // Fallback for browsers without Clipboard API support.
        const temporaryArea = document.createElement("textarea");

        temporaryArea.value = latestOutput;
        temporaryArea.style.position = "fixed";
        temporaryArea.style.opacity = "0";

        document.body.appendChild(temporaryArea);
        temporaryArea.select();

        const copied = document.execCommand("copy");
        temporaryArea.remove();

        statusMessage.textContent = copied
            ? "Copied! Your draft is ready to paste."
            : "Copy failed. Please select and copy the text manually.";
    }
});


/*
 * Download generated content as a plain-text file.
 */
downloadButton.addEventListener("click", () => {
    if (!latestOutput) {
        statusMessage.textContent = "Generate a draft first.";
        return;
    }

    const blob = new Blob([latestOutput], {
        type: "text/plain;charset=utf-8"
    });

    const downloadUrl = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = downloadUrl;
    anchor.download = `sidekick-${toolType.value}-draft.txt`;

    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    URL.revokeObjectURL(downloadUrl);

    statusMessage.textContent = "Your text file has been saved.";
});


/*
 * Allow smooth navigation when JavaScript is enabled.
 */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
