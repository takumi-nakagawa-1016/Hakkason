FROM php:8.2-fpm

ENV TZ Asia/Tokyo

RUN install-php-extensions pdo_mysql gd xdebug

RUN apt-get update && apt-get install -y \
    curl \
    git \
    unzip \
    tar \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get update & apt-get install -y \
    nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    && npm install -g npm

COPY ./docker/app/php.ini /usr/local/etc/php/php.ini

COPY --from=composer:2.2 /usr/bin/composer /usr/bin/composer

WORKDIR /app