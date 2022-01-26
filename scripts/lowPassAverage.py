import cv2
import sys


value = int(sys.argv[3])

img = cv2.imread(sys.argv[1])

blur = cv2.blur(img,(value,value))
cv2.imwrite(sys.argv[2], blur)
