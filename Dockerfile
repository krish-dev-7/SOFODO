FROM nginx:alpine

# Copy the config files
ADD ../conf /etc/nginx/
# Clears the static files
RUN rm -rf /usr/share/nginx/html
# Copy the static web content
ADD .. /usr/share/nginx/html
# Copy the verification file explicitly
ADD ../googleda1334fb87ba5d4d.html /usr/share/nginx/html/googleda1334fb87ba5d4d.html

# Suggests to bind port 80 to any port of the host system
EXPOSE 80
