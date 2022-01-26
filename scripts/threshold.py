
import cv2
import sys

param = int(sys.argv[3])
param2 = int(sys.argv[4])


#Arg 1 -> File src
#Arg 2 -> File Dst
#Arg 3 -> Threshold type

# Threshold types
#Binario -> 0
#Binario inverso -> 1
#Trunc -> 2
#To Zero -> 3
#To zero inverse -> 4

img = cv2.imread(sys.argv[1])

result = cv2.threshold(img,param2,255,param)[1]
cv2.imwrite(sys.argv[2], result)


