# Fortune.js Example

Example using [Fortune.js](http://fortunejs.com/) to create a hypermedia API that conforms to the [Micro API](http://micro-api.org/) specification.


## Running

To run it, execute:

```
$ npm install
$ npm start
```

You can interact with the HTTP server through `http://localhost:8000/api`:

```
$ curl http://localhost:8000/api/users
{
  "@meta": {...},
  "@graph": [...]
}
```

You can interact with the WebSocket server through `ws://localhost:8000/realtime`:

```
$ npm install -g wscat
$ wscat -c ws://localhost:8000/realtime
connected (press CTRL+C to quit)
> hey
  < hey
```


## Deploying

To deploy this app to Heroku, just run:

```
$ heroku git:remote -a <name>
```

Allow installing dev dependencies:

```
$ heroku config:set NPM_CONFIG_PRODUCTION=false
```

And trigger a deploy:

```
$ git push heroku master
```


## Meta

* Code: `git clone git://github.com/unindented/fortune-example.git`
* Home: <https://fort.herokuapp.com/api>


## Contributors

* Daniel Perez Alvarez ([unindented@gmail.com](mailto:unindented@gmail.com))


## License

Copyright (c) 2015 Daniel Perez Alvarez ([unindented.org](https://unindented.org/)). This is free software, and may be redistributed under the terms specified in the LICENSE file.
