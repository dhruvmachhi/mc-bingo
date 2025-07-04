import os
import json

def convert_filename(filename):
    name, _ = os.path.splitext(filename)
    parts = name.split('_')
    return ' '.join(part.capitalize() for part in parts)

def scan_images(folder_path):
    result = []
    for file in os.listdir(folder_path):
        if file.endswith('.png'):
            converted = convert_filename(file)
            result.append({
                "file": file,
                "name": converted
            })
    return result

# Change this to your actual folder path
folder_path = "./"

# Scan and convert
image_data = scan_images(folder_path)

# Output to JSON
with open("image_list.json", "w") as f:
    json.dump(image_data, f, indent=2)

print(f"Processed {len(image_data)} image files.")

