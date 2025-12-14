import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { MOCK_PRODUCTS } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Helper to format product data for the AI context
const productContext = MOCK_PRODUCTS.map(p => 
  `ID: ${p.id}, Nazwa: ${p.name}, Cena: ${p.price} PLN, Kategoria: ${p.category}, Opis: ${p.description}`
).join('\n');

const SYSTEM_INSTRUCTION = `
Jesteś wirtualnym stylistą i asystentem sprzedaży w sklepie "ModaStyle".
Twoim celem jest pomaganie klientom w doborze ubrań, sugerowanie stylizacji oraz odpowiadanie na pytania o produkty.

Oto lista dostępnych produktów w naszym sklepie:
${productContext}

Zasady:
1. Bądź uprzejmy, pomocny i profesjonalny.
2. Jeśli polecasz produkt, podaj jego nazwę i cenę.
3. Odpowiadaj krótko i na temat (maksymalnie 3-4 zdania, chyba że klient prosi o szczegółową poradę).
4. Jeśli klient pyta o coś spoza asortymentu modowego, grzecznie przekieruj rozmowę na temat mody.
5. Używaj języka polskiego.
`;

let chatSession: Chat | null = null;

export const getChatResponse = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "Przepraszam, klucz API nie jest skonfigurowany. Skontaktuj się z administratorem.";
  }

  try {
    if (!chatSession) {
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }

    const result: GenerateContentResponse = await chatSession.sendMessage({ message });
    return result.text || "Przepraszam, nie zrozumiałem. Czy możesz powtórzyć?";
  } catch (error) {
    console.error("Błąd Gemini API:", error);
    return "Wystąpił problem z połączeniem. Spróbuj ponownie później.";
  }
};