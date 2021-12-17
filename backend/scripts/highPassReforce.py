import sys
import cv2
import numpy as np

def highpass(img, sigma):
    return img - cv2.GaussianBlur(img, (0,0), sigma)

value = int(sys.argv[3])


img = cv2.imread(sys.argv[1])
hp = highpass(img, value)


data = np.array(img, dtype=float)
A = sys.argv[4]
A = A - 1
ar = (data * A) + hp

cv2.imwrite(sys.argv[2], ar)