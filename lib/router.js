FlowRouter.route( '/', {
  action: function() {
    BlazeLayout.render( 'main', { 
      content: 'home',
      //additional: 'suggestions',
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