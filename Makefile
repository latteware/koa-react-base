-include ./.env
include ./.env.default

BIN_DIR ?= ./node_modules/.bin

help:
	@echo
	@echo "  \033[34mdev-server\033[0m  start dev server"
	@echo "  \033[34mfrontend\033[0m    start webpack dev server"
	@echo "  \033[34mstart\033[0m       start server and client"
	@echo "  \033[34mdist\033[0m        build the app"

api-server:
	@$(BIN_DIR)/nodemon api/runner.js


app-devserver:
	@$(BIN_DIR)/nodemon app/server/runner.js

app-frontend:
	@$(BIN_DIR)/webpack-dev-server --config ./app/webpack/dev.config.js --port ${WEBPACK_PORT} --host ${WEBPACK_HOST} --hot

app-start:
	@$(MAKE) app-devserver & $(MAKE) app-frontend

app-dist: export NODE_ENV = production
app-dist:
	@$(BIN_DIR)/webpack --config ./app/webpack/prod.config.js --progress

admin-devserver:
	@$(BIN_DIR)/nodemon admin/server/runner.js 

admin-frontend:
	@$(BIN_DIR)/webpack-dev-server --config ./admin/webpack/dev.config.js --port ${WEBPACK_PORT} --host ${WEBPACK_HOST} --hot

admin-start:
	@$(MAKE) admin-devserver & $(MAKE) admin-frontend

admin-dist: export NODE_ENV = production
admin-dist:
	@$(BIN_DIR)/webpack --config ./admin/webpack/prod.config.js --progress	

dist:
	@$(MAKE) app-dist & $(MAKE) admin-dist

.PHONY: help dev-server frontend start dist
