PROJECT_DIR = reyoom-server

.PHONY: setup

setup:
	docker compose up -d --build
	docker compose exec app composer install
	docker compose exec app sh -c "npm install"

up:
	docker compose up -d

format:
	docker compose exec app './vendor/bin/pint'

shell:
	docker compose exec app /bin/bash

freshseed:
	docker compose exec app php artisan migrate:fresh --seed