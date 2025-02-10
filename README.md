## Getting Started

### Prerequisites

*   **Node.js**
*   **npm** or **yarn**

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:** Create a `.env.local` file in the root directory and add the following variables:

    ```
    NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

    ANTHROPIC_API_KEY=your_anthropic_api_key
    OPENAI_API_KEY=your_openai_api_key
    ```

### Running the Application

1.  **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  **Open your browser and navigate to** `http://localhost:xxxx`.

## Configuration

### Firebase

The Firebase configuration is located in `firebase/firebaseConfig.js`. Update the configuration with your Firebase project details.

### Tailwind CSS

The Tailwind CSS configuration is located in `tailwind.config.js`. Customize the configuration as needed.

### Next.js

The Next.js configuration is located in `next.config.js`. Modify the configuration to suit your needs.

## API Integrations

### OpenAI

The OpenAI integration is handled in `ai/openai.js`. Update the API key in the `.env.local` file.

### Anthropic

The Anthropic integration is handled in `ai/anthropic.js`. Update the API key in the `.env.local` file.

## License

This project is licensed under the MIT License.
