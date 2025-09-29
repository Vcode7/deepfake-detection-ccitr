---

# Deepfake Detection Platform

A comprehensive AI-powered deepfake detection platform with user authentication, MongoDB storage, and real-time analysis capabilities.

---

## Features

* *User Authentication*: Secure login and registration system with JWT tokens.
* *Image Detection*: AI-powered deepfake detection for images.
* *Video Detection*: Advanced video analysis with temporal consistency checks.
* *Audio Analysis*: Voice similarity comparison and deepfake detection.
* *History Tracking*: Complete detection history stored in MongoDB.
* *Modern UI*: Responsive interface with smooth transitions.
* *Secure Storage*: Data securely stored in MongoDB with user isolation.

---

## Tech Stack

### Backend

* *FastAPI*: High-performance Python web framework.
* *MongoDB*: NoSQL database for flexible data storage.
* *Motor*: Async MongoDB driver for FastAPI.
* *PyJWT*: JWT token authentication.
* *Passlib*: Password hashing and verification.
* *PyTorch*: Deep learning models for detection.

### Frontend

* *Next.js 14*: React framework with App Router.
* *TypeScript*: Type-safe development.
* *Tailwind CSS*: Utility-first CSS framework.
* *Framer Motion*: Animations and transitions.
* *Lucide React*: Icons.
* *React Hot Toast*: Toast notifications.

---

## Prerequisites

* Python 3.8 or higher
* Node.js 18 or higher
* MongoDB (local or cloud instance)
* Git

---

## Installation

### 1. Clone the Repository

bash
git clone https://github.com/Vcode7/deepfake-detection-ccitr.git
cd deepfake-detection-ccitr/app


---

### 2. Backend Setup

bash
cd backend
# Install Python dependencies
pip install -r requirements.txt

# Set up MongoDB database
python setup.py

# Optional: Set environment variables
export MONGODB_URL="mongodb://localhost:27017"
export SECRET_KEY="your-secret-key"

# Start the backend server
python main.py


Backend will be available at http://localhost:8000.

---

### 3. Frontend Setup

bash
cd frontend
# Install Node.js dependencies
npm install

# Start the development server
npm run dev


Frontend will be available at http://localhost:3000.

---

## Environment Variables

Create a .env file in the backend directory:

env
# MongoDB Configuration
MONGODB_URL=mongodb://localhost:27017

# JWT Configuration
SECRET_KEY=your-super-secret-key

# Optional Production settings
DEBUG=false
HOST=0.0.0.0
PORT=8000


---

## Database Setup

The application uses MongoDB with the following collections:

* users: User accounts and authentication data.
* detection_history: Media detection results.
* audio_references: Audio comparison results.

Run the setup script to initialize the database:

bash
cd backend
python setup.py


---

## API Endpoints

### Authentication

* POST /auth/register – User registration.
* POST /auth/login – User login.
* GET /auth/me – Get current user info.

### Detection

* POST /detect/image – Image deepfake detection.
* POST /detect/video – Video deepfake detection.
* POST /detect/video-audio – Video with audio analysis.
* POST /detect/audio/reference – Audio similarity comparison.

### History

* GET /history – Get user's detection history.

---

## Usage

1. *Registration/Login*

   * Visit http://localhost:3000/auth
   * Create a new account or sign in with existing credentials

2. *Media Detection*

   * Navigate to the scan page
   * Upload images or videos for analysis
   * View real-time detection results with confidence scores

3. *Audio Analysis*

   * Use the audio tab for voice similarity comparison
   * Upload reference and test audio files
   * Get similarity scores and match verdicts

4. *History*

   * View your complete detection history
   * Filter by detection type and date

---

## Project Structure

text
app/
├── backend/
│   ├── main.py               # FastAPI application
│   ├── database.py           # MongoDB models and connection
│   ├── auth.py               # Authentication logic
│   ├── setup.py              # Database setup script
│   ├── requirements.txt      # Python dependencies
│   ├── models/               # AI models
│   ├── checkpoints/          # Model weights
│   └── uploads/              # File uploads
├── frontend/
│   ├── src/
│   │   ├── app/              # Next.js App Router
│   │   ├── components/       # React components
│   │   └── styles/           # CSS styles
│   ├── package.json          # Node.js dependencies
│   └── next.config.ts        # Next.js configuration
└── README.md


---

## Security Features

* JWT Authentication – Secure token-based authentication.
* Password Hashing – Bcrypt password encryption.
* User Isolation – Data is isolated per user.
* Input Validation – Comprehensive input sanitization.
* CORS Protection – Cross-origin request protection.

---

## Performance Optimizations

* Async Operations – Non-blocking database operations.
* Indexed Queries – Optimized MongoDB indexes.
* File Streaming – Efficient file upload handling.
* Caching – Client-side caching for better UX.

---

## Troubleshooting

### MongoDB Connection Issues

1. Ensure MongoDB is running: mongod
2. Check connection string in environment variables
3. Verify network access and firewall settings

### Authentication Issues

1. Check JWT secret key configuration
2. Verify token expiration settings
3. Clear browser local storage if needed

### File Upload Issues

1. Check file size limits (50MB max recommended)
2. Verify supported file formats
3. Ensure proper file permissions

### Model Loading Issues

1. Verify model checkpoint files exist
2. Check PyTorch installation
3. Ensure sufficient GPU memory (if using CUDA)

---

## Development

### Backend Development

bash
cd backend
pip install -r requirements.txt
python main.py


### Frontend Development

bash
cd frontend
npm install
npm run dev


### Database Development

bash
cd backend
python setup.py


---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Support

* Create an issue in the repository
* Check the troubleshooting section
* Review the API documentation at http://localhost:8000/docs

---

## Acknowledgments

* FastAPI for the web framework
* MongoDB for database solution
* Next.js for frontend framework
* Open-source community for various dependencies

---

