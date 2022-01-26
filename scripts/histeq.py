import sys
import cv2 as cv

src = cv.imread(sys.argv[1])

src = cv.cvtColor(src, cv.COLOR_RGB2GRAY)
dst = cv.equalizeHist(src)
cv.imwrite(sys.argv[2], dst)
