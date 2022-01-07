import cv2
import numpy as np
import sys

image = cv2.imread(sys.argv[1])

c = 255 / np.log(1 + np.max(image))
logImage = c * (np.log(image + 1))
data = np.array(logImage, dtype=np.uint8)


cv2.imwrite(sys.argv[2], data)