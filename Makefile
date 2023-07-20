PROJECT_DIR = reyoom-server

.PHONY: setup

setup:
	docker compose up -d --build
	docker compose exec app composer install
	docker compose exec app sh -c "npm install"

up:
	docker compose up -d

stop:
	docker-compose stop

format:
	docker compose exec app './vendor/bin/pint'

shell:
	docker compose exec app /bin/bash

freshseed:
	docker compose exec app php artisan migrate:fresh --seed

dev:
	docker compose exec app npm run dev

cache-clear:
	docker-compose exec app php artisan cache:clear
	docker-compose exec app php artisan config:clear
	docker-compose exec app php artisan route:clear
	docker-compose exec app php artisan view:clear