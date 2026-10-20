# ✳ SideKick AI

### Your next big idea. Less busywork.

**SideKick AI** is an AI-powered business assistant designed for freelancers, creators, and small business owners. It helps users create product descriptions, social media captions, professional emails, and marketing ideas through a simple, user-friendly interface.

Built around the principles of open innovation, SideKick AI is designed to support open-weight language models and local inference, giving developers more control over their AI infrastructure.

> **Project theme:** Side Hustle — Build something with open-source AI that someone would actually pay for.

---

## 🚀 The Problem

Freelancers and small business owners spend valuable time writing product listings, responding to clients, creating social media posts, and planning marketing campaigns.

Professional AI writing tools can also introduce recurring subscription costs, usage limits, and dependence on external services.

SideKick AI aims to make these everyday tasks simpler through an accessible AI-powered workspace that can be connected to open-weight models.

## 💡 Our Solution

SideKick AI brings essential business writing tools into one workspace.

Users describe their business, provide a few details, select a writing style, and generate a draft they can edit and use.

The long-term goal is to make AI-powered business assistance more affordable, adaptable, and privacy-conscious.

## ✨ Features

### 🛍️ 1. Product Description Generator

* Create product descriptions for online stores.
* Turn basic product information into structured marketing copy.
* Help sellers communicate product benefits clearly.

### 📱 2. Social Media Content

* Generate social media captions.
* Brainstorm content ideas for small businesses.
* Create drafts with different writing tones.

### ✉️ 3. Business Email Writer

* Draft professional emails.
* Prepare client follow-ups and business replies.
* Adjust the writing style to suit the situation.

### 📈 4. Marketing Idea Generator

* Brainstorm promotional campaigns.
* Discover content ideas for a target audience.
* Explore practical marketing experiments for small businesses.

### ⚙️ 5. Customizable AI Workspace

* Select a content-generation tool.
* Enter business details and requirements.
* Choose a preferred writing tone.
* Copy generated drafts or save them as text files.

### 🔓 6. Open-Source AI Vision

* Designed for integration with open-weight language models.
* Supports a backend-based AI integration approach.
* Can be extended to support local inference.
* Provides a foundation for customizable business-specific AI workflows.

---

## 🧠 Why Open-Source AI?

Open innovation matters because small businesses should have more choices in how they use AI.

SideKick AI is designed to support an approach where developers can choose suitable open-weight models, customize prompts, and control where inference takes place.

### 🔐 Privacy and Data Control

When configured with a local model and a local backend, business information can be processed on the user's own machine instead of being sent to an external AI service.

Local processing still requires careful handling of browser data, application logs, backups, and other storage.

### 💰 More Control Over Costs

A locally hosted model can reduce dependence on per-request API pricing.

However, hardware, electricity, hosting, maintenance, and development also have costs. Actual savings depend on usage and deployment.

### 🔄 Model Flexibility

A compatible backend makes it possible to experiment with different open-weight models without redesigning the entire frontend.

Developers can compare model quality, speed, hardware requirements, and licensing conditions.

### 🛠️ Customization

Open-weight models and open-source tools provide opportunities to customize prompts, build specialized workflows, and adapt the assistant to particular industries.

**Our vision:** Make practical AI assistance more accessible to people building businesses with limited time and resources.

---

## 🧰 Technology Stack

| Technology      | Purpose                                    |
| --------------- | ------------------------------------------ |
| HTML5           | Website structure                          |
| CSS3            | Responsive styling and interface design    |
| JavaScript      | Frontend interactions and content workflow |
| Python          | Planned AI backend                         |
| FastAPI         | Planned backend API                        |
| Ollama          | Optional local model runtime               |
| Open-weight LLM | Actual AI text generation                  |

The current frontend includes a JavaScript template-based demonstration mode. Real language-model generation requires a working backend and a compatible model integration.

---

## 🏗️ Project Structure

```text
SideKick-AI/
│
├── index.html       # Main website
├── style.css        # Responsive interface and styling
├── script.js        # Frontend logic and AI integration
├── README.md        # Project documentation
│
└── backend/         # Planned AI backend
    ├── app/
    │   └── main.py
    └── requirements.txt
```

The backend directory represents the intended structure and must be created when backend development begins.

---

## ⚡ Getting Started

### Prerequisites

* A modern web browser.
* Visual Studio Code or another code editor.
* The Live Server extension for VS Code, or another local static web server.

### 1. Clone the Repository

Replace the placeholder with your actual GitHub repository URL.

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Open the Project

```bash
cd SideKick-AI
```

Open the folder in Visual Studio Code.

### 3. Start the Frontend

Open `index.html` using Live Server.

The website should open in your browser.

### 4. Try the Workspace

1. Choose a content type.
2. Enter your business name.
3. Describe the product, email, or marketing task.
4. Select a writing tone.
5. Click **Generate with AI**.
6. Copy the result or save it as a `.txt` file.

**Current limitation:** Without a configured AI backend, the application generates example drafts using JavaScript templates. These drafts are not produced by a language model.

---

## 🤖 Connecting an Open-Weight Model

The frontend is prepared to send requests to a backend endpoint.

To enable actual AI generation, the next development steps are:

1. Install Python and FastAPI.
2. Set up a compatible open-weight model runtime, such as Ollama.
3. Download and configure a model whose licence permits your intended use.
4. Create a FastAPI endpoint to accept the user's task, business details, and preferred tone.
5. Pass the request to the model and return its generated response.
6. Configure `AI_API_URL` in `script.js` to point to the backend.
7. Test the complete workflow and verify error handling.

For local inference, the application can be configured to communicate with a backend running on the same machine.

**Security note:** Keep private API keys on the backend. Validate requests, restrict access appropriately, and avoid exposing a local model server to the public internet without proper security controls.

---

## 💼 Who Is SideKick AI For?

SideKick AI is designed for people who need practical business-writing assistance.

* **Freelancers:** Draft proposals, client emails, and follow-ups.
* **Online sellers:** Create product descriptions and listing copy.
* **Content creators:** Brainstorm captions and promotional content.
* **Local businesses:** Develop marketing ideas and customer communications.
* **Student entrepreneurs:** Experiment with AI-powered business workflows.

The goal is to help users spend less time on repetitive writing and more time serving customers.

---

## 💸 Business Model

SideKick AI could explore a freemium business model.

| Plan     | Possible Features                                    |
| -------- | ---------------------------------------------------- |
| Free     | Basic content-generation tools                       |
| Pro      | Advanced templates and saved workflows               |
| Business | Customized templates and team features               |
| Local AI | Optional local-model setup and configuration support |

These are proposed plans, not existing paid services.

Before introducing paid plans, the project needs a functioning AI backend, user testing, and a clear understanding of hosting and support costs.

---

## 🗺️ Roadmap

### Phase 1 — Frontend

* [x] Responsive landing page
* [x] Business-writing workspace
* [x] Product description tool interface
* [x] Social media content tool interface
* [x] Business email tool interface
* [x] Marketing idea tool interface
* [x] Copy and download functionality
* [x] Demo generation mode

### Phase 2 — Open-Source AI Integration

* [ ] Build the FastAPI backend
* [ ] Integrate an open-weight language model
* [ ] Connect the frontend to the backend
* [ ] Add loading and error states for model requests
* [ ] Test generation quality across different tasks

### Phase 3 — Privacy and Reliability

* [ ] Test local inference
* [ ] Add input validation and request limits
* [ ] Improve error handling
* [ ] Verify that sensitive information is not unintentionally logged
* [ ] Document model requirements and licensing

### Phase 4 — Real-World Validation

* [ ] Find an initial freelancer or small business user
* [ ] Test real product descriptions and emails
* [ ] Collect feedback on quality and usability
* [ ] Measure time saved and identify missing features
* [ ] Explore a sustainable pricing model

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome!

You can help by:

* Improving the interface and accessibility.
* Adding useful business-writing workflows.
* Integrating compatible open-weight models.
* Improving prompt quality and output formatting.
* Testing the application and reporting bugs.
* Improving documentation.

### Contribution Steps

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test the application.
5. Submit a pull request describing your contribution.

Please ensure that your changes respect the licences of all models and dependencies used.

---

## 🔒 Privacy

SideKick AI aims to support privacy-conscious AI workflows.

Actual privacy depends on the deployment configuration. The current frontend alone does not guarantee local processing, offline operation, or complete data privacy.

When a local model and backend are configured correctly, the application can be designed to process business content without relying on an external inference provider.

Avoid entering confidential business information until the deployment's data handling has been verified.

---

## 📌 Current Project Status

**Status: Frontend prototype**

The current version provides the website interface and template-based demonstration functionality.

A working open-weight AI backend, local inference, and real-world user validation remain development goals.

The project should not be considered a fully integrated AI product until those capabilities have been implemented and tested.

---

## 🌱 Our Vision

We believe independent creators and small businesses deserve access to useful AI tools without being locked into a single provider.

SideKick AI is an experiment in building a practical, adaptable business assistant around open innovation.

The next step is simple: connect an open-weight model, put it in the hands of a real user, and improve it based on what they actually need.

**Build small. Solve real problems. Keep innovation open.**

---

## 📄 License

This project is intended to be open source.

A project licence has not yet been selected. Before publishing the repository, choose and add an appropriate licence file, such as the MIT License, if it matches your goals.

Remember that the licence for the application code does not automatically determine the licence or commercial-use conditions of the AI model you integrate.

```

### Ab next kya karna hai?

1. Is file ko `README.md` naam se save karo.
2. GitHub repository par upload karo.
3. `YOUR_REPOSITORY_URL` ko apne actual repository URL se replace karna.
4. Backend connect karne ke baad README mein actual model, setup instructions aur testing results update karna.

**Important:** Challenge ke liye sabse valuable next step real open-weight AI integration hai. Abhi tumhara frontend demo mode mein hai, isliye README mein maine unimplemented features ko clearly roadmap mein rakha hai—isse project documentation honest aur professional rahegi.
```
