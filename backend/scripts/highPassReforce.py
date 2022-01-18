import sys
import cv2
import numpy as np


value = int(sys.argv[3])
A = float(sys.argv[4])

img = cv2.imread(sys.argv[1])
data = np.array(img, dtype=float)
lowpass = cv2.GaussianBlur(data, (value, value), 0)
highpass = data - lowpass

alf = ((A - 1) * data) + highpass

cv2.imwrite(sys.argv[2], alf)