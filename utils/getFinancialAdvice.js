// utils/getFinancialAdvice.js
import { GoogleGenerativeAI } from '@google/generative-ai';
// Initialize the Google Gemini client
const gemini = new GoogleGenerativeAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
});

// Function to generate personalized financial advice
const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log(totalBudget, totalIncome, totalSpend);

  try {
    const userPrompt = `
      Based on the following financial data:
      - Total Budget: ${totalBudget} USD 
      - Expenses: ${totalSpend} USD 
      - Incomes: ${totalIncome} USD
      Provide detailed financial advice in 2 sentences to help the user manage their finances more effectively.
    `;

    // Send the prompt to the Google Gemini API
    const response = await gemini.generate({
      model: "gemini-4", // Ensure to use the correct model identifier
      prompt: userPrompt,
      maxTokens: 100, // Adjust as needed
    });

    // Process and return the response
    const advice = response.data?.choices[0]?.text || "No advice received.";

    console.log(advice);
    return advice;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export default getFinancialAdvice;
