## Desktop.gov.au

A website for the Protected Utility Program with an introduction and the following Blueprint documents:

* Solution Overview
* Platform Design
* Client Devices Design
* Office 365 Design

All contributions welcome.

## How to develop locally

We have simplified the pre-requisites to only Docker so please make sure it is available to you.

After you have cloned this repository, run the application:

```docker-compose up```

The above will build the Docker instance if it is not already built, and run your application while watching over file changes. Now open your browser and point to your docker host, eg: `http://127.0.0.1/` to browse your local copy.

Content are Markdown files and normally end in `.md`. For help with Markdown syntax, please visit:

* [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
* [Github's Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

Also refer to [Jekyll Spaceship](https://github.com/jeffreytse/jekyll-spaceship#1-table-usage) for more advanced table related properties like row and column spans.

### Site search

Site search is provided by Algolia and is automatically integrated into deployed environments via CircleCI. If you are deploying to a local environment and need search, create a `_config-extras.yml` file in the root of your working directory substituting with correct values. Note that this file is not committed into the repository.

```
algolia:
  application_id: "AAA"
  index_name: "BBB"
  search_only_api_key: "CCC"
```
