(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'prodMode':                   'src/app/prodMode',
    'wp1':                        'src/app/wp1',
    'wp2':                        'src/app/wp2',
    '@angular':                   'node_modules/@angular',
    'rxjs':                       'node_modules/rxjs'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'prodMode':                   { main: 'main.js',  defaultExtension: 'js' },
    'wp1':                        { main: 'main.js',  defaultExtension: 'js' },
    'wp2':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' }
  };

    var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Add package entries for angular packages
  ngPackageNames.forEach(function(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  });
  var config = {
    map: map,
    packages: packages
  }
  System.config(config);
})(this);
