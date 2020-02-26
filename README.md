# [Form validation problem](https://springload.github.io/form-validation-problem/)

We've created this problem to evaluate how developers tackle a real-world problem. If you've been assigned this problem you should spend no more than **2 hours** working on it. We don't want you to toil away for days on end!

## Problem definition

Included in this repository is an [index.html](index.html) file that contains a form. Please recreate this in React. You should ensure all of the following rules are met before the form is posted to the (in this case imaginary) server:

* `Email` must be a valid email address.
* `Password` must be longer than 8 characters.
* `Colour` must be selected.
* At least two `Animal`s must be chosen.
* If `Tiger` is one of the chosen `Animal`s then `Type of tiger` is required to be a non-empty string.

## Other requirements

If the form is submitted and an error occurs, the error element's parent should have a CSS `error` class added to it.

```html
<p class="error">
    <label for="field"></label>
    <input id="field" type="text" value="foo">
</p>
```

Please write a little bit about the approach you took, including any ideas about further enhancements.

## The cherry on the cake

Beyond the problem statement, show us the consideration you have given to some or all of the following:

- Documentation
- Accessibility
- Progressive enhancement
- Browser support
- Testing
- Tooling

## Submission

Please email us a link to your fork of this repository, or a zip of your solution.

## Acknowledgements

Thanks to [Springload](https://www.springload.co.nz/) for the original version of this test.


# HOW TO RUN
$ yarn install
$ yarn run dev // wait for PostCSS to run
$ yarn run dev:server:start // go to localhost:8070
