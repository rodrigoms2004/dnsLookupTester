
#  seleciona o endereço IP, aplica trim, remove endereço de loopback
nslookup www.google.com | grep Address | cut -d':' -f2 | awk '{$1=$1};1' | awk 'NR > 1 { print }'
