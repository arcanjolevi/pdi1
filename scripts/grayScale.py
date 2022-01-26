import cv2
import sys

img = cv2.imread(sys.argv[1])
gray = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)
cv2.imwrite(sys.argv[2], gray)