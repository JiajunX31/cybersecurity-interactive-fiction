# ANSI color codes
NOCOLOR='\033[0m'
RED='\033[31m'
GREENB='\033[32;49;1m'
YELLOW='\033[33m'
CYAN='\033[36'

echo "Compiling twee code to html... \n"

# Run the twee compiler and output to build.log
npm run rebuild > build.log

if [ $? -eq 0 ]; then
    echo "${GREENB}Build successful \n"
    
    echo "${NOCOLOR}Html files are ouput to ./dist \n"
    
    # Remove build.log if build was successful
    rm build.log
else
    echo "${RED}build failed"
    echo "see ${YELLOW}build.log${NOCOLOR} for details"
    exit 1
fi


echo "${YELLOW}Done!${NOCOLOR}"