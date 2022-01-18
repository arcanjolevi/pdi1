import cv2
import sys

img = cv2.imread(sys.argv[1])
cv2.imwrite(sys.argv[2], img)