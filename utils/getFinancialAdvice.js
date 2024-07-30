
// utils/getFinancialAdvice.js
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Google Gemini client
const gemini = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

// Define the model
const model = gemini.getGenerativeModel({
  model: "gemini-1.5-flash",
});

// Define the generation configuration
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

// Function to generate personalized financial advice
const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log(totalBudget, totalIncome, totalSpend);

  try {
    // Start a chat session with the model
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: `
              Based on the following financial data:
              - Total Budget: ${totalBudget} USD 
              - Expenses: ${totalSpend} USD 
              - Incomes: ${totalIncome} USD
              Provide detailed financial advice in 2 sentences to help the user manage their finances more effectively.
            `},
          ],
        },
      ],
    });

    // Send a message to the chat session
    const result = await chatSession.sendMessage("");
    const advice = result.response.text();

    console.log(advice);
    return advice;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export default getFinancialAdvice;

