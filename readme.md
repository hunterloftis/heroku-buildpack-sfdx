# Heroku-Buildpack-SFDX

Deploy SFDX apps to Salesforce scratch orgs via Heroku.

## Deploy the Dreamhouse Demo

#### First, become part of the Salesforce SFDX Pilot

[Sign up here](http://go.pardot.com/l/27572/2017-01-23/6gh89x).

Throughout these instructions we'll use *your@pilot.email*.

#### Next, install SFDX locally

1. Check the [manifest](https://developer.salesforce.com/media/salesforce-cli/manifest.json).
2. Download the file for your operating system.
3. Run `sfdx/install` to install the sfdx CLI.

Check to be sure it's installed and up-to-date in your terminal:

```
$ sfdx update
```

#### Log in to the Developer Hub

```
$ sfdx force:auth:web:login -d -a 'Hub Org'
```

When prompted, authorize the SFDX "Global Connected App."

#### Clone the Dreamhouse Demo

```
$ git clone https://github.com/hunterloftis/sfdx-dreamhouse
$ cd sfdx-dreamhouse
```

#### Create a new Heroku App

```
$ heroku create --buildpack https://github.com/hunterloftis/heroku-buildpack-sfdx
```

#### Configure the app for Dreamhouse

```
$ sfdx force:org:describe -u your@pilot.email --json --verbose
```

You'll copy the `sfdxAuthUrl` value into `SFDX_AUTH_URL` below:

```
$ heroku config:set SFDX_USER_NAME='your@pilot.email'
$ heroku config:set SFDX_PERMSET='Dreamhouse'
$ heroku config:set SFDX_AUTH_URL='Force://...'
```

#### Deploy

```
$ git push heroku master
```
