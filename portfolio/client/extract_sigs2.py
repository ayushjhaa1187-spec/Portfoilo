import cv2
import numpy as np

img_path = r'C:\Users\DELL\.gemini\antigravity\brain\f181758a-e177-4409-9f0e-bc6208d726e6\media__1773238872816.png'
img = cv2.imread(img_path, cv2.IMREAD_UNCHANGED)
hsv = cv2.cvtColor(img[:,:,:3], cv2.COLOR_BGR2HSV)
s = hsv[:,:,1]
mask = s > 30

rows = np.where(np.sum(mask, axis=1) > 0)[0]
cols = np.where(np.sum(mask, axis=0) > 0)[0]
y1, y2 = max(0, rows[0]-10), min(img.shape[0], rows[-1]+10)
x1, x2 = max(0, cols[0]-10), min(img.shape[1], cols[-1]+10)

img_cropped = img[y1:y2, x1:x2, :3].copy()
mask_cropped = mask[y1:y2, x1:x2]

# Split in half vertically since there are two signatures in the image!
mid = img_cropped.shape[0] // 2

img1 = img_cropped[:mid]
mask1 = mask_cropped[:mid]

img2 = img_cropped[mid:]
mask2 = mask_cropped[mid:]

alpha1 = np.where(mask1, 255, 0).astype(np.uint8)
alpha1 = cv2.GaussianBlur(alpha1, (3,3), 0)
res1 = np.dstack((img1, alpha1))
cv2.imwrite(r'c:\Users\DELL\Portfoilo\portfolio\client\public\signature-gold.png', res1)

res2 = img2.copy()
bg_color = [8, 6, 6]
res2[~mask2] = 0 # first clear background
alpha2 = np.where(mask2, 255, 0).astype(np.uint8)
res2 = np.dstack((res2, alpha2))

# Wait, the user asked for "dark background version", so let's just make the background dark instead of transparent for res2.
res2_dark = img2.copy()
res2_dark[~mask2] = [8, 6, 6]
cv2.imwrite(r'c:\Users\DELL\Portfoilo\portfolio\client\public\signature-dark-bg.png', res2_dark)

print("Saved both images")
