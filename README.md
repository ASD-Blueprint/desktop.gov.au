## Desktop.gov.au

A website for Protected Utility with all blueprint documents.

All contributions welcome.

**Table of contents**

* [Desktop.gov.au](#desktopgovau)
* [Style sheet for content](#style-sheet-for-content)
  * [Terms in body text](#terms-in-body-text)
  * [Capitalisation](#capitalisation)
  * [Links](#links)
  * [Numbers](#numbers)
  * [Words list](#words-list)
* [How to develop locally](#how-to-develop-locally)
  * [Site search](#site-search)
  * [Frequently asked questions](#frequently-asked-questions)
    * [What is this website built on?](#what-is-this-website-built-on)
    * [Can I contribute without a local development environment?](#can-i-contribute-without-a-local-development-environment)

## Style sheet for content

Please follow the content guidance when writing material for this website.

This style sheet records [Style Manual](https://www.stylemanual.gov.au/) rules that relate to decisions:

* to use specific terminology
* follow or deviate from spellings listed in The Australian Concise Oxford Dictionary (sixth edition).

The style sheet records editorial and content design decisions.

When you update the style sheet you remove the need to repeat the decision-making process. These style decisions consider the program's users and are based on rules to ensure accessibility, readability, usability and findability.

Keeping the style sheet up to date means all team members can use the same style, making any iterations to the content as consistent as possible.

It is important to use the style sheet as you update relevant webpages and equivalent documents available for download from the Protected Utility Program site.

### Terms in body text

* `Protected Utility Program` is the full name of the product.
* When using the definite article before the product name, use lower case, (example: `the Protected Utility Program`), unless at the start of a sentence.
* After first mention of the Protected Utility Program, use `the program` or `Protected Utility`.
* `Protected Utility blueprint` is the collective name for the program's implementation documents. After first mention of the collective name, the shortened form is `the blueprint`.
* `Artefacts` to be used instead of `set of documents`, as the information is variously available in HTML and downloadable document formats.
* `Documents` to refer to associated documents that are not available in HTML. Italicise the individual names for specific documents in the body text, but not when listed together.
* Refer to `user/users` instead of `audience` in general. The user may or may not be a government agency.
* Acronyms should be placed in brackets after first mention of the full name and the acronym used consistently thereafter.

### Capitalisation

* Generally, minimise capital letters for common nouns and adjectives and use only for proper nouns.
* Each of the blueprint's artefacts and associated security document titles uses sentence casing (example: `Client devices design` and `System security plan`)
* Deployment methods and components use lower case unless they are proper names (example: `cloud native`)
* Proper nouns take initial capitals, that is a capital for each word except a preposition.
* Brand product names such as `Sharepoint Online`, take initial capitals.
* Generic types of documents do not take capital letters, example `security classification documents`.
* Lower case 'g' for `government` (unless `Australian Government`).
* All headings apply sentence casing, that is a capital letter for the first word (example: `Design decisions`, unless using a proper noun (`Essential Eight`)).

More on [capitalisation rules](https://www.stylemanual.gov.au/style-rules-and-conventions/general-conventions-editing-and-proofreading/punctuation-and-capitalisation) in Style Manual.

### Links

* Place links at the end of sentences.
* Always describe the link on par with the destination. Never use generic link text such as `click here`.
* Embed URL in meaningful link text.

More on [links rules](https://www.stylemanual.gov.au/format-writing-and-structure/structure/links) in Style Manual.

### Numbers

* Use a numeral for all numbers except one and zero.
* The exception to using numerals for 2 upwards is to use a word at the start of a sentence.
* The exception to using words for one and zero is to use numerals in tables.

More on [choosing numbers or words rules](https://www.stylemanual.gov.au/style-rules-and-conventions/numbers-and-measurements/choosing-numerals-or-words) in Style Manual.

### Words list

Please follow our words list at [abbreviations and acronyms](blueprint/abbr-acronyms.md).

## How to develop locally

We have simplified the pre-requisites to only Docker so please make sure it is available to you.

After you have cloned this repository, run the application:

```docker-compose up```

The above will build the Docker instance if it is not already built, and run your application while watching over file changes. Now open your browser and point to your docker host, eg: `http://127.0.0.1/` to browse your local copy.

Content are Markdown files and normally end in `.md`. For help with Markdown syntax, please visit:

* [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
* [Github's Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

### Site search

Site search is provided by Algolia and is automatically integrated into deployed environments via CircleCI. If you are deploying to a local environment and need search, create a `_config-extras.yml` file in the root of your working directory substituting with correct values. Note that this file is not committed into the repository.

```
algolia:
  application_id: "AAA"
  index_name: "BBB"
  search_only_api_key: "CCC"
```

### Frequently asked questions

#### What is this website built on?

desktop.gov.au uses [Jekyll](https://jekyllrb.com/) to generate a static site and is hosted on [cloud.gov.au](https://cloud.gov.au/). It adheres to the [Jamstack](https://jamstack.org/) principles focussing on speed, security and hosting portability.

#### Can I contribute without a local development environment?

Yes of course, but you first need a Github account.

The easiest method is to first view our [list of issues](https://github.com/govau/desktop.gov.au/issues), add to the ticket if a similar one exists or [create a new issue](https://github.com/govau/desktop.gov.au/issues/new) if not. Try to place as much detail as possible to help us identify what the problem is and don't forget to include the page you were on that has the issue.

Alternatively, you can suggest changes by making your amendments directly on Github. At the end of the process, you will submit a pull request which will allow us to provide feedback and incorporate it back into the repository. [Microsoft describes this method](https://github.com/MicrosoftDocs/microsoft-365-docs#overview) for updating their documentation which is highly relevant here.
