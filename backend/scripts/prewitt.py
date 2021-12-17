
import cv2
import numpy as np
import sys

image = cv2.imread(sys.argv[1])


kernelX = np.array([[1, 1, 1], [0, 0, 0], [-1, -1, -1]], dtype=int)
kernelY = np.array([[-1, 0, 1], [-1, 0, 1], [-1, 0, 1]], dtype=int)

x = cv2.filter2D(image, cv2.CV_16S, kernelX)
y = cv2.filter2D(image, cv2.CV_16S, kernelY)

absX = cv2.convertScaleAbs(x)
absY = cv2.convertScaleAbs(y)
data = cv2.addWeighted(absX, 0.5, absY, 0.5, 0)

cv2.imwrite(sys.argv[2], data)