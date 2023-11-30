const express = require('express');
const generatePrompt = require('./generatePrompt');

const apiKey = process.env.OPENAI_API_KEY;
const initializer = `Send me a message giving me an overview of my k8s cluster structure. Start with "Your kubernetes cluster consists of ..."`;

console.log('apiKey:', apiKey);

const AIController = {};

AIController.sendMessage = async (req, res, next) => {
  const { question, convoHistory, clusterData } = req.body;
  if (!convoHistory.length) {
    //Generate custom prompt
    const customPrompt = generatePrompt(clusterData);

    console.log('prompt:', customPrompt);

    //Push prompt and inital message to program chatbot
    convoHistory.push({ role: 'system', content: customPrompt });
    convoHistory.push({ role: 'user', content: initializer });
  } else {
    convoHistory.push({ role: 'user', content: question });
  }

  console.log('convohistory:', convoHistory);
  //API call
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`, // add process api key stuff
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: convoHistory,
      }),
    });
    //Receive and process response
    const responseData = await response.json();
    console.log('repsonseData:', responseData);
    const sanitizedResponse = responseData.choices[0].message.content.trim();

    convoHistory.push({ role: 'assistant', content: sanitizedResponse });
    console.log('sanitizedResponse:', sanitizedResponse);
    res.json({
      success: true,
      message: 'Chatbot initialized',
      convoHistory: convoHistory,
      sanitizedResponse: sanitizedResponse,
    });
  } catch (error) {
    console.error('API call failed:', error);
    res.status(500).json({
      success: false,
      message: 'Error while initializing chatbot',
      error: error.message,
    });
    next(error);
  }
};

module.exports = AIController;
