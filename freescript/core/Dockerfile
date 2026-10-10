FROM php:8.2-fpm

WORKDIR /var/www/html

# Install system dependencies and PHP extensions required by Laravel
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        build-essential \
        libpng-dev \
        libjpeg-dev \
        libonig-dev \
        libxml2-dev \
        libzip-dev \
        zip \
        unzip \
        curl \
        git \
    && docker-php-ext-configure gd --with-jpeg \
    && docker-php-ext-install pdo_mysql mbstring exif bcmath gd zip xml \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && rm -rf /var/lib/apt/lists/*

# Copy project files
COPY . /var/www/html

# Install PHP dependencies
RUN composer install --no-dev --no-interaction --optimize-autoloader

# Set Laravel storage/cache permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 775 storage bootstrap/cache

# Runtime configuration
ENV APP_ENV=production \
    APP_DEBUG=false \
    PORT=10000

EXPOSE 10000

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=10000"]
