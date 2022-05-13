if [ -f "config.production.js" ] ; then
  echo "config.production.js exist"
else
  echo "cannot find config.production.js"
    exit
fi

if [ -f "start.sh" ] ; then
  echo "start.sh exist"
else
  echo "cannot find start.sh"
    exit
fi

if [ -f "stop.sh" ] ; then
  echo "stop.sh exist"
else
  echo "cannot find stop.sh"
    exit
fi

if [ -f "upgrade.sh" ] ; then
  echo "upgrade.sh exist"
else
  echo "cannot find upgrade.sh"
    exit
fi

if [ -f "migrate.sh" ] ; then
  echo "migrate.sh exist"
else
  echo "cannot find migrate.sh"
    exit
fi

if [ -f "docker-compose.yml" ] ; then
  echo "docker-compose.yml exist"
else
  echo "cannot find docker-compose.yml"
    exit
fi

chmod u+x start.sh
chmod u+x stop.sh
chmod u+x upgrade.sh
chmod u+x migrate.sh

echo "HostPort=3000" > .env

docker pull things-factory/test-app:latest

docker pull hatiolab/operato-nginx:latest

docker-compose create