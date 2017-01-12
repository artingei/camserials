FlowRouter.route( '/', {
  action: function() {
    BlazeLayout.render( 'main', { 
      content: 'home',
      additional: 'suggestions',
    }); 
  },
  name: 'home'
});

FlowRouter.route( '/about', {
  action: function() {
    BlazeLayout.render( 'main', { 
      content: 'about',
      //additional: 'suggestions',
    }); 
  },
  name: 'about'
});

FlowRouter.route( '/cam/:camid', {
  action: function( params ) {
	  BlazeLayout.render( 'main', { 
      content: 'results',
    });
  },
  name: 'cam'
});

SEO = new FlowRouterSEO();
SEO.setDefaults({
  title: 'camserials.org',
  description: 'find specific leica, rolleiflex hasselblad and many more cameras by serial number',
  meta: {
    'property="og:type"': 'website',
    'property="og:site_name"': 'camserials.org',
    'name="twitter:card"': 'camserials helps you to find specific camera models from huge serial number pools',
    'name="twitter:site"': '@camserials'
  }
});