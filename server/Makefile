ifneq (,$(wildcard ./.env))
	include .env
	export
	ENV_FILE_PARAM = --env-file .env
endif

build:
	docker-compose up --build --remove-orphans

up: 
	docker-compose up

down:
	docker-compose down

volume:
	docker volume inspect mern--color-message-board_mongodb-data