# CodeAssist: A Code Summarizer Extension
Code Assist is a browser extension that allows you to summarize selected code snippets using the Gemini API. Simply select a piece of code on any webpage, and the extension will provide a concise summary and output explanation.

Features
Code Summarization: Get a quick summary of any selected code snippet.

Output Explanation: Understand the general output and functionality of the code.

Easy to Use: Just select the code and let the extension do the rest.

Installation Instructions
Step 1: Download the Extension Files
Clone or download this repository to your local machine.

Click the green "Code" button on this GitHub page and select "Download ZIP".

Extract the ZIP file to a folder on your computer.

Step 2: Load the Extension in Opera
Open the Opera browser.

Go to the extensions page:

Type opera://extensions in the address bar and press Enter.

Enable Developer Mode:

Toggle the switch in the top-right corner to enable Developer Mode.

Load the extension:

Click the Load unpacked button.

Navigate to the folder where you extracted the extension files and select it.

The Code Assist extension should now appear in your list of installed extensions.

How to Use
Select Code:

Navigate to any webpage with code snippets.

Highlight the code you want to summarize by clicking and dragging your mouse over it.

Get Summary:

After selecting the code, the extension will automatically process it and display a summary in the popup.

View Results:

Click the Code Assist extension icon in the Opera toolbar to open the popup and view the summary.

Notes
API Key: Replace REPLACE_WITH_YOUR_OWN_GEMINI_KEY in content.js with your own Gemini API key. You can get a free API key from Google's Gemini API.

Privacy: The extension only sends the selected code to the Gemini API for processing. No other data is collected or shared.

Troubleshooting
Extension Not Working:

Ensure that the API key is correctly entered in content.js.

Make sure the extension is enabled in opera://extensions.

Reload the extension by clicking the Reload button in opera://extensions.

No Summary Generated:

Ensure that the selected text contains code (e.g., brackets, semicolons, etc.).

Check the browser console (Ctrl + Shift + I) for any errors.

Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Any improvements or suggestions are welcome!
