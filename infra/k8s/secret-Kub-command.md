# This command line must be given in cmd line instead of config file for security purpose and value must be remembered personally

kubectl create secret generic <secret-name> -from-literal=<key>=<value>

example: kubectl create secret generic jwt-secret -from-literal=JWT_KEY=asdf
