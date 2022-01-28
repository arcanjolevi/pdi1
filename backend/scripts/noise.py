import numpy as np
from matplotlib import pyplot as plt
from skimage.util import random_noise
from skimage import io
import sys

noise = int(sys.argv[3])
noise_name = ''

if(noise == 0):
    noise_name = 's&p'
elif(noise == 1):
    noise_name = 'gaussian'
elif(noise == 2):
    noise_name = 'localvar'
elif(noise == 3):
    noise_name = 'speckle'
else:
    noise_name = 'poisson'
    
value = float(sys.argv[4])    
    
img = io.imread(sys.argv[1])
if(noise != 0):
    data = random_noise(img, mode=noise_name, seed=None, clip=True)
else:
    data = random_noise(img, mode=noise_name, seed=None, clip=True, amount=value)
# io.imsave('noise_s&p.png', data)
# data = random_noise(img, mode='gaussian', seed=None, clip=True)
# io.imsave('noise_gauss.png', data)
# data = random_noise(img, mode='localvar', seed=None, clip=True)
# io.imsave('noise_localvar.png', data)
# data = random_noise(img, mode='speckle', seed=None, clip=True)
# io.imsave('noise_speckle.png', data)
# data = random_noise(img, mode='poisson', seed=None, clip=True)
io.imsave(sys.argv[2], data)

