import sys
import numpy as np
import skimage.color
import skimage.io
from matplotlib import pyplot as plt

image = skimage.io.imread(sys.argv[1], as_gray=True)
histogram, bin_edges = np.histogram(image, bins=256, range=(0, 1))
plt.figure()
plt.title("Grayscale Histogram")
plt.xlabel("grayscale value")
plt.ylabel("pixels")
plt.xlim([0.0, 1.0])
plt.plot(bin_edges[0:-1], histogram) 
plt.savefig(sys.argv[2])