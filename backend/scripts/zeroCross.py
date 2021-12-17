import numpy as np
import cv2
import sys


def laplace_of_gaussian(gray_img, sigma=1., kappa=0.75, pad=False):
    assert len(gray_img.shape) == 2
    img = cv2.GaussianBlur(gray_img, (0, 0), sigma) if 0. < sigma else gray_img
    img = cv2.Laplacian(img, cv2.CV_64F)
    rows, cols = img.shape[:2]
    min_map = np.minimum.reduce(list(img[r:rows-2+r, c:cols-2+c]
                                     for r in range(3) for c in range(3)))
    max_map = np.maximum.reduce(list(img[r:rows-2+r, c:cols-2+c]
                                     for r in range(3) for c in range(3)))

    pos_img = 0 < img[1:rows-1, 1:cols-1]
    neg_min = min_map < 0
    neg_min[1 - pos_img] = 0
    pos_max = 0 < max_map
    pos_max[pos_img] = 0
    zero_cross = neg_min + pos_max
    value_scale = 255. / max(1., img.max() - img.min())
    values = value_scale * (max_map - min_map)
    values[1 - zero_cross] = 0.
    if 0. <= kappa:
        thresh = float(np.absolute(img).mean()) * kappa
        values[values < thresh] = 0.
    log_img = values.astype(np.uint8)
    if pad:
        log_img = np.pad(log_img, pad_width=1, mode='constant', constant_values=0)
    return log_img



img = cv2.imread(sys.argv[1])
img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
log = laplace_of_gaussian(img)
cv2.imwrite(sys.argv[2], log)


