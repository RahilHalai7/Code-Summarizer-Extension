//By Rahil Halai.

console.log("content.js is running!");
console.log("CodeAssist is running!");

const apiKey = "REPLACE_WITH_YOUR_OWN_GEMINI_KEY"; // Replace this with your actual Gemini API key, there are free api keys available as of 23rd-March-25'
//R7.
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

//Call Gemini API to summarize code.
async function summarizeCode(code) {
  if (!apiKey) {
    console.error("API key missing! Please ensure it's securely provided.");
    return "Error: Missing API key.";
  }

  const prompt1 = "Please, Detect what language this code is in and reply in a single sentence:";
  const prompt2 = "Detect if this code , if YES: (refrain from answering whether this is code or not), start with the title --Summary-- and provide a concise three-sentence summary and then mention --Output-- and the general calculation and output of the following code in formatted english where it can presented to a user with humanlike but formal language and not random symbols, also don't use ```.:";
  //const prompt = "Answer this: ";
  //const prompt = "";
  
  const input = prompt1 + "\n" + prompt2 + code;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: input,
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();
    console.log("Full API response data:", JSON.stringify(data));

    // Check for errors in API response
    if (data.error) {
      console.error("API error:", data.error);
      return "Error from API: " + data.error.message;
    }

    // Extract summary from the response
    if (data.candidates && data.candidates.length > 0) {
      return data.candidates[0].content.parts[0].text;
    }

    return "No meaningful summary received from API.";

  } 
  catch (error) {
    console.error("Error summarizing code:", error);
    return "Error occurred during summarization.";
  }
}

//Clean and validate the summary content.
function cleanSummary(summary) {
  return summary && summary.trim().length > 0
    ? summary.trim()
    : "Failed to generate a meaningful summary.";
}


//Handle text selection and API calls.
document.addEventListener("mouseup", async () => {
  const selectedText = window.getSelection().toString().trim();

  if (!selectedText) {
    console.log("No text selected.");
    return;
  }

  console.log("Selected text:", selectedText);

  // Check if the selection appears to be code
  const codeIndicators = /[{}<>();]/;
  if (!codeIndicators.test(selectedText)) {
    console.log("Selected text does not look like code.");
    return;
  }

  console.log("Code detected. Preparing to summarize...");

  // Notify extension popup
  const { success } = await chrome.runtime.sendMessage({ action: "openPopup" });
  if (!success) {
    console.error("Failed to open popup.");
    return;
  }

  await chrome.runtime.sendMessage({ action: "showLoading" });

  const summary = await summarizeCode(selectedText);
  const cleanOutput = cleanSummary(summary);

  console.log("Summary received:", cleanOutput);

  await chrome.runtime.sendMessage({
    action: "displaySummary",
    summary: cleanOutput,
  });
});