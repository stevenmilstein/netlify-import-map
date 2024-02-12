import _ from "lodash"; // works

// see netlify_import_map.json & netlify.toml
// Uncomment the following import to see
// TypeError: Cannot read properties of undefined (reading 'Promise')
//import { OpenAI } from "@langchain/openai";

import { OpenAI } from "https://esm.sh/@langchain/openai"; // works
import { ChatPromptTemplate } from "npm:@langchain/core/prompts"; // works

export default async (request, context) => {
  try {
    let results = {
      lodash: _ ? true : false,
      OpenAI: OpenAI ? true : false,
      ChatPromptTemplate: ChatPromptTemplate ? true : false,
    };
    console.log({ results });

    return new Response(JSON.stringify(results, null, 2), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.log({ error });
    throw error;
  }
};
