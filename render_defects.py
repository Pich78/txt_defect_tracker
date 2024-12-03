import json
import os
from jinja2 import Environment, FileSystemLoader

def load_defects(directory):
    defects = []
    for filename in os.listdir(directory):
        if filename.endswith('.json'):
            with open(os.path.join(directory, filename), 'r') as f:
                defects.append(json.load(f))
    return defects

def render_template(template_file='template.html'):
    env = Environment(loader=FileSystemLoader('.'))
    template = env.get_template(template_file)
    return template.render()

def save_defects_to_js(defects, output_file='data.js'):
    with open(output_file, 'w') as f:
        f.write(f"const defects = {json.dumps(defects, indent=4)};")

def main():
    defects = load_defects('defects')  # Directory containing JSON files
    save_defects_to_js(defects)  # Save defects to data.js
    html_output = render_template()
    with open('defect_list.html', 'w') as f:
        f.write(html_output)
    print("HTML file 'defect_list.html' and data.js have been created.")

if __name__ == "__main__":
    main()