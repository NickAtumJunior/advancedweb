import React, { useState, useEffect } from "react";

import { Input, Button, List } from "antd";

import "../index.css";

const contactDetails = {
  // Your contact details object here

  "Service 1": {
    name: "John Doe",

    email: "fullstackdevnithish@gmail.com",

    phone: "9344150665",
  },

  "Service 2": {
    name: "Jane Smith",

    email: "jane.smith@example.com",

    phone: "987-654-3210",
  },
};

export default function Chat() {
  const [messages, setMessages] = useState([
    { text: "Chatbot: Hi there! What can I help you with?", isUser: false },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const [showSuggestions, setShowSuggestions] = useState(false);

  const [clickedSuggestion, setClickedSuggestion] = useState(null);

  const [contactDetailVisible, setContactDetailVisible] = useState(false);

  const [contactDetailLinks, setContactDetailLinks] = useState([]);

  const [suggestionsVisible, setSuggestionsVisible] = useState(true);

  useEffect(() => {
    const suggestionTimer = setTimeout(() => {
      if (!contactDetailVisible) {
        setShowSuggestions(true);
      }
    }, 3000);

    return () => {
      clearTimeout(suggestionTimer);
    };
  }, [messages, contactDetailVisible]);

  const handleSendMessage = async () => {
    clearTimeoutSuggestionsTimer();

    const chatbotResponse = await simulateChatbotResponse(newMessage);

    setMessages([
      ...messages,

      { text: `You: ${newMessage}`, isUser: true },

      { text: `Chatbot: ${chatbotResponse}`, isUser: false },
    ]);

    setNewMessage("");

    setShowSuggestions(false);

    setClickedSuggestion(null);

    setContactDetailLinks([]);
  };

  const handleMainSuggestionClick = (mainSuggestion) => {
    setMessages([{ text: `Chatbot: ${mainSuggestion}`, isUser: false }]);

    setClickedSuggestion(mainSuggestion);

    setContactDetailVisible(false);

    setShowSuggestions(true);

    setContactDetailLinks([]);
  };

  const handleSubSuggestionClick = (subSuggestion) => {
    const contactDetail = contactDetails[subSuggestion];

    if (contactDetail) {
      const emailLink = (
        <a
          href={`mailto:${contactDetail.email}`}

          //   target="_blank"

          //   rel="noopener noreferrer"
        >
          Email
        </a>
      );

      const whatsappLink = (
        <a
          href={`https://wa.me/${contactDetail.whatsapp}`}
          //   target="_blank"
          //   rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      );

      const websiteLink = (
        <a
          href={contactDetail.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
        </a>
      );

      setContactDetailLinks([emailLink, whatsappLink, websiteLink]);

      setShowSuggestions(false);

      setContactDetailVisible(true);
    } else {
      setMessages([
        ...messages,

        { text: `You: ${newMessage}`, isUser: true },

        { text: `Chatbot: ${subSuggestion}`, isUser: false },
      ]);
    }

    setNewMessage("");

    setClickedSuggestion(null);
  };

  const handleContactDetailClick = (detail) => {
    console.log(`Contact Detail Clicked: ${detail}`);
  };

  const clearTimeoutSuggestionsTimer = () => {
    clearTimeout();
  };

  const simulateChatbotResponse = async (userMessage) => {
    return `You said: ${userMessage}`;
  };

  const handleShowSuggestionsClick = () => {
    setShowSuggestions(!showSuggestions);
  };

  const mainSuggestions = ["Services", "Technologies", "Case Studies"];

  const subSuggestions = {
    Services: ["Service 1", "Service 2", "Service 3"],

    Technologies: ["Tech 1", "Tech 2", "Tech 3"],

    "Case Studies": ["Case Study 1", "Case Study 2", "Case Study 3"],
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages-container">
        <div className="chatbot-messages">
          <List
            dataSource={messages}
            renderItem={(message, index) => (
              <List.Item
                key={index}
                className={message.isUser ? "user-message" : "chatbot-message"}
              >
                {message.text}
              </List.Item>
            )}
          />
        </div>
      </div>

      {showSuggestions && suggestionsVisible && (
        <div className="suggestion-box">
          <p>What would you like to do?</p>

          <ul>
            {mainSuggestions.map((mainSuggestion, index) => (
              <li
                key={index}
                className={clickedSuggestion === mainSuggestion ? "active" : ""}
                onClick={() => handleMainSuggestionClick(mainSuggestion)}
              >
                {mainSuggestion}
              </li>
            ))}
          </ul>
        </div>
      )}

      {clickedSuggestion !== null && subSuggestions[clickedSuggestion] && (
        <div className="sub-suggestion-box">
          <ul>
            {subSuggestions[clickedSuggestion].map(
              (subSuggestion, subIndex) => (
                <li
                  key={subIndex}
                  onClick={() => handleSubSuggestionClick(subSuggestion)}
                >
                  {subSuggestion}
                </li>
              )
            )}
          </ul>
        </div>
      )}

      {/* Display contact detail links */}

      <div className="contact-detail-links">
        {contactDetailLinks.map((link, index) => (
          <div key={index} className="contact-detail-link">
            {link}
          </div>
        ))}
      </div>

      {/* Show/Hide suggestions button */}

      {contactDetailVisible && (
        <div className="show-suggestions-button">
          <Button type="default" onClick={handleShowSuggestionsClick}>
            Show Suggestions
          </Button>
        </div>
      )}

      <div className="chatbot-input">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onPressEnter={handleSendMessage}
          placeholder="Type your message..."
        />

        <Button type="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </div>
    </div>
  );
}
