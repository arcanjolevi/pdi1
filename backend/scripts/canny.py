
import cv2
import sys

image = cv2.imread(sys.argv[1])
data = cv2.Canny(image=image, threshold1=100, threshold2=200)
cv2.imwrite(sys.argv[2], data)