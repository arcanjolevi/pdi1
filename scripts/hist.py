import sys
import skimage.color
import skimage.io
from matplotlib import pyplot as plt
import sys

image = skimage.io.imread(sys.argv[1], as_gray=False)

plt.hist(image.ravel(),256,[0,256])
plt.savefig(sys.argv[2])
plt.close()