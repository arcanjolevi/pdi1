import sys
import cv2 as cv
import argparse

src = cv.imread(sys.argv[1])

src = cv.cvtColor(src, cv.COLOR_BGR2GRAY)
dst = cv.equalizeHist(src)
cv.imshow('Source image', src)
cv.imwrite(sys.argv[2], dst)
