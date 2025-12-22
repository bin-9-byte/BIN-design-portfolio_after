import os
from PIL import Image
import concurrent.futures

def convert_image(file_path):
    try:
        # Get directory, filename and extension
        directory, filename = os.path.split(file_path)
        name, ext = os.path.splitext(filename)
        
        # Skip if already webp
        if ext.lower() == '.webp':
            return
            
        # Skip video files
        if ext.lower() == '.mp4':
            return
            
        # Target path
        target_path = os.path.join(directory, f"{name}.webp")
        
        # Open and convert
        with Image.open(file_path) as img:
            # Convert RGBA to RGB if saving as JPEG (but we are saving as WebP which supports transparency)
            # WebP supports RGBA so we don't need to convert mode unless we want to optimize further
            
            # Save as WebP
            img.save(target_path, 'WEBP', quality=80, method=6)
            print(f"Converted: {filename} -> {name}.webp")
            
        # Optional: Remove original file? 
        # For safety, let's keep them for now, but user can delete them later.
        # os.remove(file_path) 
        
    except Exception as e:
        print(f"Error converting {file_path}: {e}")

def process_directory(root_dir):
    image_extensions = {'.png', '.jpg', '.jpeg', '.tiff', '.bmp'}
    files_to_process = []
    
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in image_extensions:
                files_to_process.append(os.path.join(root, file))
                
    # Use ThreadPoolExecutor for faster processing
    with concurrent.futures.ThreadPoolExecutor() as executor:
        executor.map(convert_image, files_to_process)

if __name__ == "__main__":
    # Path to public/images
    images_dir = os.path.join(os.getcwd(), 'public', 'images')
    print(f"Scanning directory: {images_dir}")
    process_directory(images_dir)
    print("Conversion complete!")
