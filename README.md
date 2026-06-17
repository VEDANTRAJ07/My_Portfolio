### 🚦 Road Sense Solapur: AI-Powered Civic Platform
**[Live Demo](https://road-sense-solapur.onrender.com) | [GitHub Repository](#)**

A crowdsourced smart-city web application designed to help municipalities track and repair road damage. Citizens upload photos of potholes or degraded surfaces, and the system uses Google Gemini Vision AI to automatically classify the damage and assign a severity score. 

**Key Features:**
* **AI Damage Detection:** Integrated Google Gemini Vision API for zero-shot image classification and severity scoring (1-10).
* **Live Heatmaps:** Implemented Leaflet.js to render real-time, color-coded spatial data for municipal authorities.
* **Smart Spam Prevention:** Utilized the Haversine formula in Python to detect and group duplicate reports within a 15-meter radius.
* **Privacy First:** Engineered a local pre-processing pipeline using OpenCV to blur human faces and license plates before cloud AI analysis.
* **Civic Gamification:** Built a secure authentication system with a gamified leaderboard to incentivize community volunteers.

**Tech Stack:** `Python` `Flask` `PostgreSQL` `Google Gemini AI` `OpenCV` `Leaflet.js` `JavaScript (ES6)` `HTML5/CSS3`
