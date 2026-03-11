import cv2
import numpy as np

img_path = r'C:\Users\DELL\.gemini\antigravity\brain\f181758a-e177-4409-9f0e-bc6208d726e6\media__1773238872816.png'
img = cv2.imread(img_path, cv2.IMREAD_UNCHANGED)

if img is None:
    print("Failed to load image")
    exit()

print(f"Loaded image of shape: {img.shape}")

# Create an alpha channel based on saturation (colored vs grayscale)
hsv = cv2.cvtColor(img[:,:,:3], cv2.COLOR_BGR2HSV)
s = hsv[:,:,1]

# The gold color has high saturation. The checkerboard has 0 saturation.
# Let's threshold saturation to find the gold stroke.
mask = s > 30

# We need to find the bounding boxes of the two separate signatures.
# Let's project the mask horizontally
row_sums = np.sum(mask, axis=1)

# Find rows where there is a significant amount of gold
active_rows = np.where(row_sums > 10)[0]

# Split into clusters (top signature, bottom signature)
diffs = np.diff(active_rows)
splits = np.where(diffs > 50)[0]

if len(splits) == 1:
    split_idx = splits[0]
    top_rows = active_rows[:split_idx+1]
    bot_rows = active_rows[split_idx+1:]
    
    # Bounding boxes manually or automatically extracted
    y_top1 = max(0, top_rows[0] - 20)
    y_bot1 = min(img.shape[0], top_rows[-1] + 20)
    
    y_top2 = max(0, bot_rows[0] - 20)
    y_bot2 = min(img.shape[0], bot_rows[-1] + 20)
    
    # Process Top Image (Transparent Gold)
    img_top = img[y_top1:y_bot1, :, :3].copy()
    mask_top = mask[y_top1:y_bot1]
    col_sums_top = np.sum(mask_top, axis=0)
    active_cols_top = np.where(col_sums_top > 0)[0]
    x_left1 = max(0, active_cols_top[0] - 20)
    x_right1 = min(img.shape[1], active_cols_top[-1] + 20)
    
    img_top_cropped = img_top[:, x_left1:x_right1]
    mask_top_cropped = mask_top[:, x_left1:x_right1]
    
    # Add alpha channel
    alpha1 = np.where(mask_top_cropped, 255, 0).astype(np.uint8)
    
    # Smooth the mask to anti-alias
    alpha1 = cv2.GaussianBlur(alpha1, (3,3), 0)
    
    result_top = np.dstack((img_top_cropped, alpha1))
    
    cv2.imwrite(r'c:\Users\DELL\Portfoilo\portfolio\client\public\signature-gold.png', result_top)
    print("Saved signature-gold.png")
    
    # Process Bottom Image (Dark Background)
    # The gold is on a dark background. Let's make it exactly #060608
    img_bot = img[y_top2:y_bot2, :, :3].copy()
    mask_bot = mask[y_top2:y_bot2]
    col_sums_bot = np.sum(mask_bot, axis=0)
    active_cols_bot = np.where(col_sums_bot > 0)[0]
    x_left2 = max(0, active_cols_bot[0] - 20)
    x_right2 = min(img.shape[1], active_cols_bot[-1] + 20)
    
    img_bot_cropped = img_bot[:, x_left2:x_right2].copy()
    mask_bot_cropped = mask_bot[:, x_left2:x_right2]
    
    # Set background exactly to #060608 (RGB: 6, 6, 8 -> BGR: 8, 6, 6)
    bg_color = [8, 6, 6]
    img_bot_cropped[~mask_bot_cropped] = bg_color
    
    cv2.imwrite(r'c:\Users\DELL\Portfoilo\portfolio\client\public\signature-dark-bg.png', img_bot_cropped)
    print("Saved signature-dark-bg.png")

else:
    print(f"Splits found: {splits}")
