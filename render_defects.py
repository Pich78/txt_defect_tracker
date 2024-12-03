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

def render_template(defects, template_file='template.html'):
    env = Environment(loader=FileSystemLoader('.'))
    template = env.get_template(template_file)
    return template.render(defects=defects)

def main():
    defects = load_defects('defects')  # Directory containing JSON files
    html_output = render_template(defects)
    with open('defect_list.html', 'w') as f:
        f.write(html_output)
    print("HTML file 'defect_list.html' has been created.")

if __name__ == "__main__":
    main()