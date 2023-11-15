from PIL import Image
import os
import sys
import matplotlib.pyplot as plt
import numpy as np
import tensorflow as tf
from keras.preprocessing.image import ImageDataGenerator
import base64
import io

img_b64 = input()

# Lấy đường dẫn thư mục của script Python hiện tại
current_directory = os.path.dirname(os.path.abspath(__file__))


class HiddenPrints:
    def __enter__(self):
        self._original_stdout = sys.stdout
        sys.stdout = open(os.devnull, 'w')

    def __exit__(self, exc_type, exc_val, exc_tb):
        sys.stdout.close()
        sys.stdout = self._original_stdout

    # Lấy đường dẫn thư mục của script Python hiện tại
    current_directory = os.path.dirname(os.path.abspath(__file__))

model_1 = tf.keras.models.load_model(str(current_directory + "/final_model_new.h5"))

BATCH_SIZE = 128
# test_preprocess = ImageDataGenerator(rescale = 1/255.0)
test_preprocess = ImageDataGenerator(rescale=1 / 255.0)
IMAGE_SIZE = 224

test_directory = os.path.join(current_directory, "..", "public/Test")

with HiddenPrints():
    test_data = test_preprocess.flow_from_directory(
        directory= test_directory,
        target_size=(IMAGE_SIZE, IMAGE_SIZE),
        color_mode="rgb",
        batch_size=BATCH_SIZE,
        class_mode="categorical",
        shuffle=False,  # Set this to False for test data
        seed=42,
    )

class_labels = list(test_data.class_indices.keys())
# print(class_labels)

# 1 Ảnh

 # Chuyển đổi base64 thành dữ liệu nhị phân
binary_data = base64.b64decode(img_b64)

# Chuyển đổi dữ liệu nhị phân thành mảng numpy hoặc sử dụng trực tiếp với Pillow
img = Image.open(io.BytesIO(binary_data))
IMAGE_SIZE = 224
img = img.resize((IMAGE_SIZE, IMAGE_SIZE))
img = np.array(img) / 255.0  # Rescale the image

# Expand dimensions to match the model input shape
img = np.expand_dims(img, axis=0)

# Make a prediction

prediction = model_1.predict(img, verbose=0)
predicted_label = class_labels[np.argmax(prediction)]

# Display the specified image and labels
print(predicted_label)