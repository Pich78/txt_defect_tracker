# txt_defect_tracker

## Overview
**txt_defect_tracker** is a simple defect tracking application that generates a single HTML page with project defects stored in JSON format. This tool is designed to help developers and project managers keep track of issues and defects in a straightforward and efficient manner.

## Features
- **JSON-based storage**: Defects are stored in a JSON file, making it easy to manage and update.
- **Single HTML page**: The application generates a single HTML page to display all defects, ensuring easy access and readability.
- **User-friendly interface**: Simple and intuitive interface for adding, viewing, and managing defects.

## Dependencies
The project relies on the following dependencies:
- **Jinja2**: A templating engine for Python.
## Installation and usage
To get started with txt_defect_tracker, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Pich78/txt_defect_tracker.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd txt_defect_tracker
    ```
3. **Generate the HTML file**:
    ```bash
     python .\render_defects.py
    ```
4. **Open the HTML file**:
    To generate the page:Open `defect_list.html` in your preferred web browser.


## License
This project is licensed under the MIT License. See the LICENSE file for more details.
