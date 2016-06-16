# Count app

A tiny Sinatra and JavaScript web app that shows a number and a button to increment the number.

Deployed at http://count-sheep.herokuapp.com

Exemplifies:

* Making Ajax requests.
* Testing frontend code.
* Separating frontend concerns into model, view and controller.

If you have a reasonably deep understanding of this code, you should be able to pass a JavaScript junior developer tech test.

```
 -------------------------------
|  -----------                  |
| | Increment |                 |
|  -----------                  |
|                               |
| 23                            |
|                               |
 --------------------------------
```

## Install

    $ cd path/to/count/repo
    $ bundle

## Run the app

    $ cd path/to/count/repo
    $ ruby app.rb
    $ open http://localhost:9393

## Run the tests

### Frontend

    $ cd path/to/count/repo
    $ open spec/frontend/SpecRunner.html

### Backend

    $ cd path/to/count/repo
    $ rspec

## User stories

```
As a shepherd
I can see the number of sheep I've counted back into the pen
So I know if the whole flock is home

As a shepherd
I can increment the number of sheep
So I can record the fact that another sheep has gone into the pen

As a shepherd
I can reopen the app and see my latest count
So I don't lose track of my count if my browser crashes
```
