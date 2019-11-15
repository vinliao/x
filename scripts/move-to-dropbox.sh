#!/bin/bash
# TODO: multiple .epub file breaks the script

EPUB=$(ls ~/Downloads | grep '.epub')

if [ "$EPUB" = "" ]; then
    echo There is no epub to move!
else
    # Using quotation mark will treat the variable as a whole
    # instead of splitting it into an "array of texts"
    echo "$EPUB"
    mv ~/Downloads/"$EPUB" ~/Dropbox/Documents/Epubs
fi
