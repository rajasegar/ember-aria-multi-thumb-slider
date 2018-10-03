# ember-aria-multi-thumb-slider

[![Build Status](https://travis-ci.org/rajasegar/ember-aria-multi-thumb-slider.svg?branch=master)](https://travis-ci.org/rajasegar/ember-aria-multi-thumb-slider) 
[![Coverage Status](https://coveralls.io/repos/github/rajasegar/ember-aria-multi-thumb-slider/badge.svg?branch=master)](https://coveralls.io/github/rajasegar/ember-aria-multi-thumb-slider?branch=master)
[![npm](https://img.shields.io/npm/dm/ember-aria-multi-thumb-slider.svg)](https://www.npmjs.com/package/ember-aria-multi-thumb-slider)
[![npm version](http://img.shields.io/npm/v/ember-aria-multi-thumb-slider.svg?style=flat)](https://npmjs.org/package/ember-aria-multi-thumb-slider "View this project on npm")
[![dependencies Status](https://david-dm.org/rajasegar/ember-aria-multi-thumb-slider/status.svg)](https://david-dm.org/rajasegar/ember-aria-multi-thumb-slider)
[![devDependencies Status](https://david-dm.org/rajasegar/ember-aria-multi-thumb-slider/dev-status.svg)](https://david-dm.org/rajasegar/ember-aria-multi-thumb-slider?type=dev)
[![EmberObserver](http://emberobserver.com/badges/ember-aria-multi-thumb-slider.svg?branch=master)](http://emberobserver.com/addons/ember-aria-multi-thumb-slider)


A two-thumb slider is a slider with two thumbs that each set a value in a group of related values, for example selecting a price range for a product or service. 

This component is totally based on the WAI-ARIA Authoring Practices for accessible components.
[Slider (Multi-thumb)](https://w3c.github.io/aria-practices/#slidertwothumb)

## Demo

[Demo](http://rajasegar.github.io/ember-aria-multi-thumb-slider/)


## Installation

* `ember install ember-aria-multi-thumb-slider`


## Pre-usage setup

Setup slider icons:

Add your icons for the left and right sliders to the following directory and name them as `max-arrow.png` and `min-arrow.png`.

```shell
cd <ember-app-root-dir>/public/images
```

## Usage

Example Markup:

```hbs
{{aria-multi-thumb-slider
  title="Select a hotel between $0 and $500"
  label="Hotel Price"
  minValue=0
  maxValue=500
  currentMin=50
  currentMax=200
  units="$"
}}
```

For custom thumb sliders:

```hbs
    {{aria-multi-thumb-slider
      title="Select a flight between $0 and $1000"
      label="Flight Price"
      minValue=0
      maxValue=100
      currentMin=5
      currentMax=50
      minThumb="images/min-color-arrow.png"
      maxThumb="images/max-color-arrow.png"
    }}
```


## Properties

### title [STRING]
Tool-tip text for the slider

### label [STRING]
ARIA label text for the thumbs.

### minValue [NUMBER]
Minimum value for the range

### maxValue [NUMBER]
Maximum value for the range

### currentMin [NUMBER]
Current minimum value for the range

### currentMax [NUMBER]
Current maximum value for the range

### units [STRING]
The dimension for the value of slider

### minThumb [STRING]
The image url for the minimum value thumb of the slider

### maxThumb [STRING]
The image url for the maximum value thumb of the slider

### unitPrefix [BOOLEAN]
The flag which tells whether we need to prefix or suffix the units to the value 

Default: *true*


## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
