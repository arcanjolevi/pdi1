import cv2
import numpy as np
import imutils
import sys

image = cv2.imread(sys.argv[1])

nImage = image.copy()
gray = cv2.cvtColor(nImage, cv2.COLOR_RGB2GRAY)
ret, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV+cv2.THRESH_OTSU)

kernel = np.ones((3, 3), np.uint8)
opening = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, kernel, iterations=2)

sure_bg = cv2.dilate(opening, kernel, iterations=3)

dist_transform = cv2.distanceTransform(opening, cv2.DIST_L2, 5)
ret, sure_fg = cv2.threshold(dist_transform, 0.7*dist_transform.max(), 255, 0)

sure_fg = np.uint8(sure_fg)
unknown = cv2.subtract(sure_bg, sure_fg)

cnts = cv2.findContours(sure_fg.copy(), cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_SIMPLE)
cnts = imutils.grab_contours(cnts)

ret, markers = cv2.connectedComponents(sure_fg)

markers = markers+1

markers[unknown == 255] = 0

markers = cv2.watershed(nImage, markers)
nImage[markers == -1] = [255, 0, 0]
countImage = nImage.copy()
for (i, c) in enumerate(cnts):
    ((x, y), _) = cv2.minEnclosingCircle(c)
    cv2.putText(countImage, "#{}".format(i + 1), (int(x)-20, int(y)),
    cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 1)

cv2.imwrite(sys.argv[2], countImage)
