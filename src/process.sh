#!/bin/sh
# Used to process the given set of mp3 files, in an attempt to normalize the volume.

mkdir -p out
for song in *.mp3
do volume=$(ffmpeg -i "$song" -af "volumedetect" -vn -sn -dn -f null /dev/null 2>&1 | awk '/max_volume/{gsub("-","");print $5}')
ffmpeg -y -i "$song" -af "volume=${volume}dB" "out/$song"
done