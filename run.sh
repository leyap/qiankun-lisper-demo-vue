#!/bin/sh
cd child1-demo
yarn serve &
cd ../child2-demo
yarn serve &
cd ../root-demo
yarn serve
