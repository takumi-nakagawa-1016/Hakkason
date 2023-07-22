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

#コンテナ再起動
restart:
.PHONY: restart
ifeq (restart,$(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif
restart: ## Restart services : ## make restart, make restart app
	docker-compose -f docker-compose.yml kill $(RUN_ARGS) && \
	docker-compose -f docker-compose.yml rm -f $(RUN_ARGS) && \
	docker-compose -f docker-compose.yml up -d $(RUN_ARGS)


down:
	docker-compose down