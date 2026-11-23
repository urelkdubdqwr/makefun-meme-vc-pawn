#!/usr/bin/env python3
"""Copy the vetted r24 pawn-ticket render over meme.png (byte-identical) and print its sha256."""
import shutil, hashlib, os
SRC = '/home/ubuntu/makefun/meme-x/assets/r24.png'
DST = os.path.join(os.getcwd(), 'meme.png')
shutil.copyfile(SRC, DST)
print('meme sha256:', hashlib.sha256(open(DST, 'rb').read()).hexdigest())
