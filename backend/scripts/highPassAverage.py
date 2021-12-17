import sys
import cv2

def highpass(img, sigma):
    return img - cv2.GaussianBlur(img, (0,0), sigma)

value = int(sys.argv[3])
img = cv2.imread(sys.argv[1])
img = highpass(img, value)

cv2.imwrite(sys.argv[2], img)