#!/usr/bin/make -f

MAKEFLAGS += --silent

env ?= development
$(shell cp .config/environments/.env.$(env) .env)
include .env
export $(shell sed 's/=.*//' .env)


GitRepo = hire-safe-apps

DirEcosystem := apps/

Services := gateway
Frontends := web-portal

ServicesNx = $(foreach project,$(Services),$(project))
FrontendsNx = $(foreach project,$(Frontends),$(project))

AllAppsNx = ${FrontendsNx}
AllServicesNx = ${ServicesNx}

noop =
comma := ,
space = $(noop) $(noop)

OS := $(shell uname)

nprocs := 2

ifeq ($(OS), Linux)
    nprocs = $(shell nproc)
endif
ifeq ($(OS), Darwin)
    nprocs = $(shell sysctl -n hw.ncpu)
endif

install: FORCE

updateDeps:
	pnpm install

build:
	$(MAKE) updateDeps
	$(MAKE) build.services
	$(MAKE) build.apps
	$(MAKE) env.set

env.set:
	cp .config/environments/.env.$(env) .env
	for service in $(Services) ; do \
		mkdir -p ./dist/${DirEcosystem}$$service/ >/dev/null 2>&1 ; \
		cp .env ./${DirEcosystem}$$service/.env ; \
		cp .env ./dist/${DirEcosystem}$$service/.env ; \
	done

	@echo "$(env) environment variables for services are set"

dev.web-portal: env.set updateDeps
	nx run web-portal:serve

dev.gateway: env.set updateDeps
	nx run gateway:serve

build.affected:
	nx affected:build --parallel=6 --configuration=$(env) --parallel=$(nprocs) --exclude='workspace' 

build.apps: env.set
	nx run-many --target=build --projects=$(subst $(space),$(comma),$(AllAppsNx)) --parallel=$(nprocs) --configuration=$(env) --exclude='workspace' 

build.services: env.set
	nx run-many --target=build --projects=$(subst $(space),$(comma),$(AllServicesNx)) --parallel=$(nprocs) --configuration=$(env) --exclude='workspace' 

dev: env.set updateDeps
	nx run-many --target=serve --projects=$(subst $(space),$(comma),$(AllServicesNx),$(AllAppsNx)) --parallel=$(nprocs) --configuration=$(env) --exclude='workspace' ; \
  $(MAKE) env.set

format:
	nx format:write

release.patch:
	nx run workspace:version --releaseAs=patch

release.minor:
	nx run workspace:version --releaseAs=minor

release.major:
	nx run workspace:version --releaseAs=major

release.premajor:
	nx run workspace:version --releaseAs=premajor --preid=beta

release.prerelease.beta:
	nx run workspace:version --releaseAs=prerelease --preid=beta

release.prerelease.alpha:
	nx run workspace:version --releaseAs=prerelease --preid=alpha

cpus:
	@echo "Number of CPUs: $(nprocs)"