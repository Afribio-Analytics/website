# Afribio Analytics website

Jekyll site, built automatically by GitHub Pages from `main`.

## Run locally

    bundle install
    bundle exec jekyll serve

Then open http://localhost:4000/

## Where to edit

| To change | Edit |
| --- | --- |
| Site title, contact details, accent colour, grid lines | `_config.yml` |
| Navigation links | `_data/navigation.yml` |
| Home page section rows | `_data/pillars.yml` |
| Products (name, text, which mock to show) | `_data/products.yml` |
| Pipeline Builder mock steps and commands | `_data/pipeline.yml` |
| Variant Explorer mock rows | `_data/variants.yml` |
| Sequencing platforms and process steps | `_data/sequencing.yml` |
| Teaching cards and example kit files | `_data/teaching.yml` |
| Page headlines and intro text | front matter at the top of each `*.html` page |
| Header, footer, mocks, call-to-action band | `_includes/` |
| Page shells | `_layouts/` |
| Styles | `assets/css/main.css` |

## Add a page

Create `new-page.html` in the root:

    ---
    layout: page
    title: New page
    eyebrow: Section label
    headline: Big headline.
    lede: One or two sentences of intro.
    ---
    <section class="band"><div class="wrap">Content</div></section>

Then add it to `_data/navigation.yml`.

## Contact form

The form opens the visitor's email app with the message filled in (no backend).
To use a form service instead, set the `action` on the form in `contact.html` and remove the `data-mailto` attribute.

## Product mocks

The Pipeline Builder, Variant Explorer and VSCode Extension panels are illustrative HTML mocks in `_includes/mock-*.html`.
Replace an include with an `<img>` when real screenshots are available.
