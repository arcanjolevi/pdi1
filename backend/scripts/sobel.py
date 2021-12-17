
import cv2
import numpy as np
import sys

image = cv2.imread(sys.argv[1], 0)

direction = int(sys.argv[3])

#vertical 0
#horizonal 1

gradX = cv2.Sobel(image, cv2.CV_64F, 1, 0)
gradY = cv2.Sobel(image, cv2.CV_64F, 0, 1)

if(int(direction == 1)):
    cv2.imwrite(sys.argv[2], gradX)
else:
    cv2.imwrite(sys.argv[2], gradY)



